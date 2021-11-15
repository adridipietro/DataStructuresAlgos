// inputs: array of numbers, integer
// output: indices of two numbers (integers)

// return the indices of the two integers that sum makes up the target integer

const exampleNums = [1, 2, 4]
const exampleTarget = 6


var twoSum = function(nums, target) {
  /* let hash = {
    1: 0,
    2: 1, 
    4: 2
  } */

  // if the array given only has two array items, return the first and second index
  if (nums.length === 2) return [0,1]
  // optional: create a constant for nums.length to use during iteration 
  const length = nums.length
  // create an empty hash table to store the value of the array items as keys and the indices of those items as values. 
  let hash = {}
    // loop through the nums array
    for (let i = 0; i < length; i++){
        // store the index of the array item as a value of the property
        hash[nums[i]] = i
    }
    //loop through the nums array again
    for (let i = 0; i < length; i++){
      // simple formula to figure out the complement of each number that would add to the target integer
      let complement = target - nums[i]
      // set a variable to the hashes complement
      let found = hash[complement]
      // as long as found is not undefined and does not equal the first index, return the indices as an array
      if (found !== undefined && found != i){
        return [i, found]
      }
    }
    // else return [0,0]
    return [0,0]
    
    
};


console.log(twoSum(exampleNums, exampleTarget))