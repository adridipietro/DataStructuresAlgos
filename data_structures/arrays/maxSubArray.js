// given an array of integers called "nums", return the largest integer total of a contiguous array

// input = array
// output = integer

var maxSubArray = function(nums) {
    // if array's length is 1 than just return the integer of the array
    if (nums.length === 1){
        return nums[0]
    }
    // declare + assign constants 
    // The Number.MIN_SAFE_INTEGER constant represents the minimum safe integer in JavaScript 
    // In JavaScript, MIN_SAFE_INTEGER is a static property of the Number object that is used to return the minimum safe integer value. Because MIN_SAFE_INTEGER is a property of the Number object, it must be invoked through the object called Number.
    let maxTotal = Number.MIN_SAFE_INTEGER
    let runningTotal = 0
    
    // loop through the array "nums"
    for (let i = 0; i < nums.length; i++){
        // Math.max(arg1, arg2) => returns larger of the two args

        // reassign runningTotal to the larger of the two args
        runningTotal = Math.max(nums[i], runningTotal + nums[i])
        // reassign maxTotal to the larger of the two args
        maxTotal = Math.max(maxTotal, runningTotal)
        
    }
    return maxTotal
};

console.log(maxSubArray([3, -4, 3, -1, 2, -5, -4, 5]))