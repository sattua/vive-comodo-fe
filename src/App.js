import React, { Component } from 'react';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducer/index'

import logo from './logo.svg'; // TODO
import './App.css';

import MainMenu from './container/dashboard/MainMenu';
const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <MainMenu />
                </div>
            </Provider>
        );
    }
}

export default App;
