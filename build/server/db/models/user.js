'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  id: Number,
  user_name: String,
  last_name: String,
  first_name: String
});
let User = mongoose.model('User', userSchema);
var _default = User;
exports.default = _default;