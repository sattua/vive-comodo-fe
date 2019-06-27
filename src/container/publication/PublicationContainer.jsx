import React, { Component } from 'react';
import {connect} from "react-redux";

import Publication from '../../component/publication/Publication';
import PopupBoxContainer from '../common/popup-box/PopupBoxContainer'

import { getPublicationList, createPublication } from '../../actions/publication';

const mapStateToProps = state =>({
    publications: state.publicationStore.publication.list,
    showPopupBox: state.popupBox.isDisplayed,
});

const mapDispatchToProps = dispatch => ({
    create: (publication) => dispatch(createPublication(publication)),
});

class publicationContainer extends Component {

    onCreatePublication = (publication) => {
        this.props.create(publication);
    };

    render() {
        const { showPopupBox } = this.props;
        return (
            <div className="publicationContainer">
                <Publication id={0} title={'New Publication'} images={[]} renderSize={'full-new'} onCreate={this.onCreatePublication} />
                { showPopupBox && <PopupBoxContainer /> }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(publicationContainer);
