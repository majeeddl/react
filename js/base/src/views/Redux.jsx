

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from "react-bootstrap"
import { decrement, increment } from '../redux/slices/counter.slice';

function Redux(props) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h2> counter redux test</h2>
      <div className="mt-2 pt-5">
        <Button aria-label='Increment value' onClick={() => dispatch(increment())}>Increment</Button>
        <div className='mt-2'>{count}</div>
        <Button aria-label='Decrement value' onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </>
  )
}

Redux.propTypes = {}

export default Redux
