import { CREATE_USER_FORM_UPDATES,
    CREATE_USER_FORM_ERROR,
    CREATE_USER_FORM_SUCCESS,
    CREATE_GUEST_USER,
    CREATE_USER_FORM_IS_LOADING,
    ERROR_CODES,
} from '../util/constants';

const inicialState = {
    signInForm: {
        firstName: '',
        lastName: '',
        email: '',
        errors: {},
        isLoading: false,
    },
};

const authStore = (state = inicialState, action) => {
    switch (action.type) {
        case CREATE_GUEST_USER:
            return {
                ...state,
                signInForm: {
                    ...state.signInForm,
                    ...action.payload,
                    isLoading: true,
                }
            };
        case CREATE_USER_FORM_UPDATES:
            return {
                ...state,
                signInForm: {
                    ...state.signInForm,
                    ...action.payload,
                }
            };
        case CREATE_USER_FORM_SUCCESS:
            return {
                ...state,
                signInForm: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    errors: [],
                }
            };
        case CREATE_USER_FORM_ERROR:
            const errorCode = (action.payload.request.status && action.payload.request) ? action.payload.request.status : 500;
            return {
                ...state,
                signInForm:{
                    errors: {
                        message : ERROR_CODES[errorCode],
                    }
                }
            };
        case CREATE_USER_FORM_IS_LOADING:
            return {
                ...state,
                signInForm:{
                    ...state.signInForm,
                    isLoading: true,
                }
            };

        default:
            return state;
    }
};

export default authStore;