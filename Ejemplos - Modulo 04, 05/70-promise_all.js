
const p = function (name) {
  return new Promise((resolve, reject) => { 
    let time = (Math.random() * 5000).toFixed(0);
    setTimeout(() => resolve([time + "msec", name]), time)
  })
};  

Promise.all([p("Peter"), p("Anne"), p("John")])
.then( (res) => {  console.log(res); });

