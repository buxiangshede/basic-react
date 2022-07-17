import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  let params = useParams();

  useEffect(() => {}, []);
  return <div>Details{params.id}</div>;
}
