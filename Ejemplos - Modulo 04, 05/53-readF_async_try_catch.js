
const fs = require('fs');

async function try_catch_example(){
  try {

  let data = await new Promise((resolve, reject) =>
      fs.readFile(process.argv[2], 'utf8', 
        (err, data) => !err ? resolve(data) : reject(err) )
    );

    console.log("FILE:\n" + data);
  } catch (err) {
    console.log("ERROR:\n" + err);
  }
}

try_catch_example()
