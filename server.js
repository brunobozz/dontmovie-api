const jsonServer = require("json-server");
const server = jsonServer.create();
const routerMovies = jsonServer.router("data/movies.json");
const routerUsers = jsonServer.router("data/users.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(routerUsers);
server.use(routerMovies);

server.listen(port);
