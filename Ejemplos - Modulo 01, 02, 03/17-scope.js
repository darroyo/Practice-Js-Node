let scope = "global";

function localScope () {
     let scope = "local";
     return scope;
};

// access global variable
scope;              // =>  "global"

console.log();
console.log( 'scope         => ' + scope); 

// access local variable
localScope();   // =>  "local"

console.log();
console.log( 'localScope()  => ' + localScope()); 
