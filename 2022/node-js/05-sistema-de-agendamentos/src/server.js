const App = require("./App");

const port = 3000;
const url = "http://localhost";

App.listen(port, () => {
  console.log(`server running on ${url}:${port}`);
});
