// Debug options ----------------------------------------------------------------------------------------------------------------
export const debug = process.env.NODE_ENV === 'development'
export const purge_store_persist_on_reload = process.env.NODE_ENV === 'development' ? false : false

// API endpoints ----------------------------------------------------------------------------------------------------------------
export const scraper_endpoint = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:5000/scrape/' : 'http://127.0.0.1:5000/scrape/'

// Default Tags
export const tag_options = [
	{
		title: 'Title',
		tag_id: 'liirrcbf',
		color: '#ffd663'
	},
	{
		title: 'Artist Name',
		tag_id: 'oasfwmhe',
		color: '#58a8f7'
	},
	{
		title: 'Birth Year',
		tag_id: 'laqslbyn',
		color: '#848dea'
	},
	{
		title: 'Hammer Price',
		tag_id: 'avtlfvai',
		color: '#64fd9a'
	},
	{
		title: 'Top Estimation',
		tag_id: 'dnpbjoqh',
		color: '#f464fd'
	},
	{
		title: 'Floor Estimation',
		tag_id: 'tmpdyusc',
		color: '#0037d2'
	},
	{
		title: 'Currency',
		tag_id: 'nibmukqh',
		color: '#bbbbbb'
	},
	{
		title: 'Medium',
		tag_id: 'bfiamcvb',
		color: '#ff7c43'
	},
	{
		title: 'Size',
		tag_id: 'sxqovcja',
		color: '#76e27a'
	},
]

// tag_options.push({
// 	title: 'Composed Result',
// 	tag_id: '00000000',
// 	color: '#bebebe'
// })