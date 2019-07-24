
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  'Do you like Node.js? ', 
  (answer) => {
     console.log(`Thanks for answering: ${answer}`);
     rl.close();
  }
);

