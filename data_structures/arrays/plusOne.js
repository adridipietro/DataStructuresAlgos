// Given an array of integers, increment the 
// integer the array represents by one (1) 
// and return the resulting array of digits.

// Example
    //Input: digits = [1,2,3]
    //Output: [1,2,4]
    //Explanation: The array represents the integer 123.
    //Incrementing by one gives 123 + 1 = 124.
    //Thus, the result should be [1,2,4].

function plusOne(digits){
    // converting array into string
    let arrayToString = digits.join("")

    // converting string into integer; incrementing by 1
    let stringToInteger = parseInt(arrayToString) + 1

    // converting integer back to string
    let newString = stringToInteger.toString()
    // converting string back to array
    return newString.split("")
}