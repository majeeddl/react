import React from "react";
import { useReducer } from "react";

const Form = () => {
  /**
   * replace useState with useReducer
   */
  const [data, setData] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      title: "",
      description: "",
    }
  );

  return (
    <div>
      Form
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Form;
