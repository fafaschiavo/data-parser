import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Snackbar from '@material-ui/core/Snackbar';
import uniqid from 'uniqid';
import ReactTooltip from 'react-tooltip'
import ScrollArea from 'react-scrollbar';

// Actions
import * as global_action_creators from '../actions/GlobalActions.js';

// CSS Imports
import './styles/Home.css';

// Constants import
import * as constants from '../constants.js'

function validate_css_selector(selector){
	try {
		document.querySelector(selector);
		return true;
	}
	catch {

	}
	return false;
}

class Selector extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open_tags_dialog: false,
			is_selector_valid: true
		}
	}

	render() {
		return (
			<React.Fragment>
				<ReactTooltip />
				<div className="home-selector-container" style={this.state.is_selector_valid ? {} : {backgroundColor: '#fd676417'}}>
					<div className="home-selector-input-container">
						<Input
							label="Dense multiline"
							fullWidth
							disableUnderline={true}
							placeholder="My Awesome CSS selector"
							defaultValue={this.props.config.css_selector}
							onChange={(event) => {
								this.setState({is_selector_valid: validate_css_selector(event.target.value)})
								this.props.edit_selector(this.props.config.selector_id, event.target.value);
							}}
						/>
					</div>
					{this.props.config.tag &&
						<span style={{backgroundColor: this.props.config.tag.color}} className="home-tag-indicator">{this.props.config.tag.title}</span>
					}
					{!this.props.config.tag &&
						<span style={{backgroundColor: '#fd6764'}} className="home-tag-indicator">Post Process</span>
					}
					<i className="home-selector-icon material-icons" onClick={() => this.setState({open_tags_dialog: true})}>label</i>
					<i className="home-selector-icon material-icons">more_horiz</i>
					<i className="home-selector-icon material-icons" onClick={() => this.props.remove_selector(this.props.config.selector_id)}>close</i>
				</div>
				<Divider />

				<Dialog
					onClose={() => this.setState({open_tags_dialog: false})}
					open={this.state.open_tags_dialog}
					aria-labelledby="simple-dialog-title"
				>
					<DialogTitle id="simple-dialog-title">Select a tag</DialogTitle>
					<List>
						<ListItem
							style={{backgroundColor: '#eaeaea'}}
							button
							onClick={() => {
								this.setState({open_tags_dialog: false});
								this.props.add_tag(this.props.config.selector_id, false);
							}}
							key={uniqid()}
						>
							<ListItemText primary="Post process" />
						</ListItem>
						{constants.tag_options.map((tag) => 
							<ListItem
								button
								onClick={() => {
									this.setState({open_tags_dialog: false});
									this.props.add_tag(this.props.config.selector_id, tag);
								}}
								key={uniqid()}
							>
								<ListItemText primary={tag.title} />
							</ListItem>
						)}
					</List>
				</Dialog>
			</React.Fragment>
		);
	}
}


class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			add_selector_field: '',
			selectors: this.props.crawl_selectors ? this.props.crawl_selectors : {},
			urls: this.props.full_list_urls
		}

		this.add_selector = this.add_selector.bind(this);
		this.remove_selector = this.remove_selector.bind(this);
		this.add_tag = this.add_tag.bind(this);
		this.edit_selector = this.edit_selector.bind(this);
		this.next = this.next.bind(this);
	}

	// Add a new empty CSS selector
	add_selector(){
		let new_selectors = Object.assign({}, this.state.selectors);

		let new_id = uniqid();
		new_selectors[new_id] = {
			selector_id: new_id,
			css_selector: this.state.add_selector_field,
			tag: false,
			regex: '',
			attr: '',
			urls: [],
			snackbar_open: false,
			snackbar_message: '',
			redirect: false
		}
		this.setState({selectors: new_selectors})
		this.setState({add_selector_field: ''})
		this.props.actions.set_crawl_selectors(new_selectors)
	}

	remove_selector(selector_id){
		let new_selectors = Object.assign({}, this.state.selectors);
		delete new_selectors[selector_id]
		this.setState({selectors: new_selectors})
		this.props.actions.set_crawl_selectors(new_selectors)
	}

	add_tag(selector_id, tag){
		let new_selectors = Object.assign({}, this.state.selectors);
		new_selectors[selector_id]['tag'] = tag
		this.setState({selectors: new_selectors})
		this.props.actions.set_crawl_selectors(new_selectors)
	}

	edit_selector(selector_id, css_selector){
		let new_selectors = Object.assign({}, this.state.selectors);
		new_selectors[selector_id]['css_selector'] = css_selector;
		// eslint-disable-next-line
		this.state.selectors = new_selectors;
	}

	next(full_list){
		let selectors = Object.assign({}, this.state.selectors);

		// Delete css selectors with invalid format
		for (var i = Object.keys(selectors).length - 1; i >= 0; i--) {
			let current_selector_id = Object.keys(selectors)[i];
			if (!validate_css_selector(selectors[current_selector_id].css_selector)) {
				delete selectors[current_selector_id]
			}
		}

		if (Object.keys(selectors).length === 0) {
			this.setState({snackbar_message: 'No proper CSS selector found'})
			this.setState({snackbar_open: true})
			return
		}

		this.props.actions.set_crawl_selectors(selectors)
		
		this.setState({redirect: "/urls/"})
	
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to={this.state.redirect} />
		}

		return (
			<div className="home-main-container">
				<ReactTooltip />
				<Paper className="home-section">
					<div className="home-section-header">
						<div>
							<div className="home-section-header-title">
								Selectors
							</div>
							<div className="home-section-header-subtitle">
								Add your CSS selectors and their respective tags
							</div>
						</div>
						<div>							
							<Button className="home-run-button" variant="contained" color="primary" onClick={this.next}>NEXT</Button>
						</div>
					</div>
					<ScrollArea
						speed={0.8}
						className="home-section-body"
						contentClassName="content"
						horizontal={false}
						smoothScrolling={true}
					>
						
						<React.Fragment>
							<br />
							<Divider />
						

							{Object.keys(this.state.selectors).map((selector_id) => {
								return(
									<Selector
										config={this.state.selectors[selector_id]}
										remove_selector={this.remove_selector}
										add_tag={this.add_tag}
										edit_selector={this.edit_selector}
										key={uniqid()}
									/>
								)
							})}

							<div className="home-selector-container">
								<div className="home-selector-input-container">
									<Input
										label="CSS Selector"
										fullWidth
										disableUnderline={true}
										placeholder="My Awesome CSS selector"
										value={this.state.add_selector_field}
										onChange={(event) => this.setState({add_selector_field: event.target.value})}
										onKeyDown={(e) => {if (e.key === 'Enter') this.add_selector()}}
									/>
								</div>
								<i className="home-selector-icon material-icons" onClick={this.add_selector}>add</i>
							</div>
							<Divider />
						</React.Fragment>

					</ScrollArea>
				</Paper>

				<Snackbar message={this.state.snackbar_message} open={this.state.snackbar_open} onClose={() => this.setState({snackbar_open: false})} />
			</div>
		);
	}
}

// Map Redux state to component props
function mapStateToProps(state) {
	return {
		crawl_selectors: state.GlobalReducer.crawl_selectors,
	}
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({...global_action_creators}, dispatch)
	}
}

// Connect component to the store
export default connect(mapStateToProps, mapDispatchToProps)(Home)









