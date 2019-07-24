
var fs = require('fs');     // Imports file system module

if (process.argv.length != 4){  // Wrong parameters?
  console.log('   syntax: "node copy <orig> <dest>"');
  process.exit()            // Finalizes node process
}

fs.readFile(
  process.argv[2],          // <orig> file
  function(err, data) {     // callback when read finishes
    if (err) throw err;  
    fs.writeFile(
      process.argv[3],      // <dest> file
      data,                 // <orig> data to be written  
      function (err) {      // callback when write finishes
        if (err) throw err;
        console.log('   file copied');
      }
    );
  }
);

