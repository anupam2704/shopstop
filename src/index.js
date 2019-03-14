import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk'; //middleware
import reducers from './reducers';

const store= createStore(
    reducers,
    {},
    compose(
            applyMiddleware(reduxThunk)            
    )
);


ReactDOM.render(
    <Provider store = {store}><App/></Provider>, document.querySelector('#root'));
