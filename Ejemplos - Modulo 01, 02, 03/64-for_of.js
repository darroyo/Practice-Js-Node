let x = {a:7, b:4, c:1, d:23};
let add = 0;

for (let p in x) {
	add += x[p];
}

console.log('add    // => ' + add);