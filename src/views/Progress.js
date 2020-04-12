import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom';
import $ from "jquery";
import uniqid from 'uniqid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

// Actions
import * as global_action_creators from '../actions/GlobalActions.js';

// CSS Imports
import './styles/Progress.css';

// Constants import
import * as constants from '../constants.js'

class Progress extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			urls: this.props.crawl_urls,
			in_queue_counter: 0,
			initial_queue_size: 0,
			redirect: false,
			matches: {}
		}

		this.crawl = this.crawl.bind(this);
		this.crawl_next = this.crawl_next.bind(this);
		this.count_in_queue = this.count_in_queue.bind(this);
		this.update_queue = this.update_queue.bind(this);
		this.crawl_finished = this.crawl_finished.bind(this);

		this.state.initial_queue_size = this.count_in_queue();
		this.crawl_next();
		this.state.in_queue_counter = this.count_in_queue() + 1;
	}

	crawl_next(){
		let urls = Object.assign({}, this.state.urls);
		for (var i = 0; i < Object.keys(urls).length; i++) {
			let current_url_id = Object.keys(urls)[i];
			let current_url = urls[current_url_id];
			if (current_url.status === 'in_queue') {
				urls[current_url_id].status = 'scraping'
				this.setState({urls: urls})
				this.update_queue();
				this.crawl(current_url)
				return
			}
		}

		this.crawl_finished()
		return
	}

	crawl(url){
		var selector_ids = Object.keys(this.props.crawl_selectors);

		// Create an empty dict for the current URL being crawler
		// eslint-disable-next-line
		this.state.matches[url.url_id] = {}

		// Now, for each one of the selector IDs, let's create an empty array with the selector id as the key.
		// They will later be replaces with the matches if we find any.
		for (var i = selector_ids.length - 1; i >= 0; i--) {
			let selector_id = selector_ids[i];
			// eslint-disable-next-line
			this.state.matches[url.url_id][selector_id] = []
		}

		$.ajax({
			context: this,
			url: constants.scraper_endpoint,
			type: 'get',
			data: {
				url: url.url,
				selectors: this.props.crawl_selectors,
				settings: this.props.scraper_settings
			},
			success: function(data) {
				// eslint-disable-next-line
				this.state.matches[url.url_id] = Object.assign(this.state.matches[url.url_id], data.matches);

				let urls = Object.assign({}, this.state.urls);
				urls[url.url_id].status = data.status
				urls[url.url_id].page_source = data.page_source
				urls[url.url_id].response_code = data.response_code
				this.setState({urls: urls})
				this.crawl_next();
			},
			error: function(data) {
				let urls = Object.assign({}, this.state.urls);
				urls[url.url_id].status = 'error'
				this.setState({urls: urls})
				this.crawl_next();
			},
			complete: function(XHR, status){
				this.update_queue();
			},
			timeout: 120000
		});
	}

	count_in_queue(){
		let counter = 0;
		for (var i = Object.keys(this.state.urls).length - 1; i >= 0; i--) {
			let current_url_id = Object.keys(this.state.urls)[i];
			let current_url = this.state.urls[current_url_id];
			if (current_url.status === 'in_queue') {
				counter = counter + 1
			}
		}
		return counter
	}

	update_queue(){
		let counter = this.count_in_queue();
		this.setState({in_queue_counter: counter + 1});
	}

	crawl_finished(){
		this.props.actions.set_crawl_urls(this.state.urls)
		this.props.actions.set_partial_results(this.state.matches);
		this.setState({redirect: "/partial-results/"})
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}

		return (
			<div className="progress-main-container">
				<Paper className="progress-section">
					<div className="progress-section-header">
						<div className="progress-section-header-title">Now running...</div>
						<Button className="home-run-button" variant="contained" color="secondary" onClick={() => this.setState({redirect: "/urls/"}) }>CANCEL</Button>
					</div>
					<LinearProgress className="progress-loading-bar" variant="determinate" value={100*((this.state.initial_queue_size - this.state.in_queue_counter)/this.state.initial_queue_size)} />
					<div className="progress-section-progress-legend">{this.state.initial_queue_size - this.state.in_queue_counter}/{this.state.initial_queue_size} urls processed</div>
				</Paper>
				<Paper className="progress-section">
					<div className="progress-section-header-title">Crawl Results</div>
					<React.Fragment>
						<br />
						<Divider />
						<div className="progress-section-url-container">
							{Object.keys(this.state.urls).map((url_id) => {
								return(
									<React.Fragment key={uniqid()}>
										<div className="progress-item" key={uniqid()}>
											<div key={uniqid()} className="progress-item-url">{this.state.urls[url_id].url}</div>
											<div key={uniqid()} className="progress-item-status">{this.state.urls[url_id].status}</div>
										</div>
										<Divider key={uniqid()} />
									</React.Fragment>
								)
							})}
						</div>
					</React.Fragment>

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
		scraper_settings: state.GlobalReducer.scraper_settings,
	}
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({...global_action_creators}, dispatch)
	}
}

// Connect component to the store
export default connect(mapStateToProps, mapDispatchToProps)(Progress)
