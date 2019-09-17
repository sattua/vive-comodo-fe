import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import PublicationAttributeContainer from '../publication/PublicationAttributeContainer';
import { createPublicationAttributes } from "../../actions/publication";

const mapStateToProps = state =>({
});

const mapDispatchToProps = dispatch => ({
    createAttribute: (attribute) => dispatch(createPublicationAttributes(attribute)),
});

const fieldNames = {};

class AdminContainer extends Component {

    state = {
        attributeNameField: '',
        attributeDescriptionField: '',
    };

    onCreateAttribute = (e) => {
        this.props.createAttribute({
            name: this.state.attributeNameField,
            description: this.state.attributeDescriptionField,
        });
        this.setState({ attributeNameField: '', attributeDescriptionField: '' });
    };

    onFieldKeyPress = (e) => {
        if (e.currentTarget.id === 'admin-attribut-name-field') {
            this.setState({attributeNameField: this.state.attributeNameField + e.key});
        }
        if (e.currentTarget.id === 'admin-attribute-description-field') {
            this.setState({attributeDescriptionField: this.state.attributeDescriptionField + e.key});
        }
    };


    render() {
        const { attributeNameField, attributeDescriptionField } = this.state;
        return (
            <div className="publicationContainer">

                <h2>Attributes for Publications:</h2>
                <input id="admin-attribut-name-field" type="text" value={attributeNameField} onKeyUp={this.onFieldKeyPress} />
                <textarea id="admin-attribute-description-field" onKeyUp={this.onFieldKeyPress}>
                    { attributeDescriptionField }
                </textarea>

                <button onClick={this.onCreateAttribute} >Create Attribute</button>
                <div>
                    <PublicationAttributeContainer />
                </div>

            </div>
        );
    }
};

AdminContainer.propTypes = {
};

AdminContainer.defaultProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
