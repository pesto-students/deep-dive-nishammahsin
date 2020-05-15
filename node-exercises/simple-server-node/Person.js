class Person {
  constructor(path) {
    this.path = path;
  }
  getPath() {
    return this.path;
  }
  _get(req) {
    return 'bla bla';
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

