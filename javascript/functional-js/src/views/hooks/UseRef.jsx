import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap"
import AceEditor from "react-ace";

function UseRef(props) {

    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });


    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus()
    }

    return (
        <>
            <div>
                The useRef Hook allows you to persist values between renders.

                <ol>
                    <li>It can be used to store a mutable value that does not cause a re-render when updated.</li>
                    <li>It can be used to access a DOM element directly.</li>
                </ol>


            </div>

            <div>
                <h2>Does Not Cause Re-renders</h2>
                If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
                To avoid this, we can use the useRef Hook.


                <div className="mt-2">
                    <AceEditor
                        mode="javascript"
                        theme="monokai"
                        name="UNIQUE_ID_OF_DIV"
                        height="320px"
                        value={`function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}`}
                        editorProps={{ $blockScrolling: true }}
                    />
                </div>
                <div className="mt-2">
                    input :
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <h5>Render Count: {count.current}</h5>
                </div>
            </div>

            <div className="mt-5">
                <h2>Accessing DOM Elements</h2>
                <div>
                    In general, we want to let React handle all DOM manipulation.

                    But there are some instances where <strong>useRef</strong> can be used without causing issues.

                    In React, we can add a ref attribute to an element to access it directly in the DOM.
                </div>
                <div className="mt-2">
                    <AceEditor
                        mode="javascript"
                        theme="monokai"
                        name="UNIQUE_ID_OF_DIV"
                        height="230px"
                        value={`function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}`}
                        editorProps={{ $blockScrolling: true }}
                    />
                </div>

                <div className="mt-2">
                    <input type="text" ref={inputElement} />
                    <Button onClick={focusInput}>Focus Input</Button>
                </div>
            </div>
        </>
    )
}

UseRef.propTypes = {}

export default UseRef
