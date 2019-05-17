import { combineReducers } from 'redux';
import authStore from './authStore';
import popupBox from './popupBoxStore';

export default combineReducers({
    authStore,
    popupBox,
})