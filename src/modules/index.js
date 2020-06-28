import newsReducer from './news'
import authReducer from './auth'

import { combineReducers } from 'redux'
    
const rootReducer = combineReducers({
    newsState: newsReducer,
    authState: authReducer
});

export default rootReducer
