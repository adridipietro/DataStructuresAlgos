// Given an array of non-negative integers representing an elevation map 
/// where the width of each bar is 1, compute how much water it can trap after raining.

// input = array 
// output = integer (amount of 1x1 spaces filled with water)

function trappedWater(array){
    let total = 0
    for (let i = 0; i < array.length; i++){
        let leftPointer = i
        let rightPointer = i
        let maxLeft = 0
        let maxRight = 0
        while (leftPointer >= 0){
            maxLeft = Math.max(maxLeft, array[leftPointer])
            leftPointer--
        }
        while (leftPointer < array.length){
            maxRight = Math.max(maxRight, array[rightPointer])
            rightPointer++
        }
    }
}