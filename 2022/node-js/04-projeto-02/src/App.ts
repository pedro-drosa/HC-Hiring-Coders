import express from 'express';

class App {
  public server;

  constructor() {
    this.server = express();
  }

  routes() {}

  middlewares() {}
}

export default new App().server;
