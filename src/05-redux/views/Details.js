import { useEffect } from "react";
import { useParams } from "react-router-dom";
import store from "../redux/store";

export default function Details() {
  let params = useParams();

  useEffect(() => {
    store.dispatch({
      type: "HIDDEN",
    });
    return () => {
      store.dispatch({
        type: "SHOW",
      });
    };
  }, []);

  return <div>Details{params.id}</div>;
}
