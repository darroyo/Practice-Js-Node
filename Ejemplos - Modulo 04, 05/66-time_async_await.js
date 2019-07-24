
async function f() {
  
  await new Promise((resolve, reject) => { 
    let time = (Math.random() * 5000).toFixed(0);
    setTimeout(() => resolve(), time)
  })  

  console.log("\nPress return:");
  let start = new Date().getTime();
  
  await new Promise((resolve, reject) => { 
    process.stdin.setEncoding('utf8');

    process.stdin.once('data', function(line) {
      let time = new Date().getTime() - start;
      console.log("Your time: " + time + "ms");
      resolve();
    })
  })

  process.exit();  
}

f()
