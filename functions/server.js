const jsonServer = require("json-server");
const server = jsonServer.create();
const low = require("lowdb");
const Memory = require("lowdb/adapters/Memory");

// Use in-memory adapter
const adapter = new Memory();
const db = low(adapter);

// Initialize data
db.defaults({ posts: [], users: [] }).write();

const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports.handler = require("serverless-http")(server);
