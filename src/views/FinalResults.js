import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom';
import { Table } from 'semantic-ui-react'
import uniqid from 'uniqid';
import EllipsisText from 'react-ellipsis-text';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { CSVLink } from "react-csv";
import posed from 'react-pose';
import ReactJson from 'react-json-view'

// Constants import
import * as constants from '../constants.js'

// Actions
import * as global_action_creators from '../actions/GlobalActions.js';

// CSS Imports
import './styles/FinalResults.css';

function randomProperty(obj) {
	var keys = Object.keys(obj);
	return keys[0];
};

const PosedCell = posed.div({
	pressable: true,
	init: { scale: 1 },
	press: { scale: 0.98 }
});

function create_tag_dict(tag_array){
	var tag_dict = {}
	for (var i = tag_array.length - 1; i >= 0; i--) {
		let current_tag = tag_array[i]
		tag_dict[current_tag.tag_id] = current_tag;
	}

	return tag_dict
}

function generate_csv_from_matches(final_results, tags, urls){
	let csv_export_array = [];

	let tag_titles = [];
	let random_key = randomProperty(final_results)
	for (var i = Object.keys(final_results[random_key]).length - 1; i >= 0; i--) {
		let current_tag = Object.keys(final_results[random_key])[i];
		if (current_tag in tags) {
			tag_titles.push(tags[current_tag].title)
		}else{
			tag_titles.push('Composed')
		}
	}

	let header = ['URL', 'Status', 'Response Code', ...tag_titles];

	csv_export_array.push(header)

	// eslint-disable-next-line
	for (var i = Object.keys(final_results).length - 1; i >= 0; i--) {
		let current_row = []
		let current_url = Object.keys(final_results)[i];

		current_row.push(urls[current_url].url)
		current_row.push(urls[current_url].status)
		current_row.push(urls[current_url].response_code)

		for (var j = Object.keys(final_results[current_url]).length - 1; j >= 0; j--) {
			let current_tag = Object.keys(final_results[current_url])[j]
			if (final_results[current_url][current_tag]) {
				current_row.push(final_results[current_url][current_tag])
			}else{
				current_row.push('')
			}
		}

		csv_export_array.push(current_row)
	}

	return csv_export_array
}

class FinalResults extends React.Component {
	constructor(props) {
		super(props);

		var tag_dict = create_tag_dict(constants.tag_options)

		this.state = {
			tags: tag_dict,
			csv_data: generate_csv_from_matches(this.props.final_results, tag_dict, this.props.crawl_urls),
			redirect: false
		}

		console.log(this.props.final_results)
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}

		return (
			<div className="final-main-container">
				<Paper className="final-section">
					<div className="final-section-header">
						<div>
							<div className="final-section-header-title">
								Final Results
							</div>
							<div className="final-section-header-subtitle">
								Data parsed using the scraper results after post processing
							</div>
						</div>
						<div>
							<Button className="final-home-button" variant="contained" color="secondary" onClick={() => {this.setState({redirect: "/"})}}>Home</Button>
							<CSVLink separator={"|"} filename={"pipe-separated-final-data.csv"} data={this.state.csv_data}>
								<Button className="final-download-button" variant="contained" color="primary">DOWNLOAD</Button>
							</CSVLink>
						</div>
					</div>
					<div className="final-section-body">
						<div className="table-container">
							<Table collapsing celled>
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell>URL</Table.HeaderCell>
										{Object.keys(this.props.final_results[Object.keys(this.props.final_results)[0]]).map((tag_id) => {
											return(
												<Table.HeaderCell key={uniqid()}>{tag_id in this.state.tags ? this.state.tags[tag_id].title : 'Composed'}</Table.HeaderCell>
											)
										})}
										<Table.HeaderCell>Status</Table.HeaderCell>
										<Table.HeaderCell>Response Code</Table.HeaderCell>
									</Table.Row>
								</Table.Header>
								<Table.Body>
									{Object.keys(this.props.final_results).map((url_id) => {
										return(
											<Table.Row key={uniqid()}>
												<Table.Cell>
													<PosedCell>
														<CopyToClipboard text={this.props.crawl_urls[url_id].url}>
															<EllipsisText text={this.props.crawl_urls[url_id].url} length={"70"} />
														</CopyToClipboard>
													</PosedCell>
												</Table.Cell>
												{Object.keys(this.props.final_results[url_id]).map((tag_id) => {
													if (tag_id in this.state.tags) {
														return(
															<Table.Cell key={uniqid()}>
																<PosedCell>
																	<CopyToClipboard text={this.props.final_results[url_id][tag_id].toString()}>
																		<EllipsisText text={this.props.final_results[url_id][tag_id].toString()} length={"70"} />
																	</CopyToClipboard>
																</PosedCell>
															</Table.Cell>
														)
													}else{
														return(
															<Table.Cell key={uniqid()}>
																<ReactJson collapsed={true} src={JSON.parse(this.props.final_results[url_id][tag_id])} />
															</Table.Cell>
														)
													}
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
			</div>
		);
	}
}


// Map Redux state to component props
function mapStateToProps(state) {
	return {
		crawl_urls: state.GlobalReducer.crawl_urls,
		crawl_selectors: state.GlobalReducer.crawl_selectors,
		final_results: state.GlobalReducer.final_results,
	}
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({...global_action_creators}, dispatch)
	}
}

// Connect component to the store
export default connect(mapStateToProps, mapDispatchToProps)(FinalResults)