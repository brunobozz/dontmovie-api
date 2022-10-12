const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db2.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(router);

server.listen(port);