//Q1
let a = 0;
// set a to the value 1 without changing the line above
a = 1
console.assert(a === 1);

//Q2
const num = 6;
// check that 5 is more than 6 using num with an operator
// only touch value the variable directly below this comment
const moreThanFive = num > 5

console.assert(moreThanFive === true);

//Q3
let num2 = 7;
// increment num2 by 1 using an operator (not assignment)
num2++
console.assert(num2 === 8);

//Q4
let num3 = 6;
// decrease num3 by 1 using an operator (not assignment)
num3--
console.assert(num3 === 5);

//Q5
let num4 = 7;
// increment num2 by 2 using an operator (not assignment)
num4 = num4 +2
console.assert(num4 === 9);

//Q6
let num5 = 6;
// decrease num5 by 1 using an operator (not assignment)
num5--
console.assert(num5 === 5);

// --string concatenation--

//Q7
let foo = "hello";
// using concatenation (+), set foo to hello world
foo = foo + " " + "world!"
console.assert(foo === "hello world!");

//Q8
let foo2 = "hello";
// using concatenation (+=), set foo to hello world
foo2 +=  " " + "world!"
console.assert(foo2 === "hello world!");

//Q9
let foo3 = "bye";
let isBye = foo3 == 'bye'

// set isBye to true if foo3 is equal to 'bye'

console.assert(isBye === true);
