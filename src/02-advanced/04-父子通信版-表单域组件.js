import React, { Component } from "react";

class Filed extends Component {
  render() {
    return (
      <div>
        <label>{this.props.name} </label>:
        <input
          value={this.props.value}
          type={this.props.text}
          onChange={(e) => {
            this.props.onChangeEvent(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    value: "",
    password: "",
  };
  changeEvent = (value) => {
    console.log("value:", value);
    this.setState({ value: value });
  };
  changePassword = (value) => {
    this.setState({ password: value });
  };

  render() {
    return (
      <div>
        <Filed
          name="登陆"
          type="text"
          value={this.state.value}
          onChangeEvent={this.changeEvent}
        />
        <Filed
          name="密码"
          type="password"
          value={this.state.password}
          onChangeEvent={this.changePassword}
        />
        <button
          type="submit"
          onClick={() => {
            console.log("commit", this.state.value);
            console.log("commit", this.state.password);
          }}
        >
          提交
        </button>
        <button
          type="submit"
          onClick={() => {
            this.setState({
              value: "",
              password: "",
            });
          }}
        >
          重置
        </button>
      </div>
    );
  }
}
