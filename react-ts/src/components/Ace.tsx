import React, { Component } from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

type AceEditorProps = {
  value?: any;
  readonly?: false;
};

type AceEditorState = {
  value?: any;
};

export class Ace extends Component<AceEditorProps, AceEditorState> {
  constructor(props: any) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  render() {
    return (
      <div>
        <AceEditor
          mode="javascriopt"
          theme="github"
          name="firstEditor"
          readOnly
          height="100px"
          editorProps={{ $blockScrolling: true }}
          defaultValue={this.state.value}
        ></AceEditor>
      </div>
    );
  }
}
