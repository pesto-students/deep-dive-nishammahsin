/*
 creating and routing the http server
*/

const http = require('http');
const {URL} = require('url');

class SimpleServer {
  constructor() {
    this.server = http.createServer(this.requestListener);
  }
  static Routes = [];

  requestListener = (req, res) => {
    const url = req.headers.host + req.url;

    const urlParts = new URL(url);
    const pathname = {urlParts};

    let pathIndex = -1;
    
    for(let index = 0; index < this.Routes.length; index++) {
      const splitPath = pathname.urlParts.pathname.split('/');
      if (splitPath.includes(this.Routes[index].path)) {
        pathIndex = index;
        break;
      }
    }

    if (pathname.urlParts.pathname.indexOf(':') > -1) {
      const pathParam = pathname.urlParts.pathname.split(':')[1];
      req['pathParam'] = pathParam;
    }

    req['searchParams'] = pathname.urlParts.searchParams;
    
    if (req.method === 'GET') {
      //res.end(this.Routes[pathIndex]._get(req));
      this.Routes[pathIndex]._get(req, res);

    } else if (req.method === 'DELETE') {

      this.Routes[pathIndex]._delete(req, res);

    } else if (req.method === 'POST') {

      req.on('data', (chunk) => {
        req.body = chunk.toString();
        this.Routes[pathIndex]._post(req, res);
      });

    } else if (req.method === 'PUT') {

      req.on('data', (chunk) => {
        req.body = chunk.toString();
        this.Routes[pathIndex]._put(req, res);
      });

    }
  };

  startServer = (port, callback) => {
    this.server.listen(port);
    callback();
  };
}

module.exports = SimpleServer;
