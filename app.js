const http = require("http");
const fs = require("fs");
const port = 3000;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("page/home.html", "utf8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});
console.log(`run in port http://localhost:${port}`);
server.listen(port);
