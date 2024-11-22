const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");

// Use an absolute path to `db.json`
const router = jsonServer.router(path.join(__dirname, "../db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
