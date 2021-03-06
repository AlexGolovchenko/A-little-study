/* task: handmade method filter()
 */

//short console.log
const c = function(x) {
  console.log(x)
};

function myFilter(arr, cb) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

//c(myFilter([1,2,,3,undefined],function (elem) {return elem}));	//check myFilter => [1,2,3]

//*********************************************************************
/* task: handmade method forEach()
 */

function myForEach(arr, cb, thisVal) {

  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr, thisVal)
  }
}

//c(myMap([9,4,4], function (elem) {c(elem + ' - is an elem in arr')}));	//check myForEach => arr[i] + str i-times && undefined

//*********************************************************************
/* task: handmade method map()
 */

function myMap(arr, cb, thisVal) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    res.push(cb(arr[i], i, arr, thisVal));
  }
  return res;
}

//c(myMap([9,4,4], function (elem) {return (elem*2)}));	// check myMap => [18,8,8]

//*********************************************************************
/* task: handmade method every()
 */

function myEvery(arr, cb, thisVal) {
  for (var i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i, arr, thisVal)) {
      return false;
    }
  }
  return true;
}

//c(myEvery([5,4,5], function (elem) {return elem === 5}));	//false

//*********************************************************************
/* task: handmade method some()
 */

function mySome(arr, cb, thisVal) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr, thisVal)) {
      return true;
    }
  }
  return false;
};

//c(mySome([5,5,5], function (elem) {return elem === 5}));	//true

//*********************************************************************
/* task: handmade method reduce() without continue
 */

function myReduceV1(arr, cb, startVal) {
  var acc, i = 0;
  if (startVal == undefined) {
    acc = arr[0];
    i = 1;
  } else {
    acc = startVal;
  }
  for (; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
}

//c(myReduce([10,10,10], function (acc, elem) {return acc + elem}));	//30
//c(myReduce([10,10,10], function (acc, elem) {return acc + elem}, 0));	//30

//*********************************************************************
/* task: handmade method reduce() best
 */

function myReduce(arr, cb, startVal) {
  var acc = startVal;
  for (i = 0; i < arr.length; i++) {
    if (acc == undefined) {
      acc = arr[i];
      continue;
    }
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
}

//c(myReduce([10,10,10], function (acc, elem) {return acc + elem}));	//30
//c(myReduce([10,10,10], function (acc, elem) {return acc + elem}, 0));	//30

//*********************************************************************
/* task: sort array of numbers without sort()
 */
function sortArrInc(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      //replace items if i>i+1
      if ((arr[i] - arr[i + 1]) > 0) {
        arr[i] = [arr[i + 1], arr[i + 1] = arr[i]][0];
      } else {
        continue;
      }
    }
  }
  return arr;
}

let anyArr = [8, 4, 1, 7, 9, 8, 9, 7, 6];
c(sortArrInc(anyArr));  //->1,4,6,7
