import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,reset,increaseByAmount } from './counterSlice';

export default function CounterView() {

 const count = useSelector((state) => state.counter.count);
console.log(count);


const dispatch = useDispatch();

const handleIncrement = () =>{
  dispatch(increment());
}

const handleDecrement = () =>{
  dispatch(decrement());
}

const handleReset = () =>{
  dispatch(reset());
}

const handleIncreaseByAmount = () =>{
  dispatch(increaseByAmount(5));
}

  return (
    <>
        <h2>CounterView</h2>
         <h2>Count: {count} </h2>
         {/* <button onClick={handleIncrement}>Increment</button> */}     
         <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <br/>
         <button onClick={handleDecrement}>Decrement</button>
            <br/>
         <button onClick={handleReset}>Reset</button>
         <br/>
         {/* <button onClick={()=>{dispatch(increaseByAmount(5))}}>Increase By 5</button> */}

         <button onClick={handleIncreaseByAmount}>Increase By 5</button>
    </>
  )
}
