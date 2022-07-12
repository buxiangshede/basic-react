import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

const useCinemaList = () => {
  const [cinemaList, setCinemaList] = useState([]);
  useEffect(() => {
    axios.get("/api/cinemaList").then((response) => {
      setCinemaList(response.data.results);
    });
  }, []);
  return { cinemaList };
};

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

export default function CustomHooks() {
  const { cinemaList } = useCinemaList();
  const [info, setInfo] = useState("");
  const { getCimemaList } = useFilter(cinemaList, info);
  return (
    <>
      <input
        value={info}
        onChange={(event) => {
          setInfo(event.target.value);
        }}
      />
      <ul>
        {getCimemaList.map((ele) => {
          return (
            <li key={ele.id}>
              {ele.name}-{ele.time}
            </li>
          );
        })}
      </ul>
    </>
  );
}
