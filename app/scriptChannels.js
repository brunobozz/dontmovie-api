const data = require("../lists/2023list.json");
const lodash = require("lodash");
const fs = require("fs");

console.log("startou");
//===================================================================================== CHANNELS
let channels = data.filter((x) => x.category.includes("CANAIS | "));
channels.forEach((element) => {
  delete element.country;
  delete element.language;
  delete element.status;
  delete element.tvg;
  element.type = "channel";
  let cover = element.logo;
  element.cover = cover;
  delete element.logo;
  element.id = Math.floor(Math.random() * 999999999999999999);
  element.category = element.category.substring("CANAIS | ".length);
  element.category = lodash
    .map(element.category.split(" "), lodash.capitalize)
    .join(" ");
});
channels = JSON.stringify(channels);
fs.writeFile("../lists/2023channels.json", channels, "utf-8", () => {
  console.log("-------- fim Channels");
});
