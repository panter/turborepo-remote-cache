import Koa from "koa";
import serve from "koa-static";
import http2 from "node:http2";
import { createRequestHandler } from "remix-koa-adapter";
import * as build from "../build/index.js";
const app = new Koa();

app.use(serve("public"));

app.use(
  createRequestHandler({
    build,
  })
);

const server = http2.createServer(app.callback());

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`server listening on port ${port}`);
  // ... code to run after your server is running goes here ...
});
