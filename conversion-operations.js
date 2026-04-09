// let score = "sayali"; 
// console.log(typeof score);

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); //NaN

// converting any values to numbers :-
// "33" ==> 33
// "33abc" ==> NaN
// true ==> 1
// false ==> 0
// null ==> 0
// undefined ==> NaN

// let isLoggedIn = null;
// console.log(isLoggedIn);

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn, typeof isLoggedIn);


// conversion to boolean :-
// 0 ==> false
// 1 ==> true
// "" ==>false
// null ==> false

// let someNumber = null;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ----------------------------------- Operations -------------------------------------------- //
let value = 3;
let negValue = -value;
console.log(negValue);
// console.log(2+4);
// console.log(2*2);
// console.log(2**3);

let str1 = "hello";
let str2 = " sayali";

let str3 = str1 + str2;
// console.log(str3);
// console.log("1" + 2);
// console.log("2" + 1 + 3);
// console.log(1 + 2 + "3");

let num1, num2, num3;
num1 = num2 = num3 = 2+2;
// console.log(num1, num2, num3);

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

let x = 3;
const y = x++;
console.log(`x : ${x}, y: ${y}`);

let a = 3;
const b = ++a;
console.log(`a : ${a}, b: ${b}`);