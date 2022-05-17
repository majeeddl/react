import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap"

function UseState(props) {

    const [state, setState] = useState("basic state")

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const updateCar = ()=>{
        setCar( previousState => {
            return { ...previousState, color : "blue"}
        })
    }


    return (
        <div>

            <div>
                The React useState Hook allows us to track state in a function component.
                State generally refers to data or properties that need to be tracking in an application.
            </div>

            <div className="mt-2">
                This is initial state : {state}
            </div>
            <Button className='mt-2' onClick={() => setState("set state after click")}> Set State</Button>

            <div className="mt-10">
                The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
            </div>
            <div className="mt-2">
                <h5>My {car.brand}</h5>
                <p>
                    It is a {car.color} {car.model} from {car.year}.
                </p>
                <Button className='mt-2' onClick={updateCar}> Set Car Color to blue</Button>
            </div>
        </div>
    )
}

UseState.propTypes = {}

export default UseState
