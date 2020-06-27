const SAVE_NEWS = 'SAVE_NEWS'

export default (state, action) => {
	switch (action.type) {
		case SAVE_NEWS:
			if (action.news.id) {

			}
			return {
				...state,
				idCounter: ++state.idCounter,
				news: [...state.news, 
					{
						...action.news,
						lastEditTime: new Date().toLocaleString(),
						id: state.idCounter
					}
				]
			}
		default:
			return state
	}
}

export const saveNews = (news) => {
	return dispatch => {
		dispatch({
			type: SAVE_NEWS, 
			news
		})
	}
}
