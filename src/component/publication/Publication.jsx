import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Publication extends Component {
    render() {
        return (
            <div className="publication">
                { this.props.title }
            </div>
        );
    }
}

Publication.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
};

export default Publication;
