import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../App";

function UseContext(props) {
  const user = useContext(UserContext);
  return (
    <div>
      <div>UseContext</div>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  );
}

UseContext.propTypes = {};

export default UseContext;
