// Debug options ----------------------------------------------------------------------------------------------------------------
export const debug = process.env.NODE_ENV === 'development'
export const purge_store_persist_on_reload = process.env.NODE_ENV === 'development' ? false : false

// API endpoints ----------------------------------------------------------------------------------------------------------------
export const scraper_base_url = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:5000' : 'http://13.59.2.237:5000';
export const scraper_endpoint = scraper_base_url + '/scrape/';
export const save_selector_sets = scraper_base_url + '/save-selector-set/';
export const load_selector_sets = scraper_base_url + '/selector-sets/';
export const delete_selector_set = scraper_base_url + '/delete-selector-set/';

// Default Regex
export const regex_options = [
	{
		title: 'Artist Name + Death Year + Birth Year',
		example: 'Andy Warhol (1928-1987)',
		regex: /^([a-zA-Z\s]*)\s\(([0-9]*)-([0-9]*)\)/g,
		tags: ['b4hkvqk7mc', 'ukvfzw8rep', 'anptku77fe'],
		regex_id: '6lZCSihs7w'
	},
	{
		title: 'Currency + Floor Est. + Top Est.',
		example: 'USD 400,000 - USD 600,000',
		// eslint-disable-next-line
		regex: /^([A-Z]{3})\s([0-9\,\.]*)[\s\-A-Z]*([0-9\,\.]*)/g,
		tags: ['tnjcrwnpwk', 'gup7bwnypd', 'zw7vvtnzb8'],
		regex_id: 'ReRbEVeknb'
	},
	{
		title: 'Hammer Price',
		example: 'USD 400,000',
		// eslint-disable-next-line
		regex: /^([A-Z]{3})\s([0-9\,\.]*)/g,
		tags: ['tnjcrwnpwk', 'gup7bwnypd'],
		regex_id: 'ReRbEVeknb'
	}
]


// Default Tags
export const tag_options = [
	// Artist Tags
	{
		title: 'Artist Name',
		type: 'artist',
		tag_id: 'b4hkvqk7mc',
		color: '#4811e3'
	},
	{
		title: 'Artist Birth Year',
		type: 'artist',
		tag_id: 'ukvfzw8rep',
		color: '#14a998'
	},
	{
		title: 'Artist Death Year',
		type: 'artist',
		tag_id: 'anptku77fe',
		color: '#cf04d9'
	},
	{
		title: 'Artist Century',
		type: 'artist',
		tag_id: 'dxhp4dqaa4',
		color: '#95787d'
	},
	{
		title: 'Artist Birth Place',
		type: 'artist',
		tag_id: 'rqvtase2mw',
		color: '#dc6843'
	},
	{
		title: 'Artist Description',
		type: 'artist',
		tag_id: 'hzwxtyjamc',
		color: '#442734'
	},
	{
		title: 'Artist Biography',
		type: 'artist',
		tag_id: 'ppcza3wpmr',
		color: '#c700ab'
	},
		{
		title: 'Artist Source ID',
		type: 'artist',
		tag_id: '5uxd2y4qad',
		color: '#1878df'
	},
	{
		title: 'Artist Source URL',
		type: 'artist',
		tag_id: 'frvy5zxjyk',
		color: '#8506c7'
	},

	// Object Tags
	{
		title: 'Object Name',
		type: 'object',
		tag_id: 'qghneam4vw',
		color: '#8d0710'
	},
	{
		title: 'Object Image URL',
		type: 'object',
		tag_id: '7sebgn9cdz',
		color: '#e17c2c'
	},
	{
		title: 'Object Floor Estimation',
		type: 'object',
		tag_id: 'gup7bwnypd',
		color: '#b87f44'
	},
	{
		title: 'Object Top Estimation',
		type: 'object',
		tag_id: 'zw7vvtnzb8',
		color: '#acb59d'
	},
	{
		title: 'Object Hammer Price',
		type: 'object',
		tag_id: 'xnjcrwndcu',
		color: '#c10081'
	},
	{
		title: 'Object Currency',
		type: 'object',
		tag_id: 'tnjcrwnpwk',
		color: '#d12031'
	},
	{
		title: 'Object Medium',
		type: 'object',
		tag_id: 'bllxpawhkq',
		color: '#8faf11'
	},
	{
		title: 'Object Size',
		type: 'object',
		tag_id: 'byzsma4rd6',
		color: '#d7c248'
	},
	{
		title: 'Object Category',
		type: 'object',
		tag_id: '9ahkujyhff',
		color: '#0760ad'
	},
	{
		title: 'Object Description',
		type: 'object',
		tag_id: 'wjapmaqcmz',
		color: '#6b72dd'
	},
	{
		title: 'Object Extra Info',
		type: 'object',
		tag_id: 'widhku9p2l',
		color: '#fe5012'
	},
	{
		title: 'Object Lot Number',
		type: 'object',
		tag_id: 'ltlxihttlf',
		color: '#013ab0'
	},
	{
		title: 'Object Year of Creation',
		type: 'object',
		tag_id: 'ghqcdd5hho',
		color: '#a871de'
	},
	{
		title: 'Object Signature',
		type: 'object',
		tag_id: 'zol6lprlzd',
		color: '#ba35fe'
	},
	{
		title: 'Object Provenance',
		type: 'object',
		tag_id: 'eseceqwdbt',
		color: '#328ea3'
	},
	{
		title: 'Object Not Sold',
		type: 'object',
		tag_id: 'yafpgxc4yv',
		color: '#1789ad'
	},
	{
		title: 'Object Source ID',
		type: 'object',
		tag_id: 'e3ssleqyge',
		color: '#fef7aa'
	},
	{
		title: 'Object Source URL',
		type: 'object',
		tag_id: 'jvvvwwqwkj',
		color: '#3138cd'
	},
	{
		title: 'Object Source Name',
		type: 'object',
		tag_id: 'bezgjdwvmt',
		color: '#06d650'
	},

	// Auction Tags
	{
		title: 'Auction Name',
		type: 'auction',
		tag_id: 'ebsfukecgm',
		color: '#39b386'
	},
	{
		title: 'Auction Start Date',
		type: 'auction',
		tag_id: 'lsfhpccpb2',
		color: '#280439'
	},
	{
		title: 'Auction End Date',
		type: 'auction',
		tag_id: 'fwyrbqpg5x',
		color: '#7bcfff'
	},
	{
		title: 'Auction Image URL',
		type: 'auction',
		tag_id: 'cjzjtwgg7e',
		color: '#52c40e'
	},
	{
		title: 'Auction City',
		type: 'auction',
		tag_id: 'fbqffkvcsm',
		color: '#33f346'
	},
	{
		title: 'Auction Source ID',
		type: 'auction',
		tag_id: '9zfpse5tbd',
		color: '#e8f9e2'
	},
	{
		title: 'Auction Source URL',
		type: 'auction',
		tag_id: 'hx6y32mmt8',
		color: '#860073'
	},
	{
		title: 'Auction Source Name',
		type: 'auction',
		tag_id: 'fkjshhqhqb',
		color: '#478913'
	},

	// Auction House Tags
	{
		title: 'Auction House Name',
		type: 'auction_house',
		tag_id: 'eguarqp59r',
		color: '#167dd1'
	},
	{
		title: 'Auction House Description',
		type: 'auction_house',
		tag_id: 'bddndnm4dx',
		color: '#162a8b'
	},
	{
		title: 'Auction House Website',
		type: 'auction_house',
		tag_id: '7zhbbdymd7',
		color: '#5f1579'
	},
	{
		title: 'Auction House Phone',
		type: 'auction_house',
		tag_id: 's9cfw7sjua',
		color: '#ca264f'
	},
	{
		title: 'Auction House Address',
		type: 'auction_house',
		tag_id: 'hhcd2dadsp',
		color: '#819c50'
	},
	{
		title: 'Auction House Source ID',
		type: 'auction_house',
		tag_id: 'wvpepsw2xc',
		color: '#92acb1'
	},
	{
		title: 'Auction House Source URL',
		type: 'auction_house',
		tag_id: '47qbbkug2a',
		color: '#1dd128'
	},
	{
		title: 'Auction House Source Name',
		type: 'auction_house',
		tag_id: 'bkl5qunxls',
		color: '#906ec5'
	},
]