
const greet = (greeting, person) => {
       return `${greeting} ${person}, how are you?` ;   
};

console.log();
console.log( 'greet ("Hi", "Peter")           => '
            + greet ("Hi", "Peter"));           //   =>  "Hi Peter, how are you?"
console.log();

let square =   x => x*x;  

console.log( 'square (3)   => ' + square (3));
console.log();

const say_hi =   () => "Hi, how are you?";

console.log( 'say_hi ()    => ' + say_hi ());
