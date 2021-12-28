import React, { Component } from "react";
// import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/theme-github";

import { Typography } from "antd";
import { Ace } from "../../components/Ace";
import { spawn } from "child_process";

const { Title } = Typography;

export default class Intro extends Component {
  render() {
    return (
      <div>
        <Title level={2}>React</Title>
        <ul>
          <li>React is a JavaScript library for building user interfaces.</li>
          <li>React is used to build single-page applications.</li>
          <li>React allows us to create reusable UI components.</li>
        </ul>

        <Title level={2}>What is JSX?</Title>
        <ul>
          <li>JSX stands for JavaScript XML.</li>
          <li>JSX allows us to write HTML in React.</li>
          <li>JSX makes it easier to write and add HTML in React.</li>
        </ul>
        <div>
          {/* <AceEditor
            mode="javascriopt"
            theme="github"
            name="firstEditor"
            readOnly
            height="200px"
            editorProps={{ $blockScrolling: true }}
          >
            test
          </AceEditor> */}
          Example One
          <Ace
            value={`${`const myelement = <h1>I Love JSX!</h1>\n\nReactDOM.render(myelement, document.getElementById('root'));`}`}
          ></Ace>
          Example Two
          <Ace
            value={`${`const myelement = React.createElement('h1', {}, 'I do not use JSX!');\n\nReactDOM.render(myelement, document.getElementById('root'));`}`}
          ></Ace>
        </div>
      </div>
    );
  }
}
