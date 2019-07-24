function Contador(inicial) {
  this.cont = inicial;
}

Contador.prototype = {
  contador: function(){ return this.cont;},
  incr:     function(){ return ++this.cont;}
}

var cont_1 = new Contador(0);
var cont_2 = new Contador(7);

cont_1.contador()   //    => 0
cont_1.incr()       //    => 1

cont_2.contador()   //    => 7
cont_2.incr()       //    => 8
