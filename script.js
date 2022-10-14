const data = require("./database.json");
const fs = require("fs");

console.log("startou");
console.log(data.users);

let id = 1;

data.movies.forEach((movie) => {
  movie.id = id;
  id++;
});

let newData = JSON.stringify(data);

fs.writeFile("database.json", newData, "utf-8", () => {
  console.log("-------- fim");
});
