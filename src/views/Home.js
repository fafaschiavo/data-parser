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
import Snackbar from '@material-ui/core/Snackbar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import uniqid from 'uniqid';
import ReactTooltip from 'react-tooltip'
import ScrollArea from 'react-scrollbar';
import $ from "jquery";

// Actions
import * as global_action_creators from '../actions/GlobalActions.js';

// CSS Imports
import './styles/Home.css';

// Constants import
import * as constants from '../constants.js'

function json_parse_booleans(key, value){
	if (value === 'false') {
		return false
	}
	return value
}

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
			open_attributes_dialog: false,
			is_selector_valid: true,
			custom_attribute: ''
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

					<span style={{backgroundColor: '#361ffb', marginLeft: 10, color: 'white'}} className="home-tag-indicator">{this.props.config.attr}</span>
					<i className="home-selector-icon material-icons" onClick={() => this.setState({open_tags_dialog: true})}>label</i>
					<i className="home-selector-icon material-icons" onClick={() => this.setState({open_attributes_dialog: true})}>code</i>
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

				<Dialog
					onClose={() => this.setState({open_attributes_dialog: false})}
					open={this.state.open_attributes_dialog}
					aria-labelledby="simple-dialog-title"
				>
					<DialogTitle id="simple-dialog-title">Select an Attribute</DialogTitle>
					<TextField
						style={{margin: 10}}
						label="Custom Attribute"
						variant="outlined"
						value={this.state.new_selector_set_name}
						// eslint-disable-next-line
						onChange={(event) => this.state.custom_attribute = event.target.value}
						onKeyDown={(e) => { if (e.key === 'Enter') this.props.add_attribute(this.props.config.selector_id, this.state.custom_attribute); }}
					/>
					<List>
						<ListItem
							button
							onClick={() => {
								this.setState({open_attributes_dialog: false});
								this.props.add_attribute(this.props.config.selector_id, 'innerText');
							}}
							key={uniqid()}
						>
							<ListItemText primary={'innerText'} />
						</ListItem>
						<ListItem
							button
							onClick={() => {
								this.setState({open_attributes_dialog: false});
								this.props.add_attribute(this.props.config.selector_id, 'href');
							}}
							key={uniqid()}
						>
							<ListItemText primary={'href'} />
						</ListItem>
						<ListItem
							button
							onClick={() => {
								this.setState({open_attributes_dialog: false});
								this.props.add_attribute(this.props.config.selector_id, 'src');
							}}
							key={uniqid()}
						>
							<ListItemText primary={'src'} />
						</ListItem>
						<ListItem
							button
							onClick={() => {
								this.setState({open_attributes_dialog: false});
								this.props.add_attribute(this.props.config.selector_id, 'srcset');
							}}
							key={uniqid()}
						>
							<ListItemText primary={'srcset'} />
						</ListItem>
						<ListItem
							button
							onClick={() => {
								this.setState({open_attributes_dialog: false});
								this.props.add_attribute(this.props.config.selector_id, 'class');
							}}
							key={uniqid()}
						>
							<ListItemText primary={'class'} />
						</ListItem>
						<ListItem
							button
							onClick={() => {
								this.setState({open_attributes_dialog: false});
								this.props.add_attribute(this.props.config.selector_id, 'id');
							}}
							key={uniqid()}
						>
							<ListItemText primary={'id'} />
						</ListItem>
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
			urls: this.props.full_list_urls,
			snackbar_open: false,
			snackbar_message: '',
			redirect: false,
			new_selector_set_name: '',
			display_save_dialog: false,
			display_load_dialog: false,
			is_selector_set_loading: true,
			available_selector_sets: []
		}

		this.add_selector = this.add_selector.bind(this);
		this.remove_selector = this.remove_selector.bind(this);
		this.add_tag = this.add_tag.bind(this);
		this.add_attribute = this.add_attribute.bind(this);
		this.edit_selector = this.edit_selector.bind(this);
		this.next = this.next.bind(this);
		this.save = this.save.bind(this);
		this.delete = this.delete.bind(this);
		this.load = this.load.bind(this);
		this.load_selectors = this.load_selectors.bind(this);
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
			attr: 'innerText',
			urls: [],
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

	add_attribute(selector_id, attribute){
		let new_selectors = Object.assign({}, this.state.selectors);
		new_selectors[selector_id]['attr'] = attribute
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

	load_selectors(){
		this.setState({is_selector_set_loading: true});
		this.setState({display_load_dialog: true});
		$.ajax({
			context: this,
			url: constants.load_selector_sets,
			type: 'get',
			data: {},
			success: function(data) {
				console.log(data)
				this.setState({available_selector_sets: data.selector_sets});
				this.setState({is_selector_set_loading: false});
			},
			error: function(data) {},
			complete: function(XHR, status){},
			timeout: 120000
		});
	}

	load(selector_set){
		var selector_set_dict = JSON.parse(selector_set, json_parse_booleans);
		this.setState({ selectors: selector_set_dict });
		this.setState({display_load_dialog: false});
		console.log(selector_set_dict)
	}

	save(){	
		if (this.state.new_selector_set_name.length === 0) {
			this.setState({snackbar_message: 'Please give your selector set a proper name'})
			this.setState({snackbar_open: true})
			return 
		}

		this.setState({display_save_dialog: false})
		$.ajax({
			context: this,
			url: constants.save_selector_sets,
			type: 'get',
			data: {
				'selector_set': this.state.selectors,
				'set_name': this.state.new_selector_set_name
			},
			success: function(data) {
				if (data.status === 'success') {
					this.setState({snackbar_message: 'Saved!'})
					this.setState({snackbar_open: true})					
				}else{
					this.setState({snackbar_message: 'Sorry, I got an error...'})
					this.setState({snackbar_open: true})
				}
			},
			error: function(data) {
				this.setState({snackbar_message: 'Sorry, I got an error...'})
				this.setState({snackbar_open: true})
			},
			complete: function(XHR, status){},
			timeout: 120000
		});
	}

	delete(select_set_hash_id){
		this.setState({display_load_dialog: false})
		$.ajax({
			context: this,
			url: constants.delete_selector_set,
			type: 'get',
			data: {
				'hash_id': select_set_hash_id,
			},
			success: function(data) {},
			error: function(data) {},
			complete: function(XHR, status){},
			timeout: 120000
		});
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
							<Button className="home-run-button" variant="contained" color="secondary" onClick={this.load_selectors} style={{marginRight: 10}}>LOAD</Button>
							<Button className="home-run-button" variant="contained" color="secondary" onClick={() => this.setState({display_save_dialog: true})} style={{marginRight: 10}}>SAVE</Button>
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
										add_attribute={this.add_attribute}
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

				<Dialog
					open={this.state.display_save_dialog}
					onClose={() => this.setState({display_save_dialog: false})}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">Save Selector Set</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							Give your selector set a name. It should have a name that reminds you of the website and type of page you're parsing.
						</DialogContentText>
						<TextField
							style={{marginTop: 10, marginBottom: 10 }}
							fullWidth={true}
							id="outlined-basic"
							label="Selecto Set Name"
							variant="outlined"
							value={this.state.new_selector_set_name}
							onChange={(event) => this.setState({new_selector_set_name: event.target.value})}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => this.setState({display_save_dialog: false})} color="secondary" variant="contained">CANCEL</Button>
						<Button onClick={this.save} color="primary" variant="contained">SAVE</Button>
					</DialogActions>
				</Dialog>

				<Dialog onClose={() => this.setState({display_load_dialog: false})} aria-labelledby="simple-dialog-title" open={this.state.display_load_dialog}>
					<DialogTitle id="simple-dialog-title">Load Selector Set</DialogTitle>
					{this.state.is_selector_set_loading &&
						<div className="home-load-dialog-progress-container">
							<CircularProgress />
						</div>
					}
					{!this.state.is_selector_set_loading &&
						<List>
							{this.state.available_selector_sets.map((selector_set) => {
								return(
									<ListItem className="home-load-dialog-item">
										<ListItemText onClick={() => this.load(selector_set.selectors_json)} primary={selector_set.set_name} />
										<ListItemAvatar onClick={() => this.delete(selector_set.hash_id)} className="home-load-dialog-delete-button">
											<i className="material-icons">delete</i>
										</ListItemAvatar>
									</ListItem>
								)
							})}
						</List>
					}
				</Dialog>

				<Snackbar message={this.state.snackbar_message} open={this.state.snackbar_open} autoHideDuration={5000} onClose={() => this.setState({snackbar_open: false})} />
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









