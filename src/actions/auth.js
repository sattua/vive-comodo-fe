import {
    CREATE_USER_FORM_UPDATES,
    CREATE_USER_FORM_SUCCESS,
    CREATE_USER_FORM_ERROR,
    CREATE_USER_FORM_IS_LOADING,
} from '../util/constants';

import { displayPopupBox } from './popupBox';

import { SERVER_URL } from "./global";
import { post } from '../request/index';

const CREATE_GUEST_USER_URL = SERVER_URL + '/user/signin';
const CREATE_OWNER_USER_URL = SERVER_URL + '/user/owner';
const CREATE_ADMIN_USER_URL = SERVER_URL + '/user/admin';

export const updateCreateUserForm = fieldObj => ({
    type: CREATE_USER_FORM_UPDATES,
    payload: fieldObj
});

export const successCreateUserForm = () => ({
    type: CREATE_USER_FORM_SUCCESS,
    payload: {},
});

export const errorCreateUserForm = (error) => ({
    type: CREATE_USER_FORM_ERROR,
    payload: error,
});
export const createUserFormIsLoading = () => ({
    type: CREATE_USER_FORM_IS_LOADING,
    payload: {},
});

export const createNewUser = (user, userType) => async (dispatch) => {
    dispatch(createUserFormIsLoading());
    const createUserPromise = post(getCreateUserByType(userType), user, {rol: 'guest'}, {});
    createUserPromise.then((response) => {
        if (response.status === 200) {
            dispatch(successCreateUserForm());
            dispatch(displayPopupBox({title: 'Success', body: 'User created successfully'}));
        } else {
            dispatch(errorCreateUserForm({}));
        }
    }).catch((error) => {
        dispatch(errorCreateUserForm(error));
    });
};

const getCreateUserByType = type => {
    switch (type) {
        case 'guest': {
            return CREATE_GUEST_USER_URL;
        }
        case 'admin': {
            return CREATE_ADMIN_USER_URL;
        }
        case 'owner': {
            return CREATE_OWNER_USER_URL;
        }
        default:
            return CREATE_GUEST_USER_URL;
    }
};
