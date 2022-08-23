import React, { Component } from "react";

export default class App extends Component {
  state = {
    text: "111",
  };

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return 100;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState, value) {
    console.log("componentDidUpdate", value, prevState);
  }

  render() {
    console.log("render");
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ text: "222" });
          }}
        >
          click
        </button>
        {this.state.text}
      </div>
    );
  }
}
