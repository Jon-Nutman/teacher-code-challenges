const f1 = (x) => {
  return JSON.stringify(x);
};

//IGNORE CODE ABOVE

//make a loop below that sets "o1" to an array of
//numbers 1-5
let o1;

console.assert(f1(o1) === [1, 2, 3, 4, 5]);

let arr1 = [1, 2, 3];
//make a for loop below that increments "o2" to
//how many items there are in "arr1"
let o2 = 0;

let arr2 = [4, 5, 6];
//make a for loop  below that injects the numbers 7, 8 and 9
//to the end of the array arr2

console.assert(stringify(arr2) === stringify([4, 5, 6, 7, 8, 9]));

let obj1 = { key1: 1, key2: 2, key3: 3 };
//make a for loop below that accesses each key in obj1
//and increments their value by 1

console.assert(stringify(obj1) === stringify({ key1: 2, key2: 3, key3: 4 }));

let arr3 = ["a", "a", "b", "a", "c", "c"];
let obj2 = {};

//make a for loop below that inserts key value pairs
//in obj2 where each key represents how many pairs
//there are in arr3
//expected obj2 = {a: 3, b: 1, c: 2}

console.assert(stringify(obj1) === stringify({ a: 3, b: 1, c: 2 }));
