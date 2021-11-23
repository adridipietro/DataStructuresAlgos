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
          //console.log(item)
          array.splice(index, 1)
          array.push('_')
        }

    
      }
      return array
    
}

console.log(removeElement([3,2,3], 3))