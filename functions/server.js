const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const express = require("express");

// Wrapper to use with Netlify functions
const app = express();
app.use(middlewares);
app.use(router);

module.exports.handler = require("serverless-http")(app);
