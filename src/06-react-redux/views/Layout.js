import { Outlet } from "react-router-dom";
import Tabbar from "../components/Tabbar";
import { connect } from "react-redux";

function Layout(props) {
  const { show } = props;
  return (
    <div>
      <Outlet></Outlet>
      {show ? <Tabbar></Tabbar> : null}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    show: state.TabbarReducer.show,
  };
};
export default connect(mapStateToProps)(Layout);
