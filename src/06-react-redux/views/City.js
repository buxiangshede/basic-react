import { useState } from "react";
// import store from "../redux/store";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

function City(props) {
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
              props.changeCity(ele);
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
const mapDispatchToProps = {
  changeCity: (city) => {
    return {
      type: "change-city",
      payload: city,
    };
  },
};

export default connect(null, mapDispatchToProps)(City);
