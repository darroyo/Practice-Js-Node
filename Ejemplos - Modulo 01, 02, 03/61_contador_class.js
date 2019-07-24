function Counter(initial) {
  this.count = initial;
}

Counter.prototype.counter = function(){ return this.count};
Counter.prototype.incr    = function(){ return ++this.count};

var count_1 = new Counter(0);
var count_2 = new Counter(7);
console.log();
console.log("count_1 -> " + count_1.counter());
console.log("count_1 -> " + count_1.incr());
console.log();
console.log("count_2 -> " + count_2.counter());
console.log("count_2 -> " + count_2.incr());
console.log();
console.log("Counter.prototype.constructor -> " 
             + Counter.prototype.constructor);
console.log();
console.log("count_1.constructor.name -> " 
             + count_1.constructor.name);

