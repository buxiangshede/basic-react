import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getCinemaAction from "../redux/actionCreator/getCinemaAction";
import { connect } from "react-redux";

function Cinemas(props) {
  const navigate = useNavigate();
  const { list, getCinemaAction, cityName } = props;

  useEffect(() => {
    if (list.length === 0) {
      getCinemaAction();
    }
  }, [getCinemaAction, list]);
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <div
          style={{ float: "left" }}
          onClick={() => {
            navigate("/city");
          }}
        >
          {cityName}
        </div>
        <div
          style={{ float: "right" }}
          onClick={() => {
            navigate("/cinemas/search");
          }}
        >
          搜索
        </div>
      </div>

      {list.map((c) => {
        return (
          <dl key={c.cinemaId}>
            <dt> {c.name}</dt>
            <dd> {c.address}</dd>
          </dl>
        );
      })}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    list: state.CinemaListReducer.list,
    cityName: state.CityReducer.cityName,
  };
};
const mapDispatchToProps = {
  getCinemaAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas);
