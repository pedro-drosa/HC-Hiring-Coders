import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send({ status: "Ok" });
});

server.post("/signin", express.json(), (req, res) => {
  console.log({
    email: req.body.email,
    password: req.body.password,
  });
  res.send();
});

const APP_PORT = process.env.PORT | 5000;
const BASE_URL = "http://localhost";

server.listen(5000, () => {
  console.log(`server is running on ${BASE_URL}:${APP_PORT}`);
});
