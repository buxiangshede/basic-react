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
      console.log("1111");
    }
    store.subscribe(() => {
      console.log("cinema", store.getState().CinemaListReducer.list);
      setCinemaList(store.getState().CinemaListReducer.list);
    });
  }, []);
  return (
    <div
      onClick={() => {
        navigate("/city");
      }}
    >
      {cityName}
      {cinemaList.map((c) => {
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
