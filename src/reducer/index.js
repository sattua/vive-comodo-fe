import { combineReducers } from 'redux';
import authStore from './authStore';
import popupBox from './popupBoxStore';
import publicationStore from './publicationStore';

export default combineReducers({
    authStore,
    popupBox,
    publicationStore,
})