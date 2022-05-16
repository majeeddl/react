import React, { Component } from "react";
import { Typography } from "antd";

const { Title } = Typography;
export default class Events extends Component {
  shoot(args: any) {
    if (typeof args == "string") {
      alert(args);
    } else {
      alert("shooot");
    }
  }

  shootTwo(a: any, b: any) {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }

  render() {
    return (
      <div>
        <Title level={2}>React Events</Title>

        <br />
        <div>Adding Events</div>
        <button onClick={this.shoot}>Take the Shot!</button>
        <br />
        <div>Passing Arguments</div>
        <button onClick={() => this.shoot("Goal!")}>
          Take the shot with args!
        </button>
        <br />
        <div>React Event Object</div>
        <button onClick={(event) => this.shootTwo("Goal!", event)}>
          Take the shot React Event Object!
        </button>
      </div>
    );
  }
}
