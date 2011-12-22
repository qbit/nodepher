var gopher = function() {};

gopher.prototype.parse = function( connection, data ) {
	console.log( data.toString() );
}

exports.gopher = gopher;
