
var fs = require('fs');
const orig = process.argv[2], dest = process.argv[2];

new Promise ( (resolve, reject) => (process.argv.length != 4) ? reject('   syntax: "node copy <orig> <dest>"') : resolve() )
.then( ()       => new Promise ( (resolve, reject) => fs.readFile( orig, 'utf8', (err, data) => err ? reject(err) : resolve(data) )))
.then( (data)   => new Promise ( (resolve, reject) => fs.writeFile( dest, data, (err) => err ? reject(err) : resolve('file copied') )))
.then( (result) => console.log("Result: " + result))
.catch( (err)   => console.log("Error: " + err))
