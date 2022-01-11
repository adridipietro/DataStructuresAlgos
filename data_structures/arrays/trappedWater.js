// Given an array of non-negative integers representing an elevation map 
/// where the width of each bar is 1, compute how much water it can trap after raining.

// input = array 
// output = integer (amount of 1x1 spaces filled with water)

// the array is made up of positive integers only. 
// the walls of the graph do not count as walls of the containers. 

// each array item represents its y-axis height on a graph; 
// each array item has a x-axis width of 1



// BRUTE FORCE ATTEMPT [O(n^2)]
    // this attempt uses double looping which does NOT optimize time or space complexity.
    

function trappedWater(array){
    // total = amount of water represented in 1x1 spaces
    let total = 0
    // loop through the array
    for (let i = 0; i < array.length; i++){
        // declare left and right pointers represented by each item in the array
        let leftPointer = i
        let rightPointer = i

        // declare a maxLeft and maxRight variable; starting at 0
        let maxLeft = 0
        let maxRight = 0

        // while the leftPointer is greater than 0...
        while (leftPointer >= 0){
            // reassign maxLeft to whatever is a larger integer
            maxLeft = Math.max(maxLeft, array[leftPointer])
            // decrement the leftPointer (moving left across x-axis)
            leftPointer--
        }
        // while the is less than the array's length...
        while (rightPointer < array.length){
            // reassign maxRight to whatever is the larger integer
            maxRight = Math.max(maxRight, array[rightPointer])
            // increment rightPointer (moving right across x-axis)
            rightPointer++
        }
        // declare and assign waterLevel to whatever is lower and subtract the current array item
        const waterLevel = Math.min(maxL, maxR) - height[i]

        // if the waterLevel is greater than 0, add the waterLevel to the total
        // otherwise return null (aka leave waterLevel alone)
        waterLevel > 0 ? total += waterLevel : null
    }
    // return the total
    return total
}