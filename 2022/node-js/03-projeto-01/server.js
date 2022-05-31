import App from "./App";

const port = 5000;
const url = "http://localhost";

App.listen(5000, () => {
  console.log(`server running on: ${url}:${port}`);
});
