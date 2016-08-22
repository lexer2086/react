import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
//import store from './store';
import routes from './routes';
import todoApp from './components/reducers';

let store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes}/>
    </Provider>,
    document.getElementById("root")
);