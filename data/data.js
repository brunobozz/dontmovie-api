const users = require("./users.json");
const movies = require("./movies.json");

module.exports = () => ({
  users: users,
  movies: movies,
});
