'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let routes = function (oApp) {
  oApp.get('/', function (req, res) {
    res.sendFile(_path.default.join(__dirname, '../../app/', 'index.html'));
  });
};

var _default = routes;
exports.default = _default;