const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const page = fs.readFileSync(path.join(__dirname, "@mydagon.html"));
const photo = fs.readFileSync(path.join(__dirname, "assets", "contact-photo.jpg"));
const port = Number(process.env.PORT) || 3000;

const server = http.createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end();
    return;
  }

  const pathname = new URL(request.url, "http://localhost").pathname;
  if (pathname === "/assets/contact-photo.jpg") {
    response.writeHead(200, {
      "Content-Type": "image/jpeg",
      "Content-Length": photo.length,
      "X-Content-Type-Options": "nosniff"
    });
    response.end(request.method === "HEAD" ? undefined : photo);
    return;
  }

  if (pathname !== "/" && pathname !== "/index.html") {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "X-Content-Type-Options": "nosniff"
  });
  response.end(request.method === "HEAD" ? undefined : page);
});

server.listen(port, () => {
  console.log(`portfolio server listening on http://localhost:${port}`);
});
