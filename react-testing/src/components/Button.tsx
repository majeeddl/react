import React from "react";

const Button = () => {
  const handleClick = () => {
    console.log("Hello World!");
  };
  return (
    <>
      <button onClick={handleClick}>Hello World!</button>
    </>
  );
};

export default Button;
