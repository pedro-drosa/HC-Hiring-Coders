import App from './App';

const url = 'http://localhost';
const port = 5000;

App.listen(port, () => {
  console.log(`server running on: ${url}:${port}`);
});
