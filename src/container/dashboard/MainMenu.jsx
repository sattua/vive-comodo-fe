import React, { Component } from 'react';

class MainMenu extends Component {
    render() {
        return (
            <div className="App">
                {this.props.mainTitle}
            </div>
        );
    }
}

export default MainMenu;
