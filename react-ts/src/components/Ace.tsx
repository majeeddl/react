import React, { Component } from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

type AceEditorProps = {
  value?: string;
  readonly?: false;
};

export class Ace extends Component<AceEditorProps> {
  render() {
    return (
      <div>
        <AceEditor
          mode="javascriopt"
          theme="github"
          name="firstEditor"
          readOnly
          height="200px"
          editorProps={{ $blockScrolling: true }}
          defaultValue={this.props.value}
        >
         
        </AceEditor>
      </div>
    );
  }
}
