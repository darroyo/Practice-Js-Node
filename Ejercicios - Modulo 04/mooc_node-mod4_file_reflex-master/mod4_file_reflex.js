
    // Imports user module mod4-quote_of_the_day.js
let my_mod = require("./mod4_quote_of_the_day.js");

let fs = require("fs");   // Imports file system module

console.log();
console.log("quote_of_the_day:");
my_mod.quote_of_the_day();
console.log();

let delay = ((Math.ceil(Math.random()*5))*1000).toFixed(0);
setTimeout(reflexes, delay);


function reflexes() {

    console.log("Press return:");
	let before = new Date();
	// Input characters interpreted in UTF-8
	process.stdin.setEncoding('utf8');

	 // Event listener for 'data'
	 //  -> recieves input lines
	process.stdin.on('data', function(line) {
	  let after = new Date();
	  let diff = after-before;
	  console.log(diff);
	  process.exit();
	});
};

