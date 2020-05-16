const Router = require('./lib/Router');

class Person extends Router{
  _get(req, res) {
    res.end(`get person ${req}\n`);
  }
  _post(req, res) {
    res.end(`post person ${req}\n`);
  }

  _put(req, res) {
    res.end(`put person ${req}\n`);
  }

  _delete(req, res) {
    res.end(`delete person ${req}\n`);
  }
}

module.exports = Person

