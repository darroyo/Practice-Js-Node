
var fs = require('fs');

fs.readFile('35-file.js', 
	        'ascii',
	        function(err, data){ console.log(data)}
);

