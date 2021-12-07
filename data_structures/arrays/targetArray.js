// Given two arrays of integers, 'nums' and 'index'
// Return an array 'target' with the integers provided from 'nums' at the indices provided by 'index'

// Input = nums, index
// Output = target

// Example
    // nums = [3, 4, 5]
    // index = [1, 0, 2]
    // target => [4, 3, 5]


function targetArray(nums, index){
    // create an empty array 'target'
    const target = []

    // loop through nums array
    for (let i = 0; i < nums.length; i++){
        // calling splice on target, at the index of each array item of 'index' replace with the array item 'nums'
        target.splice(index[i], 0, nums[i])
    }

    // return target array
    return target
}