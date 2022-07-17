import { useNavigate } from "react-router-dom";
export default function Center() {
  const navigate = useNavigate();
  return (
    <div>
      <div onclick={() => navigate("/roder")}> 电影订单</div>
      <div> 电影订单</div>
    </div>
  );
}
