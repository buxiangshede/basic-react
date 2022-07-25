import axios from "axios";

export default function getCinemaAction() {
  return (dispatch) => {
    axios.get("/api/cinemaList").then((response) => {
      console.log(response, "response");
      dispatch({ type: "GET_CINEMA", payload: response.data.results });
    });
  };
}
