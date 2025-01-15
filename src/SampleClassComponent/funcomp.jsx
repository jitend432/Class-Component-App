import React, { useState, useEffect } from 'react';

const Counter = () => {
  // Step 1: Initialize state using useState
  const [count, setCount] = useState(0);

  // Step 2: useEffect to mimic componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log('Component has mounted or updated');

    // This function will run when the component unmounts
    return () => {
      console.log('Component will unmount');
    };
  }, [count]); // Dependency array: runs effect when count changes

  // Step 3: Event handler to increment the count
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Step 4: Event handler to decrement the count
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Step 5: Render the component
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default Counter;