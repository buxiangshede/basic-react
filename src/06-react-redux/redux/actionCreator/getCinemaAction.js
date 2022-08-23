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
// export default function getCinemaAction() {
//   return axios.get("/api/cinemaList").then((response) => {
//     return { type: "GET_CINEMA", payload: response.data.results };
//   });
// }
export default function getCinemaAction() {
  return axios({
    url: "/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=165130",
    headers: {
      "X-Client-Info":
        '{"a":"3000","ch":"1002","v":"5.2.0","e":"16580680421150565904023553","bc":"110100"}',
      "X-Host": "mall.film-ticket.cinema.list",
    },
  }).then((response) => {
    return { type: "GET_CINEMA", payload: response.data.data.cinemas };
  });
}
