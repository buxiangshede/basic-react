import { useEffect } from "react";

function SSConnect(cb, obj) {
  const value = cb();
  return (MyComponent) => {
    return (props) => {
      return <MyComponent {...props} {...value} {...obj} />;
    };
  };
}

function NotFound(props) {
  useEffect(() => {
    console.log("props", props);
  }, [props]);
  return <div>NotFound</div>;
}

export default SSConnect(
  () => {
    return {
      a: 1,
    };
  },
  { aa() {} }
)(NotFound);
