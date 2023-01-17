const data = require("../lists/2023list.json");
const lodash = require("lodash");
const fs = require("fs");

console.log("startou");
//===================================================================================== MOVIES
let movies = data.filter((x) => x.category.includes("FILMES | "));
movies.forEach((element) => {
  delete element.country;
  delete element.language;
  delete element.status;
  delete element.tvg;
  element.type = "movie";
  let cover = element.logo;
  element.cover = cover;
  delete element.logo;
  element.id = Math.floor(Math.random() * 999999999999999999);
  let nameEnd = element.name.substring(
    element.name.length - 7,
    element.name.length
  );
  if (nameEnd.startsWith(" (")) {
    element.name = element.name.substring(0, element.name.length - 7);
    element.ano = parseInt(nameEnd.substring(2, 6));
  } else {
    element.ano = null;
  }
  element.category = element.category.substring("FILMES | ".length);
  element.category = lodash
    .map(element.category.split(" "), lodash.capitalize)
    .join(" ");
});
let moviesStringify = JSON.stringify(movies);
fs.writeFile("./lists/2023movies.json", moviesStringify, "utf-8", () => {
  console.log("-------- fim Movies");
});
