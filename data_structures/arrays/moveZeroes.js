// Given an array of integers, 
// move all of the zeroes to the end of the array

// Do not make a copy of the array

// Input = array
// Output = array

function moveZeroes(array){
    // create a 'for' loop to iterate through the array
    for (let i = 0; i < array.length; i++){
        // set a variable 'item' to each array item
        let item = array[i]
        // set a variable 'index' to each array item's index
        let index = array.indexOf(item)
        // if the array item's value is equal to 0 ...
        if (item === 0){
            // delete that array item at its index from the array; only deleting that one item
          array.splice(index, 1)
          // then push the array item of 0 to the end of the array using .push
          array.push(item)
        }

    
      }
      return array

}