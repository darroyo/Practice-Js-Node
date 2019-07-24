
var fs = require('fs');

if (process.argv.length != 4){  // Wrong parameters?
  console.log('   syntax: "node copy <orig> <dest>"');
  process.exit()            // Finalizes node process
}

var readStream = fs.createReadStream(process.argv[2]);   // Open read stream
var writeStream = fs.createWriteStream(process.argv[3]); // Open write stream

// Connects input & output with pipe, finishes when input stream finishes
readStream.pipe(writeStream);

console.log('   file copied');

