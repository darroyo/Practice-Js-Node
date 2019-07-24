
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '\nType something: '
});

rl.prompt();

rl.on('line', (line) => {
  console.log(`Did you type '${line}'`);
  rl.prompt();
}).on('close', () => {
  console.log('\nHave a great day!');
  process.exit(0);
});

