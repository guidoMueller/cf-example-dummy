"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cfenv = _interopRequireDefault(require("cfenv"));

var _mongoConnect = _interopRequireDefault(require("./server/db/mongo-connect.js"));

var _routes = _interopRequireDefault(require("./routes/routes.js"));

var _info = _interopRequireDefault(require("./server/api/info/info.js"));

var _users = _interopRequireDefault(require("./server/api/users/users.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

const oAppEnv = _cfenv.default.getAppEnv();

app.use(_express.default.static(__dirname + '/public')); // body parser middleware to handle URL parameter and JSON bodies

app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json()); // connect to mongodb

(0, _mongoConnect.default)(oAppEnv); // client express routes

(0, _routes.default)(app); // api

(0, _info.default)(app, oAppEnv);
(0, _users.default)(app);
app.listen(process.env.PORT || 4000);