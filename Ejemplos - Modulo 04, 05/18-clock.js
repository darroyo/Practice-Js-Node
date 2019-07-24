
function time(){
  let t = new Date();
  return "Time: " + t.getHours() + "h " + t.getMinutes() + "m "
        + t.getSeconds() + "s "  + t.getMilliseconds();
}

setInterval(
  function(){
      process.stdout.write('\r' + time() + "   ");
  }, 
  90
); 

console.log("\n        MY CLOCK\n");

