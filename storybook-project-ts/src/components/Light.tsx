import React from "react";

type LightProps = {
  variant: "green" | "yellow" | "red";
};

const Light = ({ variant = "green" }: LightProps) => {
  return (
    <div
      style={{
        // green styles
        padding: 20,
        background: variant,
        borderRadius: "50%",
        width: 20,
        height: 20,
      }}
    ></div>
  );
};

export default Light;
