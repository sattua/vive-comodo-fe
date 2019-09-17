import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import { getPublicationAttributes } from '../../actions/publication';

const mapStateToProps = state =>({
    activeAttributes: state.publicationStore.publication.activeAttributes,
});

const mapDispatchToProps = dispatch => ({
    getAttributes: (publication) => dispatch(getPublicationAttributes(publication)),
});

// TODO move to contants
const renderSizeTypes = { card: 'card', fullNew: 'full-new', fullEdit: 'full-edit', view: 'view' };

class publicationAttributeContainer extends Component {

    componentDidMount() {
        this.props.getAttributes();
    };

    onAttributeCLick = (e) => {
        if (e.currentTarget.dataset.id) {
            this.props.onClick(this.props.activeAttributes, e.currentTarget.dataset.id);
        }
    };

    getRenderView = (a) => {
        switch (this.props.viewType) {
            case renderSizeTypes.fullNew:
                return <li id={`attributes-list-item-${a.id}`}>
                    <input id={`attributes-list-item-${a.id}-check`} data-id={a.id} type={"checkbox"} onClick={this.onAttributeCLick} /> { a.name }
                </li>;
            case renderSizeTypes.fullEdit:
                return <li id={`attributes-list-item-${a.id}`}>{ a.name }</li>;
            case renderSizeTypes.view:
                return <li id={`attributes-list-item-${a.id}`}>{ a.name }</li>;
            default :
                return <li id={`attributes-list-item-${a.id}`}>{ a.name }</li>;
        }
    };

    render() {
        const { activeAttributes } = this.props;

        const viewAttrs = activeAttributes.map((a)=> {
            return (this.getRenderView(a));
        });
        return (
            <div className="publicationContainer">
                <ul>
                    {viewAttrs}
                </ul>
            </div>
        );
    }
}

publicationAttributeContainer.propTypes = {
    viewType: PropTypes.string,
    onCLick: PropTypes.func,
};

publicationAttributeContainer.defaultProps = {
    viewType: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(publicationAttributeContainer);
