const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");

// Use static JSON file
const router = jsonServer.router(path.join(__dirname, "../db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports.handler = require("serverless-http")(server);
