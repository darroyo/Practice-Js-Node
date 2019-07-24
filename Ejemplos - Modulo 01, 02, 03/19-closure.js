
function uniqueInteger () {
     var counter = 0;
     function count () { return counter++; };
     return count;
};
     // assigns return value:  function count
var unique_integer = uniqueInteger ();

console.log();
console.log("unique_integer() => " + unique_integer())
console.log("unique_integer() => " + unique_integer())
console.log("unique_integer() => " + unique_integer())
console.log("unique_integer() => " + unique_integer())


var unique_integer_2 = function () {
     var counter = 0;
     return function () { return counter ++; };
} ();

console.log();
console.log("unique_integer_2() => " + unique_integer_2())
console.log("unique_integer_2() => " + unique_integer_2())
console.log("unique_integer_2() => " + unique_integer_2())
console.log("unique_integer_2() => " + unique_integer_2())

