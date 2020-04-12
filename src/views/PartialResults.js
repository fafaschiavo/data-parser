import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom';
import { Table } from 'semantic-ui-react'
import uniqid from 'uniqid';
import { parse } from 'node-html-parser';
import EllipsisText from 'react-ellipsis-text';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CSVLink } from "react-csv";
import posed from 'react-pose';
import ReactJson from 'react-json-view'
import validate from 'validate.js';

// Actions
import * as global_action_creators from '../actions/GlobalActions.js';

// CSS Imports
import './styles/PartialResults.css';

function get_data_from_tag(tag, attr){
	if (attr === 'innerText') {
		return tag.structuredText
	}

	var result = tag.getAttribute(attr);
	if (result == null){
    	return ''
	}

	return result

}

function get_content(urls, selectors){
	let matches = {}

	// Now let's iterate over each url scraped
	for (var i = Object.keys(urls).length - 1; i >= 0; i--) {
		let url_id = Object.keys(urls)[i];
		let url = urls[url_id];

		// Now let's create an empty entry for each one of the URLs, this entry will later be filled with the selectors results
		matches[url_id] = {}

		// We should only parse URLs that were successfully scraped
		if (url.status === "success") {

			// Now create a soup from the raw page source code
			let soup = parse(url.page_source);

			// Now let's find the elements of interest withing the soup using the user's CSS selectors
			for (var j = Object.keys(selectors).length - 1; j >= 0; j--) {
				let selector_id = Object.keys(selectors)[j];
				let selector = selectors[selector_id];

				// Now get the target element from the soup
				let tag = soup.querySelector(selector.css_selector);
				let tags = soup.querySelectorAll(selector.css_selector);

				// Check if the element was found, if it is then, get the inner text,
				// otherwise just assign false to the result array
				if (tag !== null) {
					if (tags.length > 1) {
						let text = {
							'data_type': 'json',
							matches: []
						}

						let outerHTML = {
							'data_type': 'json',
							matches: []
						}

						for (var k = tags.length - 1; k >= 0; k--) {
							let unitary_tag = tags[k];
							text.matches.push(get_data_from_tag(unitary_tag, selector.attr))
							outerHTML.matches.push(unitary_tag.outerHTML)
						}
						matches[url_id][selector_id] = {data_type: 'json', text: JSON.stringify(text), html: JSON.stringify(outerHTML)}
					}else{
						matches[url_id][selector_id] = {data_type: 'single', text: get_data_from_tag(tag, selector.attr), html: tag.outerHTML}
					}
				}else{
					matches[url_id][selector_id] = false
				}
			}
		}else{
			// If the page surce wasn't scraped successfuly, then simply assign false to every selector
			// eslint-disable-next-line
			for (var j = Object.keys(selectors).length - 1; j >= 0; j--) {
				let selector_id = Object.keys(selectors)[j];
				matches[url_id][selector_id] = false
			}
		}

	}

	return matches
}

function generate_csv_from_matches(urls, selectors, matches){
	let csv_export_array = [];

	let selector_titles = [];
	for (var j = 0; j < Object.keys(selectors).length; j++) {
		let selector_id = Object.keys(selectors)[j];
		let selector = selectors[selector_id];
		selector_titles.push(selector.tag.title ? selector.tag.title : 'Post Process')
	}	

	let header = ['URL', 'Status', 'Response Code', ...selector_titles];
	csv_export_array.push(header)

	for (var i = 0; i < Object.keys(urls).length; i++) {
		let current_row = []
		let url_id = Object.keys(urls)[i];
		let url = urls[url_id];
		current_row.push(url.url)
		current_row.push(url.status ? url.status : '')
		current_row.push(url.response_code)

		// eslint-disable-next-line
		for (var j = 0; j < Object.keys(selectors).length; j++) {
			let selector_id = Object.keys(selectors)[j];

			if (matches[url_id][selector_id].length === 0) {
				current_row.push('');

			} else if (matches[url_id][selector_id].length === 1) {
				current_row.push(matches[url_id][selector_id][0].text.replace(/(\r\n|\n|\r)/gm, " "));

			}else{
				current_row.push(JSON.stringify(matches[url_id][selector_id]).replace(/(\r\n|\n|\r)/gm, " "));
			}

		}

		csv_export_array.push(current_row)
	}

	return csv_export_array
}


const PosedCell = posed.div({
	pressable: true,
	init: { scale: 1 },
	press: { scale: 0.98 }
});


class PartialResults extends React.Component {
	constructor(props) {
		super(props);

		let matches = get_content(this.props.crawl_urls, this.props.crawl_selectors)

		this.state = {
			matches: matches,
			redirect: false,
			open_dialog: false,
			dialog_json: [],
			dialog_url: '',
		}

		this.use_result_as_urls = this.use_result_as_urls.bind(this);
	}

	use_result_as_urls(){
		// Get base URL (without path) to use with relative paths down the line
		const url = document.createElement('a');
		url.setAttribute('href', this.state.dialog_url);
		let base_url = url.protocol + '//' + url.hostname;
		if (url.port.length > 0) {
			base_url = base_url + ':' + url.port
		}
		// base_url = base_url + '/'

		// Create a regex pattern to test for absolute URLs
		var regex_pattern = new RegExp('^(?:[a-z]+:)?//', 'i');

		var urls_to_crawl = {};
		for (var i = this.state.dialog_json.length - 1; i >= 0; i--) {
			let scraped_url = this.state.dialog_json[i].text;
			let is_absolute_url = regex_pattern.test(scraped_url)

			if (is_absolute_url) {
				let url_checker = validate({website: scraped_url}, {website: {url: true}});

				if (url_checker === undefined) {
					let new_url_id = uniqid();
					urls_to_crawl[new_url_id] = {
						url: scraped_url,
						url_id: new_url_id,
						'status': 'in_queue',
						page_source: false,
						response_code: false
					}
				}
			}else{
				let url_checker = validate({website: base_url + scraped_url}, {website: {url: true}});

				if (url_checker === undefined) {
					let new_url_id = uniqid();
					urls_to_crawl[new_url_id] = {
						url: base_url + scraped_url,
						url_id: new_url_id,
						'status': 'in_queue',
						page_source: false,
						response_code: false
					}
				}
			}
		}

		this.setState({open_dialog: false});
		this.props.actions.set_full_list_urls(urls_to_crawl);
		this.setState({redirect: '/'});
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}
	
		return (
			<div className="partial-main-container">
				<Paper className="partial-section">
					<div className="partial-section-header">
						<div>
							<div className="partial-section-header-title">
								Partial Results
							</div>
							<div className="partial-section-header-subtitle">
								Data parsed using the scraper results before post processing
							</div>
						</div>
						<div>
							<Button className="post-process-previous-button" variant="contained" color="secondary" onClick={() => this.setState({redirect: '/urls/'})}>BACK</Button>
							<CSVLink separator={"|"} enclosingCharacter={`"`} filename={"pipe-separated-partial-data.csv"} data={generate_csv_from_matches(this.props.crawl_urls, this.props.crawl_selectors, this.props.partial_results)}>
								<Button className="partial-download-button" variant="contained" color="secondary">DOWNLOAD</Button>
							</CSVLink>
							<Button className="partial-postprocess-button" variant="contained" color="primary" onClick={() => {this.setState({redirect: "/post-process/"})}}>Post Process</Button>
						</div>
					</div>
					<div className="partial-section-body">
						<div className="table-container">
							<Table collapsing celled>
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell>URL</Table.HeaderCell>
										{Object.keys(this.props.crawl_selectors).map((selector_id) => {
											return(
												<Table.HeaderCell>{this.props.crawl_selectors[selector_id].tag.title ? this.props.crawl_selectors[selector_id].tag.title : 'Post Process' }</Table.HeaderCell>
											)
										})}
										<Table.HeaderCell>Status</Table.HeaderCell>
										<Table.HeaderCell>Response Code</Table.HeaderCell>
									</Table.Row>
								</Table.Header>
								<Table.Body>
									{Object.keys(this.props.crawl_urls).map((url_id) => {
										return(
											<Table.Row key={uniqid()}>
												<Table.Cell>
													<PosedCell>
														<CopyToClipboard text={this.props.crawl_urls[url_id].url}>
															<EllipsisText text={this.props.crawl_urls[url_id].url} length={"70"} />
														</CopyToClipboard>
													</PosedCell>
												</Table.Cell>
												{Object.keys(this.props.crawl_selectors).map((selector_id) => {
													return(
														<Table.Cell>
															<PosedCell>
																{this.props.partial_results[url_id][selector_id].length === 1 &&
																<CopyToClipboard text={ this.props.partial_results[url_id][selector_id][0].text }>
																	<EllipsisText
																		text={ this.props.partial_results[url_id][selector_id][0].text }
																		length={"70"}
																	/>
																</CopyToClipboard>
																}
																{this.props.partial_results[url_id][selector_id].length > 1 &&
																	<span className="partial-multiple-found" onClick={() => {
																		this.setState({dialog_json: this.props.partial_results[url_id][selector_id]});
																		// eslint-disable-next-line
																		this.state.dialog_url = this.props.crawl_urls[url_id].url;
																		this.setState({open_dialog: true});
																	}}>
																		Multiple Found
																	</span>
																}
															</PosedCell>
														</Table.Cell>
													)
												})}
												<Table.Cell>
													<PosedCell>	
														<CopyToClipboard text={this.props.crawl_urls[url_id].status}>
															<EllipsisText text={this.props.crawl_urls[url_id].status} length={"70"} />
														</CopyToClipboard>
													</PosedCell>	
												</Table.Cell>
												<Table.Cell>
													<PosedCell>
														<CopyToClipboard text={this.props.crawl_urls[url_id].response_code.toString()}>
															<EllipsisText text={this.props.crawl_urls[url_id].response_code.toString()} length={"70"} />
														</CopyToClipboard>
													</PosedCell>
												</Table.Cell>
											</Table.Row>
										)
									})}
								</Table.Body>
							</Table>
						</div>
					</div>
				</Paper>


				<Dialog
					open={this.state.open_dialog}
					onClose={() => this.setState({open_dialog: false})}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">Your selector returned multiple elements</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							<ReactJson collapsed={true} src={this.state.dialog_json} />
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button variant="contained" color="secondary" onClick={() => this.setState({open_dialog: false})}>CLOSE</Button>
						<Button variant="contained" color="primary" onClick={this.use_result_as_urls}>USE AS URLS</Button>
					</DialogActions>
				</Dialog>
			</div>

		);
	}
}

// Map Redux state to component props
function mapStateToProps(state) {
	return {
		crawl_urls: state.GlobalReducer.crawl_urls,
		crawl_selectors: state.GlobalReducer.crawl_selectors,
		partial_results: state.GlobalReducer.partial_results,
	}
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({...global_action_creators}, dispatch)
	}
}

// Connect component to the store
export default connect(mapStateToProps, mapDispatchToProps)(PartialResults)