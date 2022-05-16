import { useState } from "react";

import { Button } from "react-bootstrap";
export default function Home() {
  /*

        useState accepts an initial state and returns two values:

        The current state.
        A function that updates the state.
    */
  //Lastly, we set the initial state to an empty string: useState("")
  const [text, setText] = useState("Hello World");
  const changeText = () => {
    setText("React hooks change state");
  };

  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateCarColor = () => {
    setCar((previousState) => {
      return {
        ...previousState,
        color: "blue",
      };
    });
  };

  return (
    <div>
      <h1>Home View</h1>

      <div className="mt-10">{text}</div>

      <Button onClick={changeText}>
        Change text with react's hooks setState
      </Button>

      <div className="mt-10">
        Car is :<span>Car color : {car.color}</span>
      </div>
      <Button onClick={updateCarColor}>Change car color</Button>
    </div>
  );
}







