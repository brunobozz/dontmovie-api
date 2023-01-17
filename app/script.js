const robots = {
  series: require("./scriptSeries.js"),
  movies: require("./scriptMovies.js"),
  channels: require("./scriptChannels.js"),
};

async function start() {
  await robots.series();
  await robots.movies();
  await robots.channels();
}

start();
