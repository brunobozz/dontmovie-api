const jsonServer = require("json-server");
const server = jsonServer.create();
const routerData = jsonServer.router("database.js");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(routerData);

server.listen(port);
