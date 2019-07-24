function Contador(inicial) {
  this.cont = inicial;
}

Contador.prototype = {
  contador: function(){ return this.cont;},
  incr:     function(){ return ++this.cont;}
}

var cont_1 = new Contador(0);
var cont_2 = new Contador(7);
console.log();
console.log("Contador 1 -> " + cont_1.contador());
console.log("Contador 1 -> " + cont_1.incr());
console.log();
console.log("Contador 2 -> " + cont_2.contador());
console.log("Contador 2 -> " + cont_2.incr());
console.log();
console.log("Contador.prototype.constructor -> " 
             + Contador.prototype.constructor);
