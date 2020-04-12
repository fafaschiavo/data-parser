export function set_full_list_urls(full_list_urls){
	var action_to_return = {
		type: 'SET_FULL_LIST_URLS',
		full_list_urls: full_list_urls
	};

	return action_to_return;
}

export function set_scraper_settings(scraper_settings){
	var action_to_return = {
		type: 'SET_SCRAPER_SETTINGS',
		scraper_settings: scraper_settings
	};

	return action_to_return;
}

export function set_crawl_urls(crawl_urls){
	var action_to_return = {
		type: 'SET_CRAWL_URLS',
		crawl_urls: crawl_urls
	};

	return action_to_return;
}

export function set_crawl_selectors(crawl_selectors){
	var action_to_return = {
		type: 'SET_CRAWL_SELECTORS',
		crawl_selectors: crawl_selectors
	};

	return action_to_return;
}


export function set_partial_results(partial_results){
	var action_to_return = {
		type: 'SET_PARTIAL_RESULTS',
		partial_results: partial_results
	};

	return action_to_return;
}

export function set_final_results(final_results){
	var action_to_return = {
		type: 'SET_FINAL_RESULTS',
		final_results: final_results
	};

	return action_to_return;
}