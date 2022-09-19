import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  count,
} from "./counterSlice";

const Counter = () => {
  const countValue = useSelector(count);
  console.log(countValue);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}> - </button>
      <p> {countValue}</p>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(incrementByAmount(2))}> add 2</button>
      <button onClick={() => dispatch(reset())}> Reset </button>
    </div>
  );
};

export default Counter;
