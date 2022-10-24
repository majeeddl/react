import { DropDownList } from "@progress/kendo-react-dropdowns";
import React from "react";

const sports = [
  "Baseball",
  "Basketball",
  "Cricket",
  "Field Hockey",
  "Football",
  "Table Tennis",
  "Tennis",
  "Volleyball",
];

const DropdownBasic = () => {
  return (
    <>
      <div>DropdownBasic</div>

      <DropDownList
        style={{
          width: "300px",
        }}
        data={sports}
        defaultValue="Basketball"
      />
    </>
  );
};

export default DropdownBasic;
