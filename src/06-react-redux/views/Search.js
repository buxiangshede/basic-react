import { useEffect, useState, useMemo } from "react";
import store from "../redux/store";

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

export default function Search() {
  const [info, setInfo] = useState("");
  const [cinemaList, setCinemaList] = useState(
    store.getState().CinemaListReducer.list
  );
  const { getCimemaList } = useFilter(cinemaList, info);
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
