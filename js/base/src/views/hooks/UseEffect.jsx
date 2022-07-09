import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import AceEditor from "react-ace";
import PropTypes from 'prop-types'

function UseEffect(props) {
    const text = `
1. No dependency passed:

useEffect(() => {
  Runs on every render
});

2. An empty array:

useEffect(() => {
   Runs only on the first render
}, []);

3. Props or state values:

useEffect(() => {
   Runs on the first render
   And any time any dependency value changes
}, [prop, state])`


    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);


        /*
        Some effects require cleanup to reduce memory leaks.
        Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
        We do this by including a return function at the end of the useEffect Hook.
        */
        return () => clearTimeout(timer);


    }, [count]);

    const [show, setShow] = useState(false);

    const popup = useRef();
    const button = useRef();


    useLayoutEffect(() => {
        if (popup.current == null || button.current == null) return
        const { bottom } = button.current.getBoundingClientRect();
        popup.current.style.top = `${bottom + 25}px`;
    }, [show])

    return (
        <>
            <div>
                The useEffect Hook allows you to perform side effects in your components.
                <br></br>
                Some examples of side effects are: fetching data, directly updating the DOM, and timers.
                <br></br>
                useEffect accepts two arguments. The second argument is optional.

                useEffect(function, dependency)
            </div>
            <div className="mt-2">
                <AceEditor
                    mode="javascript"
                    theme="monokai"
                    name="UNIQUE_ID_OF_DIV"
                    height="330px"
                    value={text}
                    editorProps={{ $blockScrolling: true }}
                />
            </div>

            <div className="mt-4">
                <h3>I've rendered {count} times!</h3>

                <div>
                    Some effects require cleanup to reduce memory leaks.
                    Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
                    We do this by including a return function at the end of the useEffect Hook.
                </div>
            </div>

            <h2 className='mt-5'>useLayoutEffect</h2>
            <div className='mt-2'>
                The useLayoutEffect is not asynchronous.
                <br />
                when we use 'uselayoutEffect', meanwhile react calculate our DOM and when ot actually paints
                it out to the screen, so react is going to calculate the positions of everything in the DOM
                it is going to pass that to the browser and then in between that and when the browser paints the information
                to the screen all of our useLayoutEffects are going to run.
                <br />
                Which means useLayoutEffects are perfect when you need to actually do something based on the layout of your
                your dom. That's where the name useLayoutEffect comes from.
                <br />
                UseLayoutEffect is not quit as performance since it happens synchronously instead of asynchronously
                which is why we should always try to use 'useEffect' first
            </div>
            <div className="mt-2">
                <button ref={button} onClick={() => setShow(prev => !prev)}>
                    Click Hear
                </button>
                {
                    show && (
                        <div style={{ position: "absolute" }} ref={popup}>
                            This is a popup
                        </div>
                    )
                }
            </div>
        </>
    )
}

UseEffect.propTypes = {}

export default UseEffect
