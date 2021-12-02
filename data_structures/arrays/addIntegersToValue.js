// Given an integer, add the integers that make up that number and return the sum

// Input = integer
// Output = integer

// Example:
  // 123
  // 123 => 1 + 2 + 3 === 6 => 129

function addIntegersToValue(number){
    // convert integer to array
    let array = number.toString().split("")
    console.log(array)
  
    // if array's length is less than or equal to 1; return the original number
    if (array.length === 1){
      return array.join("")
    }
  
    /* if (array.length > 1 || array[0] === 0){
      array.shift()
      console.log(array)
    } */
  
    // loop through array
    // declare + assign variable 'item' to each array item
    for (let i = 0; i < array.length; i++){
      const item = array[i]
      // for each array item, add its value to the original number passed into the function
      number += Number(array[i])
      //console.log(number)
    }
    return number
}
  
console.log(addIntegersToValue(123))
console.log(addIntegersToValue(1))
console.log(addIntegersToValue(0))
console.log(addIntegersToValue(111))