const http = require('http');
const path = require('path');
const fs = require('fs');
const { URL } = require('url');

const publicDir = path.join(__dirname, 'public');
const port = Number(process.env.PORT) || 8080;

const contentTypes = new Map([
  ['.html', 'text/html; charset=UTF-8'],
  ['.js', 'application/javascript; charset=UTF-8'],
  ['.css', 'text/css; charset=UTF-8'],
  ['.json', 'application/json; charset=UTF-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.ico', 'image/x-icon'],
]);

const sendError = (res, statusCode, message) => {
  res.writeHead(statusCode, {
    'Content-Type': 'text/plain; charset=UTF-8',
    'Cache-Control': 'no-cache',
  });
  res.end(message);
};

const resolvePath = (requestUrl) => {
  const url = new URL(requestUrl, 'http://localhost');
  const pathname = url.pathname;
  const normalized = path.posix.normalize(pathname);

  if (normalized.includes('..')) {
    return null;
  }

  return normalized === '/' ? 'index.html' : normalized.slice(1);
};

function streamFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = contentTypes.get(ext) || 'application/octet-stream';

  res.writeHead(200, {
    'Content-Type': contentType,
    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=600',
  });

  const readStream = fs.createReadStream(filePath);

  readStream.on('error', () => {
    if (!res.headersSent) {
      sendError(res, 500, 'Internal server error');
    } else {
      res.destroy();
    }
  });

  readStream.pipe(res);
}

const server = http.createServer((req, res) => {
  const relativePath = resolvePath(req.url ?? '/');

  if (!relativePath) {
    return sendError(res, 400, 'Bad request');
  }

  const filePath = path.join(publicDir, relativePath);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return sendError(res, 404, 'Not found');
      }
      return sendError(res, 500, 'Internal server error');
    }

    if (stats.isDirectory()) {
      const indexPath = path.join(filePath, 'index.html');
      fs.stat(indexPath, (indexErr, indexStats) => {
        if (indexErr || !indexStats.isFile()) {
          return sendError(res, 404, 'Not found');
        }
        return streamFile(indexPath, res);
      });
      return;
    }

    if (!stats.isFile()) {
      return sendError(res, 404, 'Not found');
    }

    streamFile(filePath, res);
  });
});

server.listen(port, () => {
  console.log(`hyper-mart-shop listening on port ${port}`);
});
