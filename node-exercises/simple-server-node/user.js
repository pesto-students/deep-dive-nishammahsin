class User {
    constructor(path) {
      this.path = path;
    }
    getPath() {
      return this.path;
    }
    _get(req) {
      return 'bla bla user \n';
    }
    _post(body, req) {
       return `this is user post ${body}`
    }
  
    _put(body, req) {
     return `this is user put ${body}`
    }
  
    _delete(req) {
      return `this is user delete`
    }
  }
  
  module.exports = User
  
  