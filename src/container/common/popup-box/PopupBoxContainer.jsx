import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import './popupBox.css';

const mapStateToProps = state => ({
    title: state.popupBox.title,
    body: state.popupBox.body,
    footer: state.popupBox.footer,
});

const mapDispatchToProps = dispatch => ({

});

class PopupBoxContainer extends React.Component {

    render() {
        const { classes, body, title, footer } = this.props;
        return (
            <div className="popupbox-container">
                <div>{title}</div>
                <div>{body}</div>
                <div>{footer}</div>
            </div>
        );
    }
}

PopupBoxContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupBoxContainer);
