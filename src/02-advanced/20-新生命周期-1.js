import React, { Component } from "react";

export default class App extends Component {
  state = {
    myName: "echo",
  };
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps", nextState);
    return {
      myName: nextState.myName
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ myName: "Shasha" });
          }}
        >
          click
        </button>
        {this.state.myName}
      </div>
    );
  }
}
