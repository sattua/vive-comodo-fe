import { CREATE_USER_FORM_UPDATES } from '../util/constants';

const inicialState = {
    signInForm: {
      name: '',
      email: '',
    },
};

const appStore = (state = inicialState, action) => {
    switch (action.type) {
        case CREATE_USER_FORM_UPDATES:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
};

export default appStore;