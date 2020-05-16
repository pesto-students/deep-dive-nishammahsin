const Router = require('./lib/Router');
class User extends Router{
    _get(req, res) {
      res.end(`get user ${req}\n`);
    }
    _post(req, res) {
      res.end(`post user ${req}\n`);
    }
  
    _put(req, res) {
      res.end(`put user ${req}\n`);
    }
  
    _delete(req, res) {
      res.end(`delete user ${req}\n`);
    }
  }
  
  module.exports = User
  
  