var fs = require('fs');

var FILE_PATH = process.argv[2];
fs.readFile(FILE_PATH, function callback(err, data) {
  if (err) return console.error(err);
  return console.log( data.toString().split("\n").length - 1 );
});