/*Task:
Write a script in JS, which will delete 1 to infinite random words. You should delete reserved JS words only.
*/

function cutJS(min = 1, max = 3, str) {
  if (typeof str == "undefined") {
    str = `Hello break Hello return Hello var Hello break Hello var Hello case Hello break Hello var`;
  };

  if (typeof str !== "string") {
    console.log("invalid string");
    return void 0;
  };
  if (max > min && typeof min == "number" && typeof max == "number") {
    var arr = str.split(" ");
    var rand = Math.floor(Math.random() * (max + 1 - min) + min); //1 or 2 or 3
    var reserved = new Array("var", "return", "break", "case", "let", "switch", "for", "while"); //JS reserved words
    var tempArr = new Array();
    var newArr = new Array();
    var newStr;
    for (var i = 0; i < arr.length; i++) {
      if (reserved.indexOf(arr[i]) != -1) {
        tempArr.push(i); //indexes reserved words
      };
    };
    var num = Math.floor(Math.random() * tempArr.length); //random num in tempArr
    tempArr = tempArr.slice(num, num + rand); //indexes what we need to del from arr
    for (i = 0; i < arr.length; i++) {
      if (tempArr.indexOf(i) == -1) {
        newArr.push(arr[i]);
      };
    };
    newStr = newArr.join(" ");
    console.log(newStr);
  } else {
    console.log("invalid numbers");
  };
};


/*Task:
Write a script in JS, which will delete 1 to infinite random characters. You should delete letters only.
*/

function cut() {
  var str = "Hello, world #1!";
  var max = 3;
  var min = 1;
  var rand = Math.floor(Math.random() * (max + 1 - min) + min); //1 or 2 or 3
  var num = Math.floor(Math.random() * str.length); //num in str
  var re = new RegExp("^[A-Za-z]{" + rand + "}$"); //only letters
  var x = str.slice(num, num + rand); //get chosen letters

  if (re.test(x)) { //check letters
    x = str.slice(0, num) + str.slice(num + rand); //get string without letters
    console.log(rand + ": " + x); //print success
  } else {
    console.log(`RegExp has failed, rand = ${rand}. ${x}`); //print fail
  }
}
