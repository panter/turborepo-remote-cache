import http2 from "node:http2";
import remix from "@remix-run/express";
import express from "express";
import * as build from "../build/index.js";
import http2Express from "http2-express-bridge";

const app = http2Express(express);

// ... code setting up your express app goes here ...

const server = http2.createServer(app);

app.all(
  "*",
  remix.createRequestHandler({
    build,
  })
);

const port = process.env.PORT;
server.listen(port, () => {
  // ... code to run after your server is running goes here ...
});
