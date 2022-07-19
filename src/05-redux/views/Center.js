import { useNavigate } from "react-router-dom";
export default function Center() {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("/order")}> 电影订单</div>
      <div> 电影订单</div>
    </div>
  );
}
