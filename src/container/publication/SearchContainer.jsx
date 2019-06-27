import React, { Component } from 'react';
import {connect} from "react-redux";

import SearchComponent from '../../component/publication/SearchComponent';
import PopupBoxContainer from '../common/popup-box/PopupBoxContainer'

import { getPublicationList } from '../../actions/publication';


const mapStateToProps = state =>({
    publications: state.publicationStore.publication.list,
    showPopupBox: state.popupBox.isDisplayed,
});

const mapDispatchToProps = dispatch => ({
    getPublicationResults: (filters) => dispatch(getPublicationList(filters)),
});

class SearchContainer extends Component {

    componentDidMount() {
        this.props.getPublicationResults();
    }

    render() {
        const { publications, showPopupBox } = this.props;
        return (
            <div className="searchContainer">
                <SearchComponent publications={publications} />
                { showPopupBox && <PopupBoxContainer /> }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
