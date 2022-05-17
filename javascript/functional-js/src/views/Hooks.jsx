import React , {useState} from 'react'
import PropTypes from 'prop-types'
import { Tabs ,Tab } from "react-bootstrap"

import UseState from "./hooks/UseState"
import UseEffect from "./hooks/UseEffect"
import UseRef from "./hooks/UseRef"

const Hooks = (props) => {

    

    return (
        <div>
            <div className='mt-10 text-lg font-bold'> Hooks</div>
            <div>
                Hooks allow function components to have access to state and other React features
            </div>
            <Tabs defaultActiveKey="useState" id="uncontrolled-tab-example" className="mb-3 mt-10">
                <Tab eventKey="useState" title="useState">
                    <UseState></UseState>
                </Tab>
                <Tab eventKey="useEffect" title="useEffect">
                    <UseEffect></UseEffect>
                </Tab>
                <Tab eventKey="useRef" title="useRef">
                    <UseRef></UseRef>
                </Tab>
            </Tabs>

        </div>


    )
}

Hooks.propTypes = {}

export default Hooks
