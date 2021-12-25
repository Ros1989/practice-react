import React from 'react';
import { useState } from 'react';

const Counter = function () {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    console.log(count);
  }

  function decrement() {
    setCount(count - 1);
    console.log(count);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
