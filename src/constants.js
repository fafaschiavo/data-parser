// Debug options ----------------------------------------------------------------------------------------------------------------
export const debug = process.env.NODE_ENV === 'development'
export const purge_store_persist_on_reload = process.env.NODE_ENV === 'development' ? false : false

// API endpoints ----------------------------------------------------------------------------------------------------------------
export const scraper_endpoint = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:5000/scrape/' : 'http://13.59.2.237:5000/scrape/'

// Default Tags
export const tag_options = [
	{
		title: 'auction_house_name',
		tag_id: 'eguarqp59r',
		color: '#167dd1'
	},
	{
		title: 'auction_house_description',
		tag_id: 'bddndnm4dx',
		color: '#162a8b'
	},
	{
		title: 'auction_house_website',
		tag_id: '7zhbbdymd7',
		color: '#5f1579'
	},
	{
		title: 'auction_house_phone',
		tag_id: 's9cfw7sjua',
		color: '#ca264f'
	},
	{
		title: 'auction_house_address',
		tag_id: 'hhcd2dadsp',
		color: '#819c50'
	},
	{
		title: 'auction_house_source_id',
		tag_id: 'wvpepsw2xc',
		color: '#92acb1'
	},
	{
		title: 'auction_house_source_url',
		tag_id: '47qbbkug2a',
		color: '#1dd128'
	},
	{
		title: 'auction_house_source_name',
		tag_id: 'bkl5qunxls',
		color: '#906ec5'
	},
	{
		title: 'auction_name',
		tag_id: 'ebsfukecgm',
		color: '#39b386'
	},
	{
		title: 'auction_start_at',
		tag_id: 'lsfhpccpb2',
		color: '#280439'
	},
	{
		title: 'auction_end_at',
		tag_id: 'fwyrbqpg5x',
		color: '#7bcfff'
	},
	{
		title: 'auction_image_url',
		tag_id: 'cjzjtwgg7e',
		color: '#52c40e'
	},
	{
		title: 'auction_source_id',
		tag_id: '9zfpse5tbd',
		color: '#e8f9e2'
	},
	{
		title: 'auction_source_url',
		tag_id: 'hx6y32mmt8',
		color: '#860073'
	},
	{
		title: 'auction_source_name',
		tag_id: 'fkjshhqhqb',
		color: '#478913'
	},
	{
		title: 'object_name',
		tag_id: 'qghneam4vw',
		color: '#8d0710'
	},
	{
		title: 'object_source_id',
		tag_id: 'e3ssleqyge',
		color: '#fef7aa'
	},
	{
		title: 'object_source_url',
		tag_id: 'jvvvwwqwkj',
		color: '#3138cd'
	},
	{
		title: 'object_source_name',
		tag_id: 'bezgjdwvmt',
		color: '#06d650'
	},
	{
		title: 'object_image_url',
		tag_id: '7sebgn9cdz',
		color: '#e17c2c'
	},
	{
		title: 'object_medium',
		tag_id: 'bllxpawhkq',
		color: '#8faf11'
	},
	{
		title: 'object_description',
		tag_id: 'wjapmaqcmz',
		color: '#741920'
	},
	{
		title: 'object_tags',
		tag_id: 'vcbvm5hdw7',
		color: '#ce6393'
	},
	{
		title: 'object_size',
		tag_id: 'byzsma4rd6',
		color: '#d7c248'
	},
	{
		title: 'object_category',
		tag_id: '9ahkujyhff',
		color: '#0760ad'
	},
	{
		title: 'object_top_estimation',
		tag_id: 'zw7vvtnzb8',
		color: '#acb59d'
	},
	{
		title: 'object_floor_estimation',
		tag_id: 'gup7bwnypd',
		color: '#b87f44'
	},
	{
		title: 'object_hammer_price',
		tag_id: 'xnjcrwndcu',
		color: '#c10081'
	},
	{
		title: 'object_not_sold',
		tag_id: 'yafpgxc4yv',
		color: '#1789ad'
	},
	{
		title: 'artist_name',
		tag_id: 'b4hkvqk7mc',
		color: '#4811e3'
	},
	{
		title: 'artist_source_id',
		tag_id: '5uxd2y4qad',
		color: '#1878df'
	},
	{
		title: 'artist_source_url',
		tag_id: 'frvy5zxjyk',
		color: '#8506c7'
	},
	{
		title: 'artist_century',
		tag_id: 'dxhp4dqaa4',
		color: '#95787d'
	},
	{
		title: 'artist_birth_year',
		tag_id: 'ukvfzw8rep',
		color: '#14a998'
	},
	{
		title: 'artist_death_year',
		tag_id: 'anptku77fe',
		color: '#cf04d9'
	},
	{
		title: 'artist_description',
		tag_id: 'hzwxtyjamc',
		color: '#442734'
	},
	{
		title: 'artist_birth_place',
		tag_id: 'rqvtase2mw',
		color: '#dc6843'
	},
	{
		title: 'artist_biography',
		tag_id: 'ppcza3wpmr',
		color: '#c700ab'
	},
]