import { useState } from "react";

const Counter = () => {
  const [count,setCount]=useState(0);
  return (
    <div class="counter">
      <h1 class="counter-title" >Counter</h1>
      <div class="counter-value">{count}</div>
      <div class="counter-controls">

        <button onClick={() => {
          if (count > 0) {
            setCount(count-1);
            console.log(count-1);
          }
        }} class="counter-decrement">-</button>

        <button onClick={() => {
          setCount(count+1)
          console.log(count+1);
        }} class="counter-increment">+</button>
      </div>
    </div>
  );
};

export default Counter;
