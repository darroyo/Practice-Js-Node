
// Input characters interpreted in UTF-8
process.stdin.setEncoding('utf8');

 // Event listener for 'data'
 //  -> recieves input lines
process.stdin.on('data', function(line) {
  process.stdout.write(line);
});

