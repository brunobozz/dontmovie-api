const data = require("./database.json");
const fs = require("fs");

console.log("startou");
console.log(data.users);

// ADD ID
// let id = 1;
// data.movies.forEach((movie) => {
//   movie.id = id;
//   id++;
// });

data.movies.forEach((movie) => {
  delete movie.tvg;
});

let newData = JSON.stringify(data);

fs.writeFile("database.json", newData, "utf-8", () => {
  console.log("-------- fim");
});
