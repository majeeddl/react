import React from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

const Basic = () => {
  return (
    <>
      <div>Basic</div>
      <div>
        <ButtonComponent isPrimary onClick={()=> alert('button clicked')}>Hello world button</ButtonComponent>
      </div>
    </>
  );
};

export default Basic;
