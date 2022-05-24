import { createServer } from "http";
import { parse } from "querystring";

const server = createServer((req, res) => {
  switch (req.url) {
    case "/status": {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Hello World!",
        })
      );
      break;
    }
    case "/authenticate": {
      let data = "";
      req.on("data", (chunck) => {
        data += chunck;
      });

      req.on("end", () => {
        const params = parse(data); // dados recebidos no form
        res.end();
      });
      break;
    }

    default: {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          error: "Page not found!",
        })
      );
      break;
    }
  }
});
const APP_PORT = process.env.PORT | 5000;
const BASE_URL = "http://localhost";

server.listen(5000, () => {
  console.log(`server is running on ${BASE_URL}:${APP_PORT}`);
});
