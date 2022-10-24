import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@progress/kendo-react-layout";

import "./App.scss";
import Buttons from "./views/Buttons";
import DropdownBasic from "./views/dropdowns/DropdownBasic";

function App() {
  const navigate = useNavigate();

  const selectMenu = (event: any) => {
    navigate(event.item.data.route);
  };

  return (
    <div className="App">
      <Menu hoverOpenDelay={0} hoverCloseDelay={200} onSelect={selectMenu}>
        <MenuItem text="Basic">
          <MenuItem
            text="Buttons"
            data={{
              route: "/buttons",
            }}
          ></MenuItem>
          <MenuItem text="Dropdowns">
            <MenuItem
              text="basic"
              data={{
                route: "/dropdowns/basic",
              }}
            />
            <MenuItem text="Item1.2.2" />
          </MenuItem>
        </MenuItem>
        <MenuItem text="Item2">
          <MenuItem text="Item2.1" />
          <MenuItem text="Item2.2" />
        </MenuItem>
        <MenuItem text="Item3" />
      </Menu>

      <div className="p-9">
        <Routes>
          <Route path="/buttons" element={<Buttons></Buttons>}></Route>
          <Route
            path="/dropdowns/basic"
            element={<DropdownBasic></DropdownBasic>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
