
const p = function (name) {
  return new Promise((resolve, reject) => { 
    let time = (Math.random() * 5000).toFixed(0);
    setTimeout(() => resolve(name), time)
  })
};  

Promise.race ([p("Peter"), p("Anne"), p("John")])
.then( (n) => {  console.log("\nQuickest: " + n) });

