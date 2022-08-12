import React, { Component } from "react";

class Filed extends Component {
  state = {
    value: "",
  };
  clear = () => {
    this.setState({
      value: "",
    });
  };
  setValue = (value) => {
    this.setState({
      value,
    });
  };
  render() {
    return (
      <div>
        <label>{this.props.name} </label>:
        <input
          type={this.props.text}
          onChange={(event) => {
            this.setState({
              value: event.target.value,
            });
          }}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default class App extends Component {
  name = React.createRef();
  password = React.createRef();

  render() {
    return (
      <div>
        <Filed name="登陆" type="text" ref={this.name} />
        <Filed name="密码" type="password" ref={this.password} />
        <button
          type="submit"
          onClick={() => {
            console.log("name:", this.name.current.state.value);
            console.log("password:", this.password.current.state.value);
          }}
        >
          提交
        </button>
        <button
          type="submit"
          onClick={() => {
            console.log("name:", this.name.current);
            this.name.current.setValue("123");
            // this.name.current.clear();
            // this.password.current.clear();
          }}
        >
          重置
        </button>
      </div>
    );
  }
}
