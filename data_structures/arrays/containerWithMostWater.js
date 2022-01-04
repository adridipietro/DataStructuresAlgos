// Given an array of integers, where each integer represents the height of a line (y-axis), return the maximum area between two lines. 
// The distance between two different lines is represented by the x-axis. 


// input = array of positive integers
// output = largest maximum area 

// container must be formed using 2 values of the array
// the values in the array represent the y value on a x/y axis. 
// the x value is represented by its position in the array
// area = length x width


// BRUTE FORCE ATTEMPT
    // BIG O(n^2)
function containerWithMostWater(height){
    // declare and assign a constant of maximumArea to 0
    let maximumArea = 0;
    // loop through the array "height"
     for (let i = 0; i < height.length; i++) {
         // loop through the array "height" again; starting at the second value of the array
         for (let j = i + 1; j < height.length; j++) {
             // take the smaller (the shorter) of the two array values using Math.min()
             let shorterBar = Math.min(height[i], height[j])
             // find the width between two array items 
             let width = j - i;
             // if the currentArea is greater than the maximumArea, set currentArea to maximumArea
             // otherwise keep the maximumArea
             maximumArea = Math.max((shorterBar * width), maximumArea) 
         }
     }
     return maximumArea;
 }
 
 containerWithMostWater([6, 9, 3, 4, 5, 8])
 containerWithMostWater([7, 1, 2, 3, 9])