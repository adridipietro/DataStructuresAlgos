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

function plusOneAgain(digits){
    // iterate through digits backwards
    // i = digit's length - 1; while i is greater or equal to zero; decrement by 1
    for(let i = digits.length - 1; i >= 0; i--){
        
        // inrement each array item of digits by 1
        digits[i]++
        // if the array item's value is more than 9, change the value to zero
        if(digits[i] > 9){
            digits[i] = 0
        }else{
            // if the current digit is less than 9, return the array
            return digits
        }
    }
    // add 1 to beginning of array
    digits.unshift(1)
    // return the results
    return digits

}