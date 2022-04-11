import React from "react";

const button = () => {
  const clickHandler = () => {
    alert("clicked me");
  };

  return (
    <div>
      button
      <div>
        <button onClick={clickHandler}>button</button>
      </div>
    </div>
  );
};

export default button;
