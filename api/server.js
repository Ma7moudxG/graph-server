const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Add a test route
server.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

server.use(router);

module.exports = server;
