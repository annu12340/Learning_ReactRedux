import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducer from './reducer';
import { Provider } from 'react-redux';


const appStore = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store = {appStore}>
        <App />
    </Provider>, document.getElementById('root'));

// // Action

// const increment = () => {
//     return {
//         type:'INCREMENT'
//     };
// };

// const decrement = () => {
//     return {
//         type:'DECREMENT'
//     };
// };

// // Reducer

// const reducer = (state=0,action) => {
//  switch(action.type){
//      case 'INCREMENT':
//          return state + 1;
//      case 'DECREMENT':
//          return state - 1;
//      default:
//          return state;
//  }
// };

// // Store
// const store =  createStore(reducer);

// // display in console

// store.subscribe (()=>{console.log(store.getState())});

// // Dispatch
// store.dispatch(increment());



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
