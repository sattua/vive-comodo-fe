import { CREATE_USER_FORM_UPDATES } from '../util/constants';

export const updateCreateUserForm = formObj => ({
    type: CREATE_USER_FORM_UPDATES,
    form: formObj,
});
