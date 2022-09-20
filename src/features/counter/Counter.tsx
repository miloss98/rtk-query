import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  incrementByCustom,
  decrementByCustom,
  reset,
  count,
} from "./counterSlice";

const Counter = () => {
  const countValue = useSelector(count);
  const dispatch = useDispatch();

  const [customAmount, setCustomAmount] = useState<string | number>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCustomAmount(Number(e.currentTarget.value));
    console.log(e.currentTarget.value);
  };

  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p> {countValue}</p>
      <section
        style={{
          width: "150px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button onClick={() => dispatch(decrement())}> - </button>
        <button onClick={() => dispatch(increment())}> + </button>
      </section>
      <section>
        <button onClick={() => dispatch(incrementByAmount(2))}>+ 2</button>
        <button onClick={() => dispatch(decrementByAmount(4))}>- 4</button>
      </section>
      <section
        style={{
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <input
          onChange={(e) => handleInput(e)}
          type="text"
          placeholder="enter value"
          value={customAmount}
        />
        <button
          onClick={() => dispatch(incrementByCustom(Number(customAmount)))}
        >
          custom +
        </button>
        <button
          onClick={() => dispatch(decrementByCustom(Number(customAmount)))}
        >
          custom -
        </button>
      </section>
      <button onClick={() => dispatch(reset())}> Reset </button>
    </div>
  );
};

export default Counter;
