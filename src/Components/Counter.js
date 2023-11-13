import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {incrementCounter} from "../Services/actions/counterActions";
import {decrementCounter} from "../Services/actions/counterActions";
import {resetCounter} from "../Services/actions/counterActions";



export default function Counter() {

const count = useSelector((state) => state.count);

//console.log(count);

const dispatch = useDispatch();

 const handleIncrement = () =>{
      dispatch(incrementCounter());
 }

 const handleDecrement = () =>{
    dispatch(decrementCounter());
}

const handleReset = () =>{
    dispatch(resetCounter());
}


  return (
    <>
        <h2>Counter App</h2>
        <h3>Count:{count}</h3>
         <button onClick={handleIncrement}>Increment</button>
            <br/>
         <button onClick={handleDecrement}>Decrement</button>
            <br/>
         <button onClick={handleReset}>Reset</button>
    </>
  )
}
