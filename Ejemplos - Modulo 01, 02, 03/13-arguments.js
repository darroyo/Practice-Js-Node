
function greet (greeting, person) {
       return  `${arguments[0]} ${arguments[1]}, how are you?`;   
};

console.log();
console.log( 'greet ("Good morning", "Peter") => '
            + greet ("Good morning", "Peter")); //   =>  "Good morning Peter, how are you?"
console.log();
console.log( 'greet ("Hi", "Peter")           => '
            + greet ("Hi", "Peter"));           //   =>  "Hi Peter, how are you?"
console.log();
console.log( 'greet ("Hi", "Peter", "Bill")   => '
            + greet ("Hi", "Peter", "Bill"));   //   =>  "Hi Peter, how are you?"
console.log( 'greet ("Hi")                    => '
            + greet ("Hi"));                    //   =>  "Hi undefined, how are you?"
console.log( 'greet ()                        => '
            + greet ());                        //   =>  "undefined undefined, how are you?"