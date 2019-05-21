'use strict';

import path from "path"

let routes = function( oApp ) {
	oApp.get( '/', function( req, res ) {
		res.sendFile( path.join( __dirname, '../../public/', 'index.html' ) );
	} );
}

export default routes

