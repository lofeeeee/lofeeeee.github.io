const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 1234;
const ROOT = __dirname;

const MIME = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".ico": "image/x-icon",
    ".pdf": "application/pdf",
    ".json": "application/json",
    ".txt": "text/plain; charset=utf-8",
};

http.createServer((req, res) => {
    const urlPath = req.url.split("?")[0];
    const relPath = urlPath === "/" ? "/index.html" : urlPath;
    const filePath = path.normalize(path.join(ROOT, relPath));

    // guard against escaping the site root
    if (!filePath.startsWith(ROOT)) {
        res.writeHead(403, { "Content-Type": "text/plain" });
        return res.end("Forbidden");
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            return res.end("Not found: " + relPath);
        }

        const ext = path.extname(filePath);
        res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
        res.end(data);
    });
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});