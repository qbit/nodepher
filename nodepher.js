var fs = require( 'fs' );
var net = require( 'net' );

var gopher = require( './gopher.js' );

var server = net.createServer( function( c ) {
	console.log( 'connected' );
	c.on( 'end', function() {
		console.log( 'disconnected' );
	});

	c.on( 'data', function( d ) {
		gopher.parse( c, d );
	});
});

server.listen( 7070, function() {
	console.log( 'listening on 7070' );
});
