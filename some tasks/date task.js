/*Task: increase current time "7 days 01 hour 02 min 03 sec -> '7, 01:02:03'"
 */

//console.log
function c(x) {
  console.log(x);
}

function plusDate(str) {
  str = str.replace(/,\s/, ':'); //'7, 01:02:03' -> 7:01:02:03
  var arr = str.split(':');

  while (arr.length != 4) { //push null if one of elements not exist
    arr.unshift(0)
  }
  var msec;
  msec = (((+arr[0] * 24 + +arr[1]) * 60 + +arr[2]) * 60 + +arr[3]) * 1000; //count str -> miliseconds
  var d = new Date(Date.now() + msec);
  c(d)
}
//plusDate('7, 01:02:03');
//plusDate('1:02:03');
