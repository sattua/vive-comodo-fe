import { DISPLAY_POPUP_BOX } from '../util/constants';

export const displayPopupBox = options => ({
    type: DISPLAY_POPUP_BOX,
    payload: {
        title: options.title || '',
        body: options.body || '',
        footer: options.footer || '',
    }
});