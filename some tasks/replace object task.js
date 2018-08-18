/*replace wrong values from object
 */

function replace() {
  var arr1 = new Array("- Global -", "Demo"); //wrong values
  var arr2 = new Array("global", "demo"); //right values

  //target object
  var obj = {
    company: "Global",
    name: "Demo",
    id: 2,
    instanceid: "CPY000456"
  }

  var n;
  for (var key in obj) {
    n = arr1.indexOf(obj[key]);
    if (n != -1) {
      obj[key] = arr2[n]; //correction
    }
  }
  console.log(obj);
};
//replace();