// Given 2 arrays, create a function that let's a user know (returning true or false) whether these two arrays contain any common array items 

//Example 1
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'x', 'y']
// should return TRUE

// 1. two parameters (our inputs are 2 arrays)
// 2. function should return true or false (outputs)
// 3. how large could the array possibly get? (space, time complexity) do we have a size limit?
// 4. what is more important? readability or efficiency?
// 5. negative numbers? floats? objects?
// 6. brute force = easy solution; not too efficient
// 7. our brute force would be a nested loop; going through each array item and comparing the two different arrays. This, however, is not efficient -- O(n^2). Avoid nested for loops. But talk about it anyway. 

function commonItem(arr1, arr2){
for (let i = 0; i < arr1.length; i++){
for (let j = 0; j < arr2.length; j++){
  if (arr1[i] === arr2[j]){
    return true
  } 
}
}
return false
}

console.log(commonItem(array1, array2))

// 8. nested for loops can be replaced with hashed tables to be faster 

// converting the array into an object with properties and values

/* array1 => obj{
a: true, 
b: true,
c: true
x: true
} */

// Does any of array2's indexes equate to any of array1's object properties?
// array2[index] === obj.properties

function containsCommonItem(arr1, arr2){
// loop through first array and create object where properties === array items
let map = {}
for (let i = 0; i < arr1.length; i++){
if(!map[arr1[i]]){
  const item = arr1[i]
  map[item] = true
}
}
console.log(map)
// loop through second array and check if item in second array exists on created object
// these 2 loops are NOT going to be nested!
for (let j = 0; j < arr2.length; j++){
if(map[arr2[j]]){
  return true
}
}
return false

}
console.log(containsCommonItem(array1, array2))
// BIG O NOTATION === O(a+b)