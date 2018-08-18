/*Task: count 0 to 100 and print 'fizz' if num % 3, 'buzz' if num % 5, 'fizzbuzz' if num % 3*5 else print num
long*/

//console.log
function c(x) {
  console.log(x);
}

function fizzbuzz {
  for (var i = 1; i <= 100; i++) {
    var f = '';
    if (i % 3 == 0) {
      f = 'fizz'
    }
    if (i % 5 == 0) {
      f = f + 'buzz'
    }
    if (f == '') {
      f = i
    }
    c(f)
  }
}

//fizzbuzz()

//**************************************************************

/*Task: count 0 to 100 and print 'fizz' if num % 3, 'buzz' if num % 5, 'fizzbuzz' if num % 3*5 else print num
short*/

function fizzbuzz2 {
  for (var i = 0; i < 100;) c(((++i % 3 == 0 ? 'fizz' : '') + (i % 5 == 0 ? 'buzz' : '')) || i)
}

//fizzbuzz2()
