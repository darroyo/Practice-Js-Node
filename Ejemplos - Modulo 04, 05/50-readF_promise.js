
const fs = require('fs');

new Promise((resolve, reject) =>
  fs.readFile(process.argv[2], 'utf8', 
       (err, data) => !err?resolve(data):reject(err))
)
.then(data => console.log("FILE:\n" + data),
      err  => console.log("ERROR:\n" + err))

