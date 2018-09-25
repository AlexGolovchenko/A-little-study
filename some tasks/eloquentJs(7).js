/*Task: count 0 to 100 and print 'fizz' if num % 3, 'buzz' if num % 5, 'fizzbuzz' if num % 3*5 else print num
long*/

//console.log
const c = x => console.log(x);

function fizzbuzz() {
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

function fizzbuzz2() {
  for (var i = 0; i < 100;) c(((++i % 3 == 0 ? 'fizz' : '') + (i % 5 == 0 ? 'buzz' : '')) || i)
}

//fizzbuzz2()

// console.log
const log = console.log;
/*Task: log chessboard of cell '#' 8x8
 */

function chess() {
  let cell = '#' //cell inside
  let empty = ' ' //empty inside
  let temp1 = ''
  let temp2 = ''
  for (let i = 0; i < 8; i++) {
    if (i % 2) {
      temp1 += empty;
      temp2 += cell;
    } else {
      temp1 += cell;
      temp2 += empty;
    }
  }
  for (let i = 0; i < 4; i++) {
    log(temp1 + '\n' + temp2);
  }
}
// chess(); //->
// # # # #
//  # # # #
// # # # #
// etc

//***********************************

/*Task: convert kelvin -> celsius -> fahrenheit -> newton
 */
function temperature() {
  // current temperature in klevin degrees
  const kelvin = 0;
  // convert kelvin to celsius
  const celsius = kelvin - 293;
  // convert celsius to fahrenheit
  let fahrenheit = celsius * (9 / 5) + 32;
  //round temperature in fahrenheit degrees
  fahrenheit = Math.floor(fahrenheit);
  let newton = celsius * (33 / 100);
  newton = Math.floor(newton);
  log(`The temperature ${fahrenheit} degrees Fahrenheit.`);
  log(`The temperature ${newton} degrees Newton.`);
}
// temperature();

// *****************************************
/*Task: convert my age to dog's age. the first 2 dogs years = 10,5 humans. the others - 4.
 */
function age() {
  // create my current age
  const myAge = 25;
  // the first two years
  let earlyYears = 2;
  earlyYears *= 10.5;
  let laterYears = myAge - 2;
  laterYears *= 4;
  let myAgeInDogYears = earlyYears + laterYears;
  let myName = "Alex".toLowerCase();
  log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
}
// age();

// **********************************************
/*Tast: write loop for printing triangle of cell
 */
function triangle(x = 8) {
  if (typeof x !== 'number') {
    console.log('Error: wrong data!');
    return;
  }
  let cell = '#';
  let temp = '';
  let i = 0;
  while (i < x) {
    temp += cell;
    log(temp);
    i++;
  }
}
// triangle(4); // ->
// #
// ##
// ###
// etc

// ************************************************

/*Task: write a function User for successfully comment in log -> // Alex Golovchenko
 */
function User() {
  let str1, str2;
  this.setFirstName = str => {
    str === false ? console.log('you didnt write your First name') : str1 = str
  };
  this.setSurname = str => {
    str === false ? console.log('you didnt write your Surname') : str2 = str
  };
  this.getFirstName = () => str1;
  this.getSurname = () => str2;
  this.getFullName = () => str1 + ' ' + str2;
}

// let user = new User();
// user.setFirstName("Alex");
// user.setSurname("Golovchenko");
// log( user.getFullName() ); // Alex Golovchenko

//******************************************

/*create CoffeeMachine with power and capacity, include getter for power, setter for water and check it, getter for water.
 */
function CoffeeMachine(power, capacity) {
  this.getPower = () => power
  this.setWaterAmount = amount => {
    amount < 0 ? log("value must be positive") : false;
    amount > capacity ? log("you cant to add more water, than " + capacity) : false;
    waterAmount = amount;
  };
  this.getWaterAmount = () => waterAmount
}

// let coffe = new CoffeeMachine (4000,500);
// coffe.setWaterAmount(600); //-> Нельзя залить воды больше, чем 500
// coffe.setWaterAmount(-400); //-> Значение должно быть положительным
// coffe.setWaterAmount(400);
// log ( coffe.getWaterAmount() ); //-> 400
// log( coffe.getPower() ); //-> 4000

//******************************************

/*Task: Write a function min that takes two arguments and returns their minimum
 */

function myMin (a,b) {
    a == b ? c('they are equal!') : a > b ? c(b) : c(a);
}
myMin(11,2)
