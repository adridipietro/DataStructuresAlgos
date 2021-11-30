// Given an array of integers, return the missing number 

// input = array
// output = integer

// Example: 
  // Input: nums = [3,0,1]
  // Output: 2
  // Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

  var missingNumber = function(nums) {
    if (nums === [0]){
      return 1
    }
    if (nums === [0, 1]){
      return 2
    }
   
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum = sum + (i + 1) - nums[i]
      //console.log(i) 
      //console.log(nums[i])
    }
  
    return sum
    
    
  }
  
  console.log(missingNumber([0]))