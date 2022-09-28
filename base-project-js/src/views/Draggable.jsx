import React from 'react'
import { Tabs, Tab } from "react-bootstrap"
import Basic from './draggables/Basic'

const Draggable = () => {
    return (
        <div>

            <Tabs defaultActiveKey="basic" id="uncontrolled-tab-example" className="mb-3 mt-10">
                <Tab eventKey="basic" title="basic">
                    <Basic></Basic>
                </Tab>
                <Tab eventKey="two" title="two">
                </Tab>
            </Tabs>
        </div>
    )
}

export default Draggable