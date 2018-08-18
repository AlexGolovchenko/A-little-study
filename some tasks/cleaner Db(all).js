// console.log
function c(x) {
  console.log(x);
}

/*Task: replace wrong values and save db
 */

function replace(table) {
  var arr1 = new Array("SAP BPC"); //wrong values
  var arr2 = new Array("sap bpc"); //right values
  var obj = new SCFile(table);
  var resObj = obj.doSelect("true");
  while (resObj == RC_SUCCESS) {
    var len = obj.toArray().length;
    var n;
    for (var i = 0; i < len; i++) {
      n = arr1.indexOf(obj[i]);
      if (n != -1) {
        obj[i] = arr2[n]; //correction values
      }
    }
    obj.doAction("save");
    resObj = obj.getNext();
  }
  print(obj);
}; //replace("secorecategorization");

//**********************************************************************

/* the same task with an underscore function */

var _ = lib.Underscore.require(); //connect library

function replace(table) {
  var arr1 = new Array("SAP BPC"); //any wrong values
  var arr2 = new Array("sap bpc"); //right values
  var obj = new SCFile(table);
  var resObj = obj.doSelect("true");
  print(obj); //before
  while (resObj == RC_SUCCESS) {
    var len = obj.toArray().length;
    var n;
    for (var i = 0; i < len; i++) {
      n = _.indexOf(arr1, obj[i], false);
      if (n != -1) {
        obj[i] = arr2[n]; //correction values
      }
    }
    obj.doAction("save");
    resObj = obj.getNext();
  }
  print(obj); //after
};


//***********************************************************************

/*Task: keys should be lowercase, dot instead space inside. change any words from arrays
short solution*/

function replacev2() {
  var arr1 = ['OR', 'AND', '\'Assigned Group\''] //wrong values
  var arr2 = ['or', 'and', 'assigned.group'] //right values
  //example string
  var str = "'Reported Source' = \"Web\"  OR 'Reported Source' = \"Email\" AND 'Assigned Group' = \"1-Call Center SD\""; //string for check

  for (var i = 0; i < arr1.length; i++) {
    str = str.replace(new RegExp(" " + arr1[i] + " ", 'g'), ' ' + arr2[i] + ' ')
    str = str.replace(new RegExp(' = ', 'g'), ' == ')
  }
  //c(str)
}


//***********************************************************************

/*Task: keys should be lowercase, dot instead space inside. change any words from arrays
long solution*/

filter() for dbfunction myFilter (arr, cb) {
var res = [];
for (var i = 0; i < arr.length; i++) {
  if (cb(arr[i])) {
    res.push(arr[i]);
  }
}
return res;
}

function replace() {
  var arr1 = new Array('OR', 'AND', '='); //wrong values
  var arr2 = new Array('or', 'and', '=='); //right values
  var str = "'Reported Source' = \"Web\"  OR 'Reported Source' = \"Email\" AND 'Assigned Group' = \"1-Call Center SD\""; //string for check

  var re = new RegExp("'([A-z0-9 ]*)'", 'g');
  str = str.replace(re, function(m, c1) {
    c1;
    return c1.toLowerCase().replace(/ /, '.') + ' in $L.file'
  });

  var arr3 = str.split(" "); //array with some strings
  arr3 = myFilter(arr3, function(elem) {
    return elem
  }); //delete empty elements
  var tempArr = new Array();

  for (var i = 0; i < arr3.length; i++) {
    if (arr1.indexOf(arr3[i]) != -1) {
      tempArr.push(i); // indexes the same elements
    };
  };

  var newArr = new Array();
  for (var i = 0; i < arr3.length; i++) {
    if (tempArr.indexOf(i) == -1) {
      newArr.push(arr3[i]);
    } else {
      newArr.push(arr2[i % arr2.length]); //begin to count from the first point
    }
  };
  str = newArr.join(" ");
  c(str);
};
