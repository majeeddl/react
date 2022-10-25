import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import IntegrationBootstrap from "./integration/IntegrationBootstrap";
import IntegrationMantine from "./integration/IntegrationMantine";
import IntegratoinAntd from "./integration/IntegrationAntd";

const Integration = () => {
  return (
    <>
      <Suspense fallback={<div> loading ...</div>}>
        <Routes>
          <Route
            path="bootstrap"
            element={<IntegrationBootstrap></IntegrationBootstrap>}
          ></Route>
          <Route path="antd" element={<IntegratoinAntd />}></Route>
          <Route path="mantine" element={<IntegrationMantine />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default Integration;
