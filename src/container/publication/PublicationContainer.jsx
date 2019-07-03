import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Publication from '../../component/publication/Publication';
import PopupBoxContainer from '../common/popup-box/PopupBoxContainer'

import { getPublicationList, createPublication, getById } from '../../actions/publication';

const mapStateToProps = state =>({
    publications: state.publicationStore.publication.list,
    showPopupBox: state.popupBox.isDisplayed,
    currentCurrent: state.publicationStore.publication.currentCurrent,
});

const mapDispatchToProps = dispatch => ({
    create: (publication) => dispatch(createPublication(publication)),
    getPublicationById: (filters) => dispatch(getById(filters)),
});

const renderSizeTypes = { card: 'card', fullNew: 'full-new', fullEdit: 'full-edit', view: 'view' }; // TODO constant

class publicationContainer extends Component {

    state = {
        currentPublicationId: '', // It can be hexadecimal
        publicationViewType: renderSizeTypes['fullNew'],
    };

    checkForIdParam() {
        const currentUrl = window.location.pathname.split("publication/");

        if (currentUrl[1] && currentUrl[1] !== ''){
            if (currentUrl[1] !== this.state.currentPublicationId) {
                this.props.getPublicationById(currentUrl[1]);
                this.setState({
                    currentPublicationId: currentUrl[1],
                    publicationViewType: renderSizeTypes['view'], // TODO here how the detail view for Publication is controlled if owner: edit, if not owner: view
                });
            }
        } else if (currentUrl[1] !== this.state.currentPublicationId) {
            this.setState({
                currentPublicationId: '',
                publicationViewType: renderSizeTypes['fullNew'],
            });
        }

    }

    componentDidMount() {
        this.checkForIdParam();
    };

    componentDidUpdate() {
        this.checkForIdParam();
    }

    onEditPublication = (publication) => {
        // do edit it
    };

    onTakePublication = (publication) => {
        // do take it
    };

    getPositiveAction= (v) => {
        // TODO check if logged in
        if (v) {
            if (true) { // TODO Is the user the owner? check for edit rights
                return this.props.create; // TODO use the dispach directly
            } else {
                return this.onTakePublication;
            }
        }
        return this.props.create;
    }


    render() {
        const { showPopupBox } = this.props;
        const { publicationViewType, currentPublicationId } = this.state;
        const { currentCurrent } = this.props;
        const action = this.getPositiveAction(currentPublicationId);

        const selectedPubId = currentCurrent && currentCurrent.id ? currentCurrent.id : currentPublicationId;
        return (
            <div className="publicationContainer">
                <Publication
                    id={selectedPubId}
                    title={currentCurrent.title ? currentCurrent.title : ''}
                    description={currentPublicationId !== '' ? currentCurrent.description : ''}
                    images={[]}
                    renderSize={publicationViewType}
                    onPositiveAction={action}
                />
                { showPopupBox && <PopupBoxContainer /> }
            </div>
        );
    }
}

//TODO all this is duplicated
const publicationRenderSizes = [renderSizeTypes.card, renderSizeTypes.fullEdit, renderSizeTypes.fullNew, renderSizeTypes.view];

publicationContainer.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    description: PropTypes.string,
    renderSize: PropTypes.oneOf(publicationRenderSizes),
    onCreate: PropTypes.func.isRequired,
    onLearnMore: PropTypes.func,
    currentCurrent: PropTypes.object.isRequired,
};

publicationContainer.defaultProps = {
    description: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(publicationContainer);
