import React, { Component } from 'react';
import MainMenu from './MainMenu';

class Dashboard extends Component {
    render() {
        return (
            <div className="App">
                <MainMenu mainTitle="Vive Comodo" />
            </div>
        );
    }
}

export default Dashboard;
