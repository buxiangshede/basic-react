import { useState } from "react";
import store from "../redux/store";
import { useNavigate } from "react-router-dom";

export default function City() {
  const navigate = useNavigate();
  const [cityList] = useState(["北京", "上海", "广州", "深圳"]);
  return (
    <div>
      city
      <ul>
        {cityList.map((ele) => (
          <li
            key={ele}
            onClick={() => {
              store.dispatch({
                type: "change-city",
                payload: ele,
              });
              navigate("/cinemas");
            }}
          >
            {ele}
          </li>
        ))}
      </ul>
    </div>
  );
}
