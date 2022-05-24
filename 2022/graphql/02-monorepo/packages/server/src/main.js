import express from "express";
import cors from "cors";
const server = express();

const enableCors = cors({
  origin: "http://localhost:3000",
});

server.get("/status", (req, res) => {
  res.send({ status: "Ok" });
});

server
  .options("/authenticate", enableCors)
  .post("/authenticate", enableCors, express.json(), (req, res) => {
    console.log({
      email: req.body.email,
      password: req.body.password,
    });
    res.send({ status: true });
  });

const APP_PORT = process.env.PORT | 5000;
const BASE_URL = "http://localhost";

server.listen(5000, () => {
  console.log(`server is running on ${BASE_URL}:${APP_PORT}`);
});