var fs = require('fs');

var FILE_PATH = process.argv[2];
var str = fs.readFileSync(FILE_PATH).toString();

var strArr = str.split("\n");
var num = +(strArr.length - 1);

console.log(num);