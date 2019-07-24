
console.log(`
let n = [7, 4, 1, 23];
let add = 0;

for (element of n){
	add += element;
}
`)

let n = [7, 4, 1, 23];
let add = 0;

for (element of n){
	add += element;
}

console.log('add    // => ' + add);


console.log(`
let n = [7, 4, 1, 23];
let add = 0;

for (var i in n){
	add += n[i];
}
`)

add = 0;

for (var i in n){
	add += n[i];
}

console.log('add    // => ' + add);

