// Given an array of integers, return the first recurring number. 

// Input = array
// Output = integer

// Example
  // array = [2, 3, 5, 4, 2, 1, 7]
  // should return '2'


// First Approach -- Nested For Loop
function firstRecurring(array){
    for (let i = 0; i < array.length; i++){
      for (let j = i + 1; j < array.length; j++){
        // let j = i + 1 => always goes to the right of i 
        if (array[i] === array[j]){
          return array[i]
        }
      }
    }
    return 'No recurring number. Sorry.'
  }
  
console.log(firstRecurring([ 3, 5, 4, 2, 1, 7]))
// This has a Big O notation of O(n^2)
// This is NOT efficient
  
  
  
// Second Approach -- Hash Tables
function firstRecurringCharacter(array){
    // loop through the array, add each array item to the hash table 
    // check to see if the key (or property) already exists
    // check to see if we already have '2' or whatever, as a key. 
    let hash = {}
    for (let i = 0; i < array.length; i++){
      if(hash[array[i]] !== undefined){
        return array[i]
      }
      hash[array[i]] = true
    }
    return undefined
  
    /* hash = {
      2: 0,
      3: 1,
      3: 2,
      ...
    } */
  
}
  
// This has a Big O Notation of O(n)
// This is more efficient -- only one loop
  
console.log(firstRecurringCharacter([2, 3, 5, 4, 4, 1, 7]))