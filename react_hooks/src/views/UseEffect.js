import React, { useEffect, useState } from "react";

/*


The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

*/

/*

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
}, [prop, state])
*/

UseEffect.propTypes = {};

function UseEffect(props) {
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
    return ()=> clearTimeout(timer);


  }, [count]);


  return (
    <div>
      <h1>I've rendered {count} times!</h1>
    </div>
  );
}

export default UseEffect;
