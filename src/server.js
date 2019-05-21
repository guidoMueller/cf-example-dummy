import express from "express"
import bodyParser from "body-parser"
import cfenv from "cfenv"
import mongoConnect from "./server/db/mongo-connect.js"
import routes from "./routes/routes.js"
import info from "./server/api/info/info.js"
import users from "./server/api/users/users.js"

const app = express();
const oAppEnv = cfenv.getAppEnv();

app.use( express.static( __dirname + '/../app' ) );

// body parser middleware to handle URL parameter and JSON bodies
app.use( bodyParser.urlencoded( {extended: false} ) );
app.use( bodyParser.json() );

// connect to mongodb
mongoConnect( oAppEnv );

// client express routes
routes( app );

// api
info( app, oAppEnv );
users( app );

app.listen( process.env.PORT || 4000 );
