import { createStore } from 'redux'
import todoApp from './components/reducers'
let store = createStore(todoApp, {test: '123'});

//export default store;


//var Redux = require("redux"),
//    //heroReducer = require("./reducers/heroes"),
//    battlefieldReducer = require('./components/reducers'),
//    initialState = require("./initial-state"),
//    thunk = require('redux-thunk'); // allows us to use asynchronous actions
//
//var rootReducer = Redux.combineReducers({
//    //heroes: heroReducer,   // this means heroReducer will operate on appState.heroes
//    battlefield: battlefieldReducer // battlefieldReducer will operate on appState.battlefield,
//});
//
//module.exports = Redux.applyMiddleware(thunk)(Redux.createStore)(rootReducer,initialState());