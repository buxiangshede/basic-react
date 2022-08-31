import React, { Component } from "react";

export default class App extends Component {
  state = {
    type: 1,
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            <div onClick={() => this.setState({ type: 1 })}>正在热映</div>
          </li>
          <li>
            <div onClick={() => this.setState({ type: 2 })}>即将上映</div>
          </li>
        </ul>
        <Child type={this.state.type} />
      </div>
    );
  }
}

class Child extends Component {
  state = {
    list: [],
    type: 1,
  };
  static getDerivedStateFromProps(nextProps, nextState) {
    return {
      type: nextProps.type,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.type === prevState.type) return;
    if (this.state.type === 1) {
      this.setState({ list: [1, 2, 3] });
    } else {
      this.setState({ list: [11, 12, 13] });
    }
  }
  render() {
    return (
      <div>
        {this.state.type}
        {this.state.list.map((ele, index) => {
          return <li key={index}>{ele}</li>;
        })}
      </div>
    );
  }
}
