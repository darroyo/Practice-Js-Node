
let x = 1;

console.log();
console.log("variable x = " + x);

{   x = 3; 

console.log();
console.log("variable x = " + x);

    let y = 2;
    const M = 4;

console.log();
console.log("variable x = " + x);
console.log("variable y = " + y);
console.log("constant M = " + M);
console.log();

    y = y + M + x;
    console.log(y);

}

x = 5;

console.log();
console.log("variable x = " + x);

x = y;   // y no existe: Error de ejecución

console.log();
console.log("variable x = " + x);
console.log("variable y = " + y);

