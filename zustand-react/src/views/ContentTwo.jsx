import React from "react";
import { useStore } from "../store/store";

const ContentTwo = () => {
  const visible = useStore((state) => state.data.visible);
  const setStyle = useStore((state) => state.setStyle);
  const setVisible = useStore((state) => state.setVisible);

  return (
    <div style={{ border: "1px solid blue", padding: 30, marginTop: 20 }}>
      <div>{Date.now()}</div>
      ContentTwo : {visible ? "visible" : "hide"}
      <div>
        <button onClick={setStyle}>toggleStyle</button>
        <button onClick={setVisible}>toggleVisible</button>
      </div>
    </div>
  );
};

export default ContentTwo;
