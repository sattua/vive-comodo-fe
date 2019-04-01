import { combineReducers } from 'redux'
import appStore from './appStore'
import aStore from './anotherReducer'

export default combineReducers({
    appStore,
    aStore
})