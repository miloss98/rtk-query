import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  incrementByCustom,
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
      <section
        style={{
          width: "150px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button onClick={() => dispatch(decrement())}> - </button>
        <p> {countValue}</p>
        <button onClick={() => dispatch(increment())}> + </button>
      </section>
      <section>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          increment by 2
        </button>
        <button onClick={() => dispatch(decrementByAmount(4))}>
          decrement by 4
        </button>
      </section>
      <section>
        <input
          onChange={(e) => handleInput(e)}
          type="text"
          placeholder="enter value"
          value={customAmount}
        />
        <button
          onClick={() => dispatch(incrementByCustom(Number(customAmount)))}
        >
          add
        </button>
      </section>
      <button onClick={() => dispatch(reset())}> Reset </button>
    </div>
  );
};

export default Counter;
