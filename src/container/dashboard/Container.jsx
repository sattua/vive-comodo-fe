import React, { Component } from 'react';

import SearchComponent from '../../component/search/SearchComponent';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboardContainer">
                <SearchComponent/>
            </div>
        );
    }
}

export default Dashboard;
