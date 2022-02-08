// Given an array of integers, push any array items 
// whose value matches "val" to the end of the array
// Replace the array items with an '_'
// Return the modified array 

var removeElement = function(array, val) {
    // create a 'for' loop to iterate through the array
    for (let i = 0; i < array.length; i++){
        // set a variable 'item' to each array item
        let item = array[i]
        // set a variable 'index' to each array item's index
        //console.log(item)
        let index = array.indexOf(item)
        // if the array item's value is equal to 'val'
        if (item === val){
          //remove the item at its index
          array.splice(index, 1)
          // push an underscore to the end of the array
          array.push('_')
        }

    
      }
      // return the modified array
      return array
    
}

console.log(removeElement([3,2,3], 3))


// Other Solution

var removeElement2 = function(array, val) {
     // create a 'for' loop to iterate through the array
     for (let i = 0; i < array.length; i++){
      // set a variable 'item' to each array item
      let item = array[i]
      // if the array item's value is equal to 'val'
      if (array[i] === val) {
          // splice that value at the index
          array.splice(i, 1);
          // decrement i
          i--
      }
    }
  return array.length
}