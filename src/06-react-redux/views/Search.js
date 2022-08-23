import { useEffect, useState, useMemo } from "react";
// import { store } from "../redux/store";
import { connect } from "react-redux";

import getCinemaAction from "../redux/actionCreator/getCinemaAction";

const useFilter = (cinemaList, mytext) => {
  const getCimemaList = useMemo(
    () =>
      cinemaList.filter(
        (ele) =>
          ele.name.toUpperCase().includes(mytext.toUpperCase()) ||
          ele.address.toUpperCase().includes(mytext.toUpperCase())
      ),
    [cinemaList, mytext]
  );
  return { getCimemaList };
};

function Search(props) {
  const { getCinemaAction, cinemaList } = props;
  const [info, setInfo] = useState("");
  const { getCimemaList } = useFilter(cinemaList, info);
  useEffect(() => {
    console.log("cinemaList", cinemaList);
    if (cinemaList.length === 0) {
      getCinemaAction();
    }
  }, [cinemaList, getCinemaAction]);
  return (
    <div>
      <input
        value={info}
        onChange={(event) => {
          setInfo(event.target.value);
        }}
      />
      {getCimemaList.map((c) => {
        return (
          <dl key={c.cinemaId}>
            <dt> {c.name}</dt>
            <dd> {c.address}</dd>
          </dl>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cinemaList: state.CinemaListReducer.list,
  };
};

export default connect(mapStateToProps, { getCinemaAction })(Search);
