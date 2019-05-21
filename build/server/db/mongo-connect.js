'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.Promise = global.Promise;

let mongoConnect = function (oAppEnv) {
  if (oAppEnv.isLocal === true) {
    _mongoose.default.connect('mongodb://localhost:27017/test');
  } else {
    _mongoose.default.connect(oAppEnv.services.mongodb[0].credentials.uri);
  }
};

var _default = mongoConnect;
exports.default = _default;