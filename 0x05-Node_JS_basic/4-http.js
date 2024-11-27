/**
 * create a mini http-server with nodejs
 */

const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});

module.export = app;
