import store from "../redux/store";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getCinemaAction from "../redux/actionCreator/getCinemaAction";

export default function Cinemas() {
  const navigate = useNavigate();
  const [cityName] = useState(store.getState().CityReducer.cityName);
  const [cinemaList, setCinemaList] = useState(
    store.getState().CinemaListReducer.list
  );

  useEffect(() => {
    if (store.getState().CinemaListReducer.list.length === 0) {
      store.dispatch(getCinemaAction());
    }
    const unsubscribe = store.subscribe(() => {
      setCinemaList(store.getState().CinemaListReducer.list);
    });
    return () => {
      // 取消订阅
      unsubscribe();
    };
  }, []);
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

      {cinemaList.map((c) => {
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
