/**
 * create a mini http-server with nodejs
 */

const { createServer } = require('http');

const port = 1245;

const app = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(`${port}`, () => {
  console.log(`Server is listening at port ${port}`);
});

module.export = app;
