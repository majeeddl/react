import React, { Component } from "react";

interface IProps {}

interface IState {
  username: string;
  age: number;
}

export default class Froms extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      age: 0,
    };
  }

  handleSubmit() {}
  render() {
    return (
      <div>
        <div>Form with multiple fields</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter your name:
            <input
              type="text"
              name="username"
              value={this.state.username || ""}
              onChange={() => this.setState({ username: this.state.username })}
            />
          </label>
          <label>
            Enter your age:
            <input
              type="number"
              name="age"
              value={this.state.age || ""}
              onChange={() => this.setState({ age: this.state.age })}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
