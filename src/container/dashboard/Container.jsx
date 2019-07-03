import React, { Component } from 'react';

import SearchContainer from '../../container/publication/SearchContainer';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboardContainer">
                <SearchContainer />
            </div>
        );
    }
}

export default Dashboard;
