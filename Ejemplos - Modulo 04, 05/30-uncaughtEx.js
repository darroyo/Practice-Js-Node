
// Event listener: will capture execution error
process.on('uncaughtException', function(err) {
  console.log('PROGRAM ABORTED: ERROR:\n  -> ' + err);
});

console.log('This msg will be shown in the console');

undefinedFunction(); // Generates execution error

console.log('This msg won´t be shown in the console');

