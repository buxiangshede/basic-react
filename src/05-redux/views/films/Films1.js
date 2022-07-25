import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Films1() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios({
      url: "/api/playList",
    }).then((response) => {
      setList(response.data.results);
    });
  }, []);

  // useEffect(() => {
  //   axios({
  //     url: "/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=4805898",
  //     header:
  //       '{"X-Client-Info":{"a":"3000","ch":"1002","v":"5.2.0","e":"16580680421150565904023553","bc":"310100"},"X-Host":"mall.film-ticket.film.list"}',
  //   }).then((response) => {
  //     console.log(response, "});--111");
  //     setList(response.data.data);
  //   });
  // });
  const handleChangePage = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div>
      {list.map((ele, index) => {
        return (
          <li key={ele.filmId} onClick={() => handleChangePage(ele.filmId)}>
            {ele.name}
          </li>
        );
      })}
    </div>
  );
}
