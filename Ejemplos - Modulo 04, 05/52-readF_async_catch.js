
const fs = require('fs');

async function catch_example(){

  let data = await new Promise((resolve, reject) =>
    fs.readFile(process.argv[2], 'utf8', 
      (err, data) => !err ? resolve(data) : reject(err) )
  );

  console.log("FILE:\n" + data);
};

catch_example().catch( (err) =>
                       console.log("ERROR:\n" + err));
                       