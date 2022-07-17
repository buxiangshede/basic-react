import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Films1() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios({
      url: "/api/cinemaList",
    }).then((response) => {
      setList(response.data.results);
    });
  }, []);
  const handleChangePage = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div>
      {list.map((ele, index) => {
        return (
          <li key={ele.id} onClick={() => handleChangePage(ele.id)}>
            {ele.name}
          </li>
        );
      })}
    </div>
  );
}
