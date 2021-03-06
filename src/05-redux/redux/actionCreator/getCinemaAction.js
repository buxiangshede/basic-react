import axios from "axios";
// redux-thunk
// export default function getCinemaAction() {
//   return (dispatch) => {
//     axios.get("/api/cinemaList").then((response) => {
//       console.log(response, "response");
//       dispatch({ type: "GET_CINEMA", payload: response.data.results });
//     });
//   };
// }
// redux-thunk
export default function getCinemaAction() {
  return axios.get("/api/cinemaList").then((response) => {
    console.log(response, "response");
    return { type: "GET_CINEMA", payload: response.data.results };
  });
}
