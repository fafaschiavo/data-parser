import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Input from '@material-ui/core/Input';
import { Redirect } from 'react-router-dom';
import Popover from 'react-text-selection-popover';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ScrollArea from 'react-scrollbar';
import uniqid from 'uniqid';

// Actions
import * as global_action_creators from '../actions/GlobalActions.js';

// CSS Imports
import './styles/PostProcess.css';

// Constants import
import * as constants from '../constants.js'


class NewMatch extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<React.Fragment>
				<div className="post-process-selector-container">

					<div className="post-process-selector-input-container">
						<Input
							label="Dense multiline"
							fullWidth
							disableUnderline={true}
							placeholder=""
							defaultValue={this.props.match.text}
							onChange={(event) => {
								// this.props.edit_selector(this.props.config.selector_id, event.target.value);
							}}
						/>
					</div>
					<span style={{backgroundColor: this.props.match.tag.color}} className="post-process-tag-indicator">{this.props.match.tag.title}</span>
					<CopyToClipboard text={this.props.match.text}>
						<i className="post-process-selector-icon material-icons">flip_to_front</i>
					</CopyToClipboard>
					<i className="post-process-selector-icon material-icons" onClick={() => this.props.parent.remove_match(this.props.match.tag.tag_id)}>close</i>
				</div>
				<Divider />
			</React.Fragment>
		);
	}
}



var popover_timer = window.setTimeout(() => {}, 1);

class PostProcessPopovoer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			is_open: false,
			close_timeout: false,
			current_selection: ''
		}

		this.popover_close = this.popover_close.bind(this);
		this.popover_open = this.popover_open.bind(this);
	}

	popover_open(){
		let selection = window.getSelection().toString()
		// eslint-disable-next-line
		this.props.parent.state.current_selection = selection;

		window.clearTimeout(popover_timer);
		this.setState({ is_open: true })
	}

	popover_close(){
		window.clearTimeout(popover_timer);
		popover_timer = window.setTimeout(() => {
			this.setState({ is_open: false });
			// eslint-disable-next-line
			this.props.parent.state.current_selection = '';
		}, 400);
	}

	render() {
		return (
			<React.Fragment>
				{this.props.children}
				<Popover
					selectionRef={this.props.ref_element}
					isOpen={this.state.is_open}
					onTextSelect={this.popover_open}
					onTextUnselect={this.popover_close}
				>
					{/*
					<div className="post-process-popover-content">
						{constants.tag_options.map((tag) => 
							<div
								className="post-process-popover-tag"
								onClick={() => { this.props.parent.add_match(tag) }} 
								key={uniqid()}
							>
								<div className="post-process-popover-tag-color" style={{backgroundColor: tag.color}} key={uniqid()}></div>
								<div className="post-process-popover-tag-title" key={uniqid()}>{tag.title}</div>
							</div>
						)}
					</div>
					*/}
				</Popover>
			</React.Fragment>
		);
	}
}


function prepare_post_process_array(urls, selectors, matches){
	var to_post_process_array = [];

	// Now let's create an array with all the elements that should be post processed
	for (var i = 0; i < Object.keys(urls).length; i++) {
		let url_id = Object.keys(urls)[i];
		let url = urls[url_id];

		// Check if the crawl was a success, ignore otherwise
		if (url.status === 'success') {

			// eslint-disable-next-line
			for (var j = 0; j < Object.keys(selectors).length; j++) {

				let selector_id = Object.keys(selectors)[j];
				let selector = selectors[selector_id];

				// Check if the tag for the selector is false, that's the signal that the selctor has no defined tag and should rather be post-processed
				// Also check if the post process tag was found in the page source code

				if (selector.tag === false) {
					for (var k = matches[url_id][selector_id].length - 1; k >= 0; k--) {
						// If it was, then append the match to be post processed
						to_post_process_array.push({
							match: matches[url_id][selector_id][k],
							selector: selector,
							url: url,
							post_processed: {}
						})
					}
				}

			}
		}
	}

	return to_post_process_array;
}

function prepare_final_resuts(urls, selectors, matches, post_processed){
	// Now let's create an array with all possible tag IDs to use as the columns for our export
	var all_tags = [];
	
	// Now push to the all_tags array all the non-post-process tags
	for (var i = 0; i < Object.keys(selectors).length; i++) {
		let selector_id = Object.keys(selectors)[i];
		let selector = selectors[selector_id];
		if (selector.tag) {
			all_tags.push(selector.tag.tag_id)
		}
	}

	// Now push to the all_tags array all tags created during post-process
	// eslint-disable-next-line
	for (var i = post_processed.length - 1; i >= 0; i--) {
		for (var j = 0; j < Object.keys(post_processed[i].post_processed).length; j++) {
			let match_id = Object.keys(post_processed[i].post_processed)[j];
			let match = post_processed[i].post_processed[match_id];
			all_tags.push(match.tag.tag_id)
		}
	}

	// This is the object that will contain all the results extracted so far
	// It will be a two-dimensional array with url ids in the first dimension and tag ids in the second
	var results = {};

	// Now let's fill the results array with false for all possible tags, we will later fill this object with the actual results
	// eslint-disable-next-line
	for (var i = 0; i < Object.keys(urls).length; i++) {
		let url_id = Object.keys(urls)[i];
		let url = urls[url_id];
		
		// Check if the crawl was a success, ignore otherwise
		if (url.status === 'success') {
			
			// create the url key
			results[url.url_id] = {}

			// Now fill the url key with all possible tags, but with empty value for each
			// eslint-disable-next-line
			for (var j = all_tags.length - 1; j >= 0; j--) {
				let current_tag = all_tags[j];
				results[url.url_id][current_tag] = []
			}
		}
	}

	// Now let's fill the result array with the non post-process results
	// eslint-disable-next-line
	for (var i = 0; i < Object.keys(matches).length; i++) {
		let url_id = Object.keys(matches)[i];
		let selector_ids = matches[url_id];

		// eslint-disable-next-line
		for (var j = 0; j < Object.keys(selector_ids).length; j++) {
			let selector_id = Object.keys(selector_ids)[j];
			let selector = selectors[selector_id];
			let result = selector_ids[selector_id];
			let tag = selector.tag;

			// If tag equals false, that means this selector should be post-processed and thus the resuls were already included in the previous loop
			// So we only have to add the resuls where the tag actually has a tag dict assigned to it
			if (tag) {
				results[url_id][tag.tag_id] = result
			}
		}
	}

	// Now let's fill the result array with the post-process results
	// eslint-disable-next-line
	for (var i = post_processed.length - 1; i >= 0; i--) {
		let url_id = post_processed[i].url.url_id;
		let post_processed_tags = post_processed[i].post_processed;

		// eslint-disable-next-line
		for (var j = 0; j < Object.keys(post_processed_tags).length; j++) {
			let post_procced_tag_id = Object.keys(post_processed_tags)[j];
			let post_procced_tag = post_processed_tags[post_procced_tag_id]

			results[url_id][post_procced_tag.tag.tag_id] = [{text: post_procced_tag.text, html: post_procced_tag.text}]

			// results[url_id][post_procced_tag.tag.tag_id] = post_procced_tag.text;
		}
	}

	return(results)
}


class PostProcess extends React.Component {
	constructor(props) {
		super(props);

		this.ref_text = React.createRef()
		this.ref_html = React.createRef()
		
		// eslint-disable-next-line
		var to_post_process_array = prepare_post_process_array(this.props.crawl_urls, this.props.crawl_selectors, this.props.partial_results);

		this.state = {
			current_match_index: 0,
			to_post_process_array: to_post_process_array,
			current_selection: '',
			redirect: false,
			current_tag_type: '',
			render_divider: false
		}

		this.add_match = this.add_match.bind(this);
		this.remove_match = this.remove_match.bind(this);
		this.clear_matches = this.clear_matches.bind(this);
		this.finish_post_process = this.finish_post_process.bind(this);

		if (this.state.to_post_process_array.length === 0 ) {
			let results = prepare_final_resuts(this.props.crawl_urls, this.props.crawl_selectors, this.props.partial_results, this.state.to_post_process_array);
			this.props.actions.set_final_results(results);
			this.state.redirect = '/final-results/';
		}
	}

	add_match(tag){
		// Create a copy of the current to_post_process_array
		var new_to_post_process_array = this.state.to_post_process_array.slice();

		new_to_post_process_array[this.state.current_match_index].post_processed[tag.tag_id] = {text: this.state.current_selection, html: this.state.current_selection, tag: tag}
		this.setState({to_post_process_array: new_to_post_process_array});
	}

	remove_match(tag_id){
		var new_to_post_process_array = this.state.to_post_process_array.slice();

		delete new_to_post_process_array[this.state.current_match_index].post_processed[tag_id]
		this.setState({to_post_process_array: new_to_post_process_array});
	}

	clear_matches(){
		var new_to_post_process_array = this.state.to_post_process_array.slice();
		for (var i = Object.keys(new_to_post_process_array[this.state.current_match_index].post_processed).length - 1; i >= 0; i--) {
			let tag_id = Object.keys(new_to_post_process_array[this.state.current_match_index].post_processed)[i];
			delete new_to_post_process_array[this.state.current_match_index].post_processed[tag_id]
		}

		this.setState({to_post_process_array: new_to_post_process_array});
	}

	finish_post_process(){
		let results = prepare_final_resuts(this.props.crawl_urls, this.props.crawl_selectors, this.props.partial_results, this.state.to_post_process_array)
		this.props.actions.set_final_results(results)
		this.setState({redirect: '/final-results/'})
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}

		return (
			<div className="post-process-main-container">
				<div className="post-process-main-container-inner">
					<Paper className="post-process-section">
						<div className="post-process-section-header">
							<div>
								<div className="post-process-section-header-title">
									Post Processing
								</div>
								<div className="post-process-section-header-subtitle">
									Please highlight and tag all the content accordingly
								</div>
							</div>
							<div>
								<a href={this.state.to_post_process_array[this.state.current_match_index].url.url} rel="noopener noreferrer" target="_blank">
									<Button className="post-process-previous-button" variant="contained" color="secondary">VISIT PAGE</Button>
								</a>
								{this.state.current_match_index === 0 &&
									<Button className="post-process-previous-button" variant="contained" color="primary" onClick={() => this.setState({redirect: '/partial-results/'})}>BACK</Button>
								}
								{this.state.current_match_index > 0 &&
									<Button className="post-process-previous-button" variant="contained" color="primary" onClick={() => this.setState({current_match_index: this.state.current_match_index - 1})}>PREVIOUS</Button>
								}
								{this.state.current_match_index < this.state.to_post_process_array.length - 1 &&
									<Button className="post-process-next-button" variant="contained" color="primary" onClick={() => this.setState({current_match_index: this.state.current_match_index + 1})}>NEXT</Button>
								}
								{this.state.current_match_index === this.state.to_post_process_array.length - 1 &&
									<Button className="post-process-next-button" variant="contained" color="primary" onClick={this.finish_post_process}>FINISH</Button>
								}
							</div>
						</div>
						<div className="post-process-section-body">
							<br />
							<div className="post-process-section-body-inner">
								<ScrollArea className="post-process-section-body-left" verticalContainerStyle={{width: 4}}>
									{constants.tag_options.map((tag) => {
										if (tag.type !== this.state.current_tag_type) {
											// eslint-disable-next-line
											this.state.current_tag_type = tag.type;
											// eslint-disable-next-line
											this.state.render_divider = true;
										}else{
											// eslint-disable-next-line
											this.state.render_divider = false;
										}

										return(
											<React.Fragment>
												{this.state.render_divider &&
													<React.Fragment>
														<div className="post-process-popover-divider-title">{this.state.current_tag_type}</div>
														<Divider />
													</React.Fragment>
												}
												<div
													className="post-process-popover-tag"
													key={uniqid()}
													onClick={() => { this.add_match(tag) }} 
												>
													<div className="post-process-popover-tag-color" style={{backgroundColor: tag.color}} key={uniqid()}></div>
													<div className="post-process-popover-tag-title" key={uniqid()}>{tag.title}</div>
												</div>
											</React.Fragment>
										)
									}
									)}
								</ScrollArea>
								<div className="post-process-section-body-right">
									<PostProcessPopovoer parent={this} ref_element={this.ref_text}>
										<div className="post-process-raw-text" contentEditable="true" ref={this.ref_text}>
											{this.state.to_post_process_array[this.state.current_match_index].match.text}
										</div>
									</PostProcessPopovoer>
									<PostProcessPopovoer parent={this} ref_element={this.ref_html}>
										<div className="post-process-raw-html" contentEditable="true" ref={this.ref_html}>
											{this.state.to_post_process_array[this.state.current_match_index].match.html}
										</div>
									</PostProcessPopovoer>
								</div>
							</div>
						</div>
					</Paper>

					<Paper className="post-process-section">
						<div className="post-process-section-header">
							<div>
								<div className="post-process-section-header-title">
									Current Tags
								</div>
								<div className="post-process-section-header-subtitle">
									These are the tags selected so far
								</div>
							</div>
							<div>							
								<Button className="post-process-next-button" variant="contained" color="primary" onClick={this.clear_matches}>CLEAR</Button>
							</div>
						</div>
						<br />
						{Object.keys(this.state.to_post_process_array[this.state.current_match_index].post_processed).length > 0 &&
							<Divider />
						}
						<ScrollArea className="post-process-section-body post-process-matcehs-section">
							{Object.keys(this.state.to_post_process_array[this.state.current_match_index].post_processed).map((tag_id) => {
								let match = this.state.to_post_process_array[this.state.current_match_index].post_processed[tag_id];
								return(
									<NewMatch parent={this} match={match} key={uniqid()}/>
								)
							})}
						</ScrollArea>
					</Paper>

				</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(PostProcess)