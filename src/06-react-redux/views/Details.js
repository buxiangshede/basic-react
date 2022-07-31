import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { hide, show } from "../redux/actionCreator/TabbarAction";

function Details(props) {
  let params = useParams();
  const { hide, show } = props;

  useEffect(() => {
    hide();
    return () => {
      show();
    };
  }, [show, hide]);

  return <div>Details{params.id}</div>;
}

const mapDispatchToProps = {
  hide,
  show,
};
// connect(给孩子传的属性，给孩子传的回调函数)
export default connect(null, mapDispatchToProps)(Details);
