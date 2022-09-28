import React from 'react'
import Draggable from 'react-draggable';

import { Card } from "react-bootstrap"

const Basic = () => {
    const eventLogger = (e, data) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
    };

    return (
        <Draggable
            axis="x"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[25, 25]}
            scale={1}>


            <Card>
                <Card.Body>
                    <div className="handle">Drag from here</div>
                    <div>This readme is really dragging on...</div>
                </Card.Body>
            </Card>
        </Draggable>
    );
}

export default Basic