class Counter {
    constructor (initial) {
        this.count = initial; 
        Counter.update();
    }

    counter () { return this.count};
    incr () { return ++this.count};

    static update () { ++Counter.number; };
}
Counter.number = 0;

var count_1 = new Counter(0);
var count_2 = new Counter(7);
console.log();
console.log("Number of counters = " + Counter.number);
console.log();
console.log("Counter 1 -> " + count_1.counter());
console.log("Counter 1 -> " + count_1.incr());
console.log();
console.log("Counter 2 -> " + count_2.counter());
console.log("Counter 2 -> " + count_2.incr());
console.log();
console.log("Counter.prototype.constructor -> " 
             + Counter.prototype.constructor);
