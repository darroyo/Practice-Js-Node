
setTimeout(function() { console.log('Event A');}, 5);
setTimeout(function() { console.log('Event B');}, 0);

process.nextTick(function() { console.log('Tick D');});
process.nextTick(function() { console.log('Tick E');});
console.log('End of Main Program');

