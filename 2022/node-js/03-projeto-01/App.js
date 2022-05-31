import express from "express";
import routes from "./app/routes";
import bodyParser from "body-parser";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }

  middlewares() {
    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.set("view engine", "ejs");
  }
}

export default new App().server;
