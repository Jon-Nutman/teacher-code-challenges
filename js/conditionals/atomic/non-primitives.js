//Q1
let arr1 = [];
let isEmpty;
//write  an if statement below that checks
//if the array arr1 is empty
//isEmpty should be true

if(arr1.length < 1){
  return isEmpty
}

console.assert(isEmpty === true);



//Q2
let arr2 = [1, 2, 3];
let isNotEmpty;
//write  an if statement below that checks
//if the array arr2 is not empty
//isNotEmpty should be true
if(arr2.length > 1){
  isNotEmpty = true
}


console.assert(isNotEmpty === true);

//Q3
let arr3 = [2, 4, 6];
let isTwo;
//write  an if statement below that checks
//if the first item in the array equals
//the value 2
//isTwo should be true

if(arr3[0] = 2){
  isTwo = true
}

console.assert(isTwo === true);

//Q4
let person1 = { name: "John", age: 24 };
let isJohn;
//write an if statement below that checks
//if the name equals the string "John"
//inside the object of person1
//isJohn should be true
if(person1.name = 'John'){
  isJohn = true
}
console.assert(isJohn === true);

//Q5
let person2 = { name: "Cindy", age: 27 };
let isNotJohn;
//write an if statement below that checks
//if the name does not equal the string "John"
//inside the object of person2
//isNotJohn should be true
if(person2.name != 'John'){
  isNotJohn = true
}
console.assert(isNotJohn === true);

//Q6
let person3 = { name: "Steve", age: 21 };
let isOverTwentyOne;
//write an if statement below that checks
//if the age is over 21 inside the object of person3
//isNotJohn should be true
if(person3.age >= 21){
  isOverTwentyOne = true
}

console.assert(isOverTwentyOne === true);
