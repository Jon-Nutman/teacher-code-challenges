const arr = [1]
const firstIsOne = arr[0] == 1
// set firstIsOne to true if the first item is 1


console.assert(firstIsOne === true)

const obj = {
    count: 1
}

obj.count++

// increment count by 1 do not directly change obj above
console.assert(obj.count === 2)

const obj2 = {
    count: 3
}
obj2.count--
// decrease count by 1 do not directly change obj above
console.assert(obj2.count === 2)

const person = {
    first: 'Jane',
    last: 'doe',
    isCool: false
}

// check that first name is larger than last name
// don't change the null to the value true
// use the object
const isFirstLarger = person.first.length > person.last.length
console.assert(isFirstLarger === true)

person.isCool = true

// set person isCool to true
// do not manually change the object above
console.assert(person.isCool === true)