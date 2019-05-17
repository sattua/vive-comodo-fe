import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import SignInForm from './SignInForm';
import PopupBoxContainer from '../common/popup-box/PopupBoxContainer'
import Loader from '../common/loader/LoaderContainer';

import { updateCreateUserForm, createNewUser } from '../../actions/auth';

const mapStateToProps = state => ({
    formValues: state.authStore.signInForm,
    showPopupBox: state.popupBox.isDisplayed,
});

const mapDispatchToProps = dispatch => ({
    updateSignInForm: (fieldName, value) => dispatch(updateCreateUserForm(fieldName, value)),
    createGuestUser: (formValues) => dispatch(createNewUser(formValues, "guest")),
});

class AuthContainer extends React.Component {

    render() {
        const { classes, formValues, updateSignInForm, createGuestUser, showPopupBox } = this.props;
        return (
            <div className="auth-container">
                {formValues.isLoading && <Loader />}
                <SignInForm formValues={formValues} classes={classes} updateSignInForm={updateSignInForm}
                            createGuestUser={createGuestUser}/>
                { showPopupBox && <PopupBoxContainer /> }
            </div>
        );
    }
}

AuthContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    createGuestUser: PropTypes.func.isRequired,
    updateSignInForm: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
