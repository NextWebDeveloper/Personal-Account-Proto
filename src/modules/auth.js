const SET_TOKEN = 'SET_TOKEN'
const CLEAR_TOKEN = 'CLEAR_TOKEN'

export default (state = {}, action) => {
	switch (action.type) {
		case SET_TOKEN:
			return {
                authToken: action.token
			}
		case CLEAR_TOKEN:
			return {
				authToken: null
			}
		default:
			return state
	}
}

export const setToken = (token) => {
	return dispatch => {
		dispatch({
			type: SET_TOKEN, 
			token
		})
	}
}

export const clearToken = () => {
	return dispatch => {
		dispatch({
			type: CLEAR_TOKEN
		})
	}
}

