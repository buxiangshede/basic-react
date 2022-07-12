const express = require("express");
const uuid = require("uuid");

const app = express();

function random(arr) {
  return arr[Math.round(Math.random() * (arr.length - 1))];
}

app.get("/api/cinemaList", (req, res) => {
  console.log("res", res);
  const data = new Array(10).fill(0).map((ele, index) => {
    return {
      id: `w${uuid.v4()}`,
      name: random(["Cinemal", "Cinemal2", "Cinemal3"]),
      time: new Date(),
      address: random(["上海", "北京"]),
    };
  });
  res.send({
    results: data,
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen("3006", () => {
  console.log("Server is running on port 3006");
});
