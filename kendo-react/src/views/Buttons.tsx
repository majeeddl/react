import { Button } from "@progress/kendo-react-buttons";
import React from "react";

const Buttons = () => {
  return (
    <>
      <div>Buttons</div>
      <div className="space-x-4">
        <Button>Browse</Button>
        <Button icon="folder" themeColor={"primary"} className="ml-2">
          Browse
        </Button>
        <Button icon="folder" />
      </div>
    </>
  );
};

export default Buttons;
