/*16. using RegExp check URL. Criteries:
- protocols: http, https, а также ftp;
- subdomen should be one of them: m, m-test, c1...c100;
- domen must be "pikabu";
- URL port can be 8080;
- URL mustn't have anchor, path or parameters.
for example your valid URL will be: https://c52.pikabu.lh:8080
*/

//console.log
function c(x) {
  console.log(x);
}

function url(str) {
  var re = /(https?|ftp):\/\/(m-test|m|c(100|[1-9][0-9]|[1-9]))[.]pikabu[.][a-z]*(:8080)?$/;
  if (re.test(str)) {
    return true;
  } else {
    return false;
  }
}

//c(url('http://c2.pikabu.lh:8080'));

//*********************************************************

/*18. you have a random string. you should count characters in the string, which have ASCII multiple of three
without using loops (for, while, do) and declare new variable. write a compact code asap.
*/

//console.log
function c(x) {
  console.log(x);
}

function checkASCII(str) {
  c(str.split('').reduce((acc, elem) => elem.codePointAt(0) % 3 ? acc : ++acc, 0))
}

//checkASCII('12345qwerty');	//2

//*********************************************************

/*18.
the same task, dont using split
*/

function checkASCII2(str) {
  c(Array.prototype.reduce.call(str, (acc, elem) => elem.codePointAt(0) % 3 ? acc : ++acc, 0))
}

//checkASCII2('12345qwerty');	//2

//*******************************************************

/*19. change array of integers 'input' by next conditions:
- at first numbers multiple 2, in increasing order;
- next other numbers in decreasing order;
let input = [-2, 2, 4, 6, 8, 10, 3, 5, 7, 9, -1, -11];
func(input); // [ 10, 8, 6, 4, 2, -2, -11, -1, 3, 5, 7, 9 ]
long*/

//console.log
function c(x) {
  console.log(x)
}

function incNum(a, b) {
  return a - b;
}

function decNum(a, b) {
  return b - a;
}

const input = [-2, 2, 4, 6, 8, 10, 3, 5, 7, 9, -1, -11];

function func(input) {
  let one = [],
    two = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i] % 2) {
      one.push(input[i])
    } else {

      two.push(input[i])
    }
  }
  c([...two.sort(decNum), ...one.sort(incNum)]);
}
//func(input); // [ 10, 8, 6, 4, 2, -2, -11, -1, 3, 5, 7, 9 ]

//*******************************************************

/*19.
the same task
short*/
function x(arr) {
  const odd = [],
    even = [];
  arr.forEach((e) => e % 2 ? odd.push(e) : even.push(e))
  odd.sort((x, y) => x - y)
  even.sort((x, y) => y - x)
  return even.concat(odd)
}
//c(x(input))	// [ 10, 8, 6, 4, 2, -2, -11, -1, 3, 5, 7, 9 ]

//*******************************************************

/*20. Offer your option BaseClass for success
 */

class BaseClass {
  get a() {
    return -1 * this._a
  }
  set a(value) {
    this._a = value
  }
  get b() {
    return -1 * this._b
  }
  set b(value) {
    this._b = value
  }

}
class MyClass extends BaseClass {
  result(a, b) {
    this.a = a;
    this.b = b;
    return 100 - this.a + this.b;
  }
}

let m = new MyClass();
// c(m.result(10, 20) === 90);
// c(m.result(20, 10) === 110);

//*******************************************************
