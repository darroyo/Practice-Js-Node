
try {
  console.log("This msg WILL be shown");

  undefinedFunction(); // -> execution error
  
  console.log("This msg WON'T be shown");

} catch (err) {
  console.log('ERROR CAPTURED: \n  -> ' + err);
};

console.log("This msg WILL be shown");

