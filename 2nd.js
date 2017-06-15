const ARR = Array.from(process.argv);
const NUM_ARR = ARR.splice(2, ARR.length - 1);
    
var num = 0;
    
for(var i = 0; i < NUM_ARR.length; i++) {
  var addNum = +NUM_ARR[i];
  num = num + addNum;
}

return console.log(num);