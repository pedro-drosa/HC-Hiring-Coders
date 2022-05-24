import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
// import cors from "cors";

const app = express();

async function startServer() {
  const server = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({
    app,
    cors: { origin: "http://localhost:3000" },
    bodyParserConfig: true,
  });
}

startServer(app);

// const enableCors = cors({
//   origin: "http://localhost:3000",
// });

// server.get("/status", (req, res) => {
//   res.send({ status: "Ok" });
// });

// server
//   .options("/authenticate", enableCors)
//   .post("/authenticate", enableCors, express.json(), (req, res) => {
//     console.log({
//       email: req.body.email,
//       password: req.body.password,
//     });
//     res.send({ status: true });
//   });

const APP_PORT = process.env.PORT | 5000;
const BASE_URL = "http://localhost";

app.listen(5000, () => {
  console.log(`server is running on ${BASE_URL}:${APP_PORT}`);
});
