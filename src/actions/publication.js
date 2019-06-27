import {
    GET_PUBLICATION_LIST_LOADING,
    GET_PUBLICATION_LIST_SUCCESS,
    GET_PUBLICATION_LIST_ERROR,
} from '../util/constants';

import { displayPopupBox } from './popupBox';

import { SERVER_URL } from "./global";
import { get, post } from '../request/index';

const GET_PUBLICATION_LIST_URL = SERVER_URL + '/publication/list';
const POST_PUBLICATION = SERVER_URL + '/publication/';

export const getPublicationSuccess = (data) => ({
    type: GET_PUBLICATION_LIST_SUCCESS,
    payload: data,
});

export const getPublicationError = (error) => ({
    type: GET_PUBLICATION_LIST_ERROR,
    payload: error,
});
export const getPublicationListLoading = () => ({
    type: GET_PUBLICATION_LIST_LOADING,
    payload: {},
});

export const getPublicationList = (filters) => async (dispatch) => {
    dispatch(getPublicationListLoading());
    const createPubPromise = get(GET_PUBLICATION_LIST_URL, filters);
    createPubPromise.then((response) => {
        if (response.status === 200) {
            dispatch(getPublicationSuccess(response.data));
            dispatch(displayPopupBox({title: 'Success', body: 'Done, search is finish!'}));
        } else {
            dispatch(getPublicationError({}));
        }
    }).catch((error) => {
        dispatch(getPublicationError(error));
    });
};

export const createPublication = (publication) => async (dispatch) => {
    dispatch(getPublicationListLoading());
    debugger;
    const createPubPromise = post(POST_PUBLICATION, publication, {}, { "Content-Type": "multipart/form-data"});
    createPubPromise.then((response) => {
        debugger;
        if (response.status === 200) {
            dispatch(getPublicationSuccess(response.data));
            dispatch(displayPopupBox({title: 'Success', body: 'Done, search is finish!'}));
        } else {
            dispatch(getPublicationError({}));
        }
    }).catch((error) => {
        debugger;
        dispatch(getPublicationError(error));
    });
};


