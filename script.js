const data = require("./lists/series.json");
const fs = require("fs");

console.log("startou");
// console.log(data.users);

// let id = 20000;
// data.series.forEach((media) => {
// let length = media.name.length;
// media.id = id;
// media.type = "series";
// let index = length - 2;
// if (parseInt(media.name.substring(length - 2)) == NaN) {
//   index = length - 1;
// }
// media.episode = parseInt(media.name.substring(index));
// media.name = media.name.substring(0, index - 2);
//
// length = media.name.length;
// index = length - 2;
// if (parseInt(media.name.substring(length - 2)) == NaN) {
//   index = length - 1;
// }
// media.season = parseInt(media.name.substring(index));
// media.name = media.name.substring(0, index - 2);
// id++;
// });

// =========================================================================================== GROUP BY
// let groupByName = data.series.reduce((entryMap, e) => {
//   return entryMap.set(e.name, [...(entryMap.get(e.name) || []), e]);
// }, new Map());
//
// let groupByEpisodes = Array.from(groupByName).map((media) => {
//   return {
//     name: media[0],
//     episodes: media[1],
//   };
// });
//
// let groupBySeason = groupByEpisodes.map((media) => {
//   let seasonMap = Array.from(
//     media.episodes.reduce((entryMap, e) => {
//       return entryMap.set(e.season, [...(entryMap.get(e.season) || []), e]);
//     }, new Map())
//   );
//
//   let result = {
//     name: media.name,
//     seasons: seasonMap.map((season) => {
//       return {
//         season: season[0],
//         episodes: season[1],
//       };
//     }),
//   };
//
//   return result;
// });

// =========================================== map series
// let i = 20653;
data.series.forEach((media) => {
  media.type = "serie";
  // media.forEach((serie) => {
  // console.log(serie.name);
  // serie.id = i;
  // serie.seasons.map((season) => {
  //   season.episodes.map((episode) => {
  //     delete episode.name;
  //   });
  // });
  // });
  // i++;
});

// data.movies.forEach((media) => {
//   media.type = "movie";
// });

let newData = JSON.stringify(data);

fs.writeFile("./lists/series_.json", newData, "utf-8", () => {
  console.log("-------- fim");
});
