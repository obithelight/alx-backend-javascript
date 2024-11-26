/**
 * create a mini http-server with nodejs
 */

const { createServer } = require('node:http');

const app = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type', 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log(`Server is listening at 1245`);
});

module.export = app;
