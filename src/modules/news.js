const SAVE_NEWS = 'SAVE_NEWS'
const DELETE_NEWS = 'DELETE_NEWS'

export default (state = {}, action) => {
	switch (action.type) {
		case SAVE_NEWS:
			if (action.news.id !== null && action.news.id !== undefined) {
				return {
					...state,
					news: state.news.map(newsItem => newsItem.id === action.news.id ? 
					action.news : newsItem
					)
				}
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
		case DELETE_NEWS:
			const index = state.news.findIndex(news => news.id === action.id)
			return {
				...state,
				news: [ 
					...state.news.slice(0, index),
					...state.news.slice(index + 1)
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

export const deleteNews = (id) => {
	return dispatch => {
		dispatch({
			type: DELETE_NEWS, 
			id
		})
	}
}
