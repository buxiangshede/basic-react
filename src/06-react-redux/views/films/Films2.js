import { useState, useEffect } from "react";
import axios from "axios";

export default function Films2() {
  const [list, setList] = useState([]);
  // useEffect(() => {
  //   axios({
  //     url: "/ajax/comingList?ci=10&limit=10&movieIds=&token=&optimus_uuid=3658BA2005D911ED861D91A1316D61D91D4C82FC23544F7F9D4EAC327E5BB50B&optimus_risk_level=71&optimus_code=10",
  //   }).then(({ data }) => {
  //     console.log("response", data);
  //     const results = data?.coming ?? [];
  //     if (Array.isArray(results)) {
  //       setList(results);
  //     }
  //   });
  // }, []);
  useEffect(() => {
    axios({
      url: "/api/comingList",
    }).then((response) => {
      setList(response.data.results);
    });
  }, []);

  return (
    <div>
      即将上映1233-------
      {list.length > 0 &&
        list.map((ele, index) => {
          return (
            <li key={ele.filmId}>
              {ele.name}
              <img src={ele.poster} alt="img" width={20} height={20} />
            </li>
          );
        })}
    </div>
  );
}
