let x = {a:7, b:4, c:1, d:23};
let add = 0;

Object.keys(x).forEach(p => add += x[p]);

console.log('add    // => ' + add);