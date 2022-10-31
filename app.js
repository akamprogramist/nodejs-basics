const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
  res.write("hello node");
  res.end();
});
console.log(`run in port http://localhost:${port}`);
server.listen(port);
