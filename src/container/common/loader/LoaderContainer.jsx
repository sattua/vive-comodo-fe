import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import './loader.css';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

class LoaderContainer extends React.Component {

    render() {
        return (
            <div className="loader-container">
                <div>Loading...</div>
            </div>
        );
    }
}

LoaderContainer.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(LoaderContainer);
