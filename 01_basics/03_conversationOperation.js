let score="33abc"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

/* let a=null
let In= Number(a)
console.log(typeof In)
console.log(In)
let b=undefined
let inv= Number(b)
console.log(typeof inv)
console.log(inv)*/

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue)


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(6%7);

let str1 = "Hello"
let str2 = " There"
let str3 = str1 + str2
console.log(str3)

console.log("1"+2)
console.log(1+"2")
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(2+(1+"2"))
console.log((2+1)+"2")

console.log( (3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

