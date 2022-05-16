import React, { Component } from "react";

import { Typography } from "antd";
import { Ace } from "../../components/Ace";

const { Title } = Typography;

export default class Components extends Component {
  render() {
    return (
      <div>
        <Title level={2}>React Class Components</Title>
        <div>
          When creating a React component, the component's name must start with
          an upper case letter. The component has to include the extends
          React.Component statement, this statement creates an inheritance to
          React.Component, and gives your component access to React.Component's
          functions. The component also requires a render() method, this method
          returns HTML.
        </div>
        <div>
          <Ace
            value={`${`class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}`}`}
          ></Ace>
        </div>
      </div>
    );
  }
}
