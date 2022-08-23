// import extends, { useEffect } from "react";

// function SSConnect(cb, obj) {
//   const value = cb();
//   return (MyComponent) => {
//     return (props) => {
//       return <MyComponent {...props} {...value} {...obj} />;
//     };
//   };
// }

// function NotFound(props) {
//   useEffect(() => {
//     console.log("props", props);
//   }, [props]);
//   return <div>NotFound</div>;
// }

// export default SSConnect(
//   () => {
//     return {
//       a: 1,
//     };
//   },
//   { aa() {} }
// )(NotFound);

import { Component } from "react";

export default class NotFound extends Component {
  state = {
    count: 1,
  };
  handleClick1 = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };
  handleClick2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log("handleClick2", this.state.count);
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
    }, 0);
  };
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick1}>add+</button>
        <button onClick={this.handleClick2}>add+</button>
      </div>
    );
  }
}

// export default NotFound;
