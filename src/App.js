import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/index.js'

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedin = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Learn React, Counter - {counter} </h1>
       <button onClick={()=>dispatch(increment())}>+</button><span>  </span>
       <button onClick={()=>dispatch(decrement())}>-</button><span>  </span>

       <button onClick={()=>dispatch(increment(5))}>+ (Increment with param)</button>

      {isLoggedin?<p>Valuable Info i should not see</p>:''}
    </div>
  );
}

export default App;