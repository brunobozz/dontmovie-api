const data = require("../lists/2023list.json");
const lodash = require("lodash");
const fs = require("fs");
const uuid = require("uuid");
console.log("startou");

//===================================================================================== SERIES
let series = data.filter((x) => x.category.includes("S\u00c9RIES | "));
series.forEach((element) => {
  // ================================= remover e adicionar propriedades do objeto
  delete element.country;
  delete element.language;
  delete element.status;
  delete element.tvg;
  let cover = element.logo;
  element.cover = cover;
  delete element.logo;
  element.id = Math.floor(Math.random() * 999999999999999999);
  element.category = element.category.substring("SÉRIES | ".length);
  element.category = lodash
    .map(element.category.split(" "), lodash.capitalize)
    .join(" ");

  // ================================= remover season e episodeo do nome
  let length = element.name.length;
  let index = length - 2;
  if (parseInt(element.name.substring(length - 2)) == NaN) {
    index = length - 1;
  }
  element.episode = parseInt(element.name.substring(index));
  element.name = element.name.substring(0, index - 2);

  length = element.name.length;
  index = length - 2;
  if (parseInt(element.name.substring(length - 2)) == NaN) {
    index = length - 1;
  }
  element.season = parseInt(element.name.substring(index));
  element.name = element.name.substring(0, index - 2);
});

// ================================= agrupar elementos com mesmo nome
let groupByName = series.reduce((entryMap, e) => {
  return entryMap.set(e.name, [...(entryMap.get(e.name) || []), e]);
}, new Map());

// ================================= agrupar elementos da mesma season
let groupByEpisodes = Array.from(groupByName).map((element) => {
  return {
    name: element[0],
    episodes: element[1],
  };
});

// ================================= agrupar elementos da mesma season
let groupBySeason = groupByEpisodes.map((element) => {
  let seasonMap = Array.from(
    element.episodes.reduce((entryMap, e) => {
      return entryMap.set(e.season, [...(entryMap.get(e.season) || []), e]);
    }, new Map())
  );

  let result = {
    name: element.name,
    seasons: seasonMap.map((season) => {
      return {
        season: season[0],
        episodes: season[1],
      };
    }),
  };

  return result;
});

// =========================================== mapeia as series e remove propriedades do episódeo
groupBySeason.forEach((element) => {
  element.id = Math.floor(Math.random() * 999999999999999999);
  element.type = "serie";
  element.category = element.seasons[0].episodes[0].category;
  element.cover = element.seasons[0].episodes[0].cover;
  element.seasons.forEach((season) => {
    season.id = Math.floor(Math.random() * 999999999999999999);
    season.episodes.forEach((episode) => {
      delete episode.name;
      delete episode.season;
      delete episode.category;
    });
  });
});

// =========================================== salva o novo arquivo
series = JSON.stringify(groupBySeason);
fs.writeFile("./lists/2023series.json", series, "utf-8", () => {
  console.log("-------- fim Series");
});
