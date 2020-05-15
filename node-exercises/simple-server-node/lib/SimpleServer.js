/*
 creating and roting the hhtp server
*/

const http = require('http');
class SimpleServer {
  constructor() {
    this.server = http.createServer(this.requestListener);
  }
  static Routes = [];
  requestListener = (req, res) => {
    console.log(req.url, '--url', req.method, '----routes: ', this.Routes);

    console.log(this.Routes[0].getPath());
    // TODO
    // get the request url
    // find the index in the routs

    if (req.method === 'GET') {
      res.writeHead(200);
      res.end(this.Routes[0]._get(req));
    } else if (req.method === 'DELETE') {
      res.end(this.Routes[0]._delete(req));
    } else if (req.method === 'POST') {
      req.on('data', (chunk) => {
        console.log(chunk.toString(), '---body');
        res.end(this.Routes[0]._post(chunk.toString(), req));
      });
    } else if (req.method === 'PUT') {
      req.on('data', (chunk) => {
        console.log(chunk.toString(), '---body');
        res.end(this.Routes[0]._put(chunk.toString(), req));
      });
    }
  };

  startServer = (port, callback) => {
    this.server.listen(port);
    callback();
  };
}

module.exports = SimpleServer;
