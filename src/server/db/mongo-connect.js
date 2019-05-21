'use strict';

import mongoose from "mongoose"

mongoose.Promise = global.Promise;

let mongoConnect = function( oAppEnv ) {
	if ( oAppEnv.isLocal === true ) {
		mongoose.connect( 'mongodb://localhost:27017/test' );
	} else {
		mongoose.connect( oAppEnv.services.mongodb[0].credentials.uri );
	}
}

export default mongoConnect
