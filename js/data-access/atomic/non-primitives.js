let arr1 = [1, 2, 3];
// set o1 to the first item in the array arr1
let o1;
console.assert(o1 === 1);

let arr2 = [2, 4, 6];
// set o2 to the last item in the array arr2
let o2;
console.assert(o2 === 6);

let arr3 = ["apple", "orange", "pear"];
// add the value "banana" to the end of the array arr3

console.assert(
  JSON.stringify(arr3) === JSON.stringify(["apple", "orange", "pear", "banana"])
);

let arr4 = [
  [11, 22, 33],
  [12, 23],
];
// set o4 to the second nested array in arr4 "[11, 23]"
let o4;
console.assert(JSON.stringify(o4) === JSON.stringify([11, 23]));

let obj1 = { firstName: "John", lastName: "Daly" };
// add a key value pair of "age: 24" to the object obj1 without
//changing the code above
console.assert(
  JSON.stringify(obj1) === { firstName: "John", lastName: "Daly", age: 24 }
);

let obj2 = { firstName: "John", lastName: "Daly" };
// access the value "John" in the object obj2 and set it to o5
let o5;
console.assert(o5 === "John");

let obj3 = {
  make: "Toyota",
  model: "Prius",
  year: 2019,
  colors: { color1: "Red", color2: "Green", color3: "Silver" },
};
// access the value "Silver" in the object obj3 and set it to o6
let o5;
console.assert(o5 === "Silver");
