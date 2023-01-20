import React from "react";
import { useStore } from "../store/store";

const ContentOne = () => {
  const style = useStore((state) => state.data.style);

  return (
    <div style={{ border: "1px solid red", padding: 30 }}>
      <div>{Date.now()}</div>
      ContentOne : {style}
    </div>
  );
};

export default ContentOne;
