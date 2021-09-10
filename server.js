const http = require("http");
const path = require("path");
const express = require("express");

let server;
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

server = new http.createServer(app);

server.listen(process.env.PORT);
