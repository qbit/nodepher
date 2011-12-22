var fs = require( 'fs' );
var net = require( 'net' );

var gopher = require( './gopher.js' ).gopher;
var nodepher = new gopher();

var server = net.createServer( function( c ) {
	console.log( 'connected' );
	c.on( 'end', function() {
		console.log( 'disconnected' );
	});

	c.on( 'data', function( d ) {
		nodepher.parse( c, d );
	});
});

server.listen( 7070, function() {
	console.log( 'listening on 7070' );
});
