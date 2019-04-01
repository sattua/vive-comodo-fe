import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducer/appStore'

import logo from './logo.svg'; // TODO
import './App.css';

import MainMenu from './container/dashboard/MainMenu';

const store = createStore(rootReducer)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <MainMenu mainTitle={"Yess"} />
                </div>
            </Provider>
        );
    }
}

export default App;
