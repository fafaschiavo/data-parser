const initial_state = {
	display_editor: false	
}

function GenericReducer(state = initial_state, action) {

	switch (action.type) {
		case 'ACTION_NAME':
			return { /* new state */ }
		default:
			return state
	}

}

export default GenericReducer