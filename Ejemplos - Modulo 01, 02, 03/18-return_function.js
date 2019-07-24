
let s1 = "How ";

function external () {
     let s2  = "are ";

     function inner () { 
         let s3 = "you";
         return s1 + s2 + s3;
     }

     return inner;
};


external();         // => function inner(){..}

console.log();
console.log( 'external()     => ' + external()); 


external()();   // =>  "local"

console.log();
console.log( 'external()()   => ' + external()()); 
