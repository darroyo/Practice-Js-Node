
var fs = require('fs');
const orig = process.argv[2], dest = process.argv[2];

async function copy_with_await_example() {

    await new Promise( (resolve, reject) =>  
                             (process.argv.length != 4) ? reject('   syntax: "node copy <orig> <dest>"') : resolve() ); 

    let data = await new Promise( (resolve, reject) => fs.readFile( orig, 'utf8', (err, data) => err ? reject(err) : resolve(data) ));

    let res   = await new Promise( (resolve, reject) => fs.writeFile( dest, data, err => err  ? reject(err) : resolve('file copied') ));

    console.log("Result: " + res);
}

copy_with_await_example().catch ( err => console.log("Error: " + err));
