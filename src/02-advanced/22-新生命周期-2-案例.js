import React, { Component } from "react";

export default class App extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };
  myref = React.createRef();

  getSnapshotBeforeUpdate() {
    console.log(
      "this.myref.current， getSnapshotBeforeUpdate",
      this.myref.current.scrollTop,
      this.myref.current.scrollHeight
    );

    return this.myref.current.scrollHeight - this.myref.current.scrollTop;
  }
  componentDidUpdate(prevProps, prevState, value) {
    this.myref.current.scrollTop = this.myref.current.scrollHeight - value;
  }
  render() {
    return (
      <div>
        <h1>邮箱应用</h1>
        <button
          onClick={() => {
            this.setState({
              list: [
                ...[10, 11, 12, 13, 14, 15, 16, 17, 18],
                ...this.state.list,
              ],
            });
          }}
        >
          新邮件
        </button>
        <div style={{ height: "200px", overflow: "auto" }} ref={this.myref}>
          <ul>
            {this.state.list.map((ele) => (
              <li
                key={ele}
                style={{ height: "100px", backgroundColor: "yellow" }}
              >
                {ele}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
