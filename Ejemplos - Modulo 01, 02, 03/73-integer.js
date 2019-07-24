
if("integer" in Number.prototype){
  throw new Error("Number.prototype.integer alredy exists!");
}

// Añadimos método "integer()" a Number

Number.prototype.integer = function () {
  return Math[this > 0 ? "floor" : "ceil"](this);
}

console.log("' 7.3.integer()' se evalua a:  " + 7.3.integer());
console.log("'-7.3.integer()' se evalua a: " + -7.3.integer());
