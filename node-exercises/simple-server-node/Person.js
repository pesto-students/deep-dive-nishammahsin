class Person {
  constructor(path) {
    this.path = path;
  }
  getPath() {
    return this.path;
  }
  _get(req, res) {
    res.writeHead(500).end();
    //res.end(`bla bla person \n`);
  }
  _post(body, req) {
     return `this is post ${body}`
  }

  _put(body, req) {
   return `this is put ${body}`
  }

  _delete(req) {
    return `this is delete`
  }
}

module.exports = Person

