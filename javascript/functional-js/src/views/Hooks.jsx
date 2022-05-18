import React, { createContext,useState } from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab } from "react-bootstrap"

import UseState from "./hooks/UseState"
import UseEffect from "./hooks/UseEffect"
import UseRef from "./hooks/UseRef"
import UseContext from './hooks/UseContext'
import UserReducer from './hooks/UserReducer'

export const UserContext = createContext()

const Hooks = (props) => {

    const [user, setUser] = useState("Majeed")

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
                <Tab eventKey="useContext" title="useContext">
                    <UserContext.Provider value={user}>
                        <UseContext></UseContext>
                    </UserContext.Provider>

                </Tab>
                <Tab eventKey="useReducer" title="useReducer">
                    <UserReducer></UserReducer>
                </Tab>
                <Tab eventKey="useMemo" title="useMemo">

                </Tab>
                <Tab eventKey="useCallback" title="useCallback">

                </Tab>
                <Tab eventKey="customHooks" title="customHooks">

                </Tab>
            </Tabs>

        </div>


    )
}

Hooks.propTypes = {}

export default Hooks
