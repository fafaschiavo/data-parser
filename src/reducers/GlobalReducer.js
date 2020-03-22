const initial_state = {
	full_list_urls: [],
	crawl_urls: false,
	crawl_selectors: false,
	partial_results: false,
	final_results: false
}

function GenericReducer(state = initial_state, action) {
	let new_state = Object.assign({}, state);

	switch (action.type) {
		case 'SET_FULL_LIST_URLS':
			new_state.full_list_urls = action.full_list_urls;
			return new_state

		case 'SET_CRAWL_URLS':
			new_state.crawl_urls = action.crawl_urls;
			return new_state

		case 'SET_CRAWL_SELECTORS':
			new_state.crawl_selectors = action.crawl_selectors;
			return new_state

		case 'SET_PARTIAL_RESULTS':
			new_state.partial_results = action.partial_results;
			return new_state

		case 'SET_FINAL_RESULTS':
			new_state.final_results = action.final_results;
			return new_state

		default:
			return state
	}

}

export default GenericReducer