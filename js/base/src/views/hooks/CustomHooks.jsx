

import React from 'react'
import PropTypes from 'prop-types'
import useFetch from './customHooks/useFetch';

function CustomHooks(props) {

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>

            <div>
                <h3>Hooks are reusable functions.</h3>
                <br />
                When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
                <br />
                Custom Hooks start with <strong>"use"</strong>. Example: useFetch.
            </div>


            <div className='mt-10' style={{ height: 200 ,overflow : 'scroll' }}>
                <ul>
                    {
                        data && data.map((item) => {
                            return <li key={item.id}>{item.title}</li>
                        })
                    }
                </ul>

            </div>
        </>
    )
}

CustomHooks.propTypes = {}

export default CustomHooks
