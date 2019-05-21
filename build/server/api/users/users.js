'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("../../db/models/user.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let users = function (app) {
  app.get('/api/user', function (req, res) {
    _user.default.find(function (err, users) {
      if (err) {
        return res.status(500).send('Error occurred: database error');
      }

      res.json(users.map(function (user) {
        return {
          id: user.id,
          user_name: user.user_name,
          last_name: user.last_name,
          first_name: user.first_name
        };
      }));
    });
  });
  app.get('/api/user/:id', function (req, res) {
    _user.default.findOne({
      id: req.params.id
    }, function (err, user) {
      if (err || user === null) {
        return res.status(500).send('Error occurred: database error');
      }

      res.json({
        id: user.id,
        user_name: user.user_name,
        last_name: user.last_name,
        first_name: user.first_name
      });
    });
  });
  app.post('/api/user', function (req, res) {
    new _user.default({
      id: req.body.id,
      user_name: req.body.user_name,
      last_name: req.body.last_name,
      first_name: req.body.first_name
    }).save(function (err, user) {
      if (err) {
        return res.status(500).send('Error occurred: database error');
      }

      res.json({
        id: user.id
      });
    });
  });
  app.delete('/api/user/:id', function (req, res) {
    _user.default.remove({
      id: req.params.id
    }, function (err) {
      if (err) {
        return res.status(500).send('Error occurred: database error');
      }

      return res.send();
    });
  });
  app.put('/api/user/:id', function (req, res) {
    _user.default.update({
      id: req.params.id
    }, {
      user_name: req.body.user_name,
      last_name: req.body.last_name,
      first_name: req.body.first_name
    }, function (err) {
      if (err) {
        return res.status(500).send('Error occurred: database error');
      }

      res.send();
    });
  });
};

var _default = users;
exports.default = _default;