import { DISPLAY_POPUP_BOX } from '../util/constants';

const inicialState = {
    isDisplayed: false,
    title: '',
    body: '',
    footer: '',
};

const popupBoxStore = (state = inicialState, action) => {
    switch (action.type) {
        case DISPLAY_POPUP_BOX:
            return {
                ...state,
                popupBox: {
                    ...action.payload,
                    isDisplayed: true,
                }
            };
        default:
            return state;
    }
};

export default popupBoxStore;