//Task: check values, replace matches by another array (arr2)

function replace() {
  var arr1 = new Array(1, 3, 5); //wrong values
  var arr2 = new Array(2, 4, 6); //right values
  var arr3 = new Array(1, 10, 3, 70, 5, 49, 3, 20, 3, 30, 3); //example array for check
  var tempArr = new Array();
  var newArr = new Array();

  for (var i = 0; i < arr3.length; i++) {
    if (arr1.indexOf(arr3[i]) != -1) {
      tempArr.push(i); // indexes the same elements
    };
  };

  for (var i = 0; i < arr3.length; i++) {
    if (tempArr.indexOf(i) == -1) {
      newArr.push(arr3[i]);
    } else {
      newArr.push(arr2[i % arr2.length]); //begin to count from the first point
    }
  };
  console.log(newArr);

};
//replace();
