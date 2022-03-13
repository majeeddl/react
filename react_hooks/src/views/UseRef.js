import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
UseRef.propTypes = {};

/*
The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.


If we tried to count how many times our application renders using the useState Hook, 
we would be caught in an infinite loop since this Hook itself causes a re-render.
To avoid this, we can use the useRef Hook.
*/

/*

useRef() only returns one item. It returns an Object called current.
When we initialize useRef we set the initial value: useRef(0).
It's like doing this: const count = {current: 0}. We can access the count by using count.current.
*/
function UseRef(props) {
  const [inputValue, setInputValue] = useState("");

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  /* -------------------*/
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  /*
  Tracking State Changes
    The useRef Hook can also be used to keep track of previous state values.
    This is because we are able to persist useRef values between renders.
*/

  const previousInputValue = useRef("");
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>

      <div className="mt-10">
        <input type="text" ref={inputElement}></input>
        <Button onClick={focusInput}> Focus Input</Button>
      </div>

      <div className="mt-10">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </div>
    </div>
  );
}

export default UseRef;
