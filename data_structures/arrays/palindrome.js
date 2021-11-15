// given an integer, return true if the integer is a palindrome

// input => integer
// output => true or false

// if integer < 11, return false

function isPalindrome(number) {
    if (number < 11){
        return false
    }
    let string = number.toString()
    //console.log(string)
    let array = string.split('')
    //console.log(array)
    //console.log(array.reverse())
    //console.log(array.reverse().join(""))
    if (array.reverse().join("") === string){
      return true
    }
    return false
    
}

console.log(isPalindrome(212)) // true
console.log(isPalindrome(10)) // false
