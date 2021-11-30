var isStringPalindrome = function(s) {
    // replace any non-alphanumeric characters with blank space + remove black spaces; turn string into all lowercase
    let onlyAlphaNum = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    //console.log(onlyAlphaNum)

    // split string into array, reverse array and rejoin array into a string; replace any non-alphanumeric characters; turn string into lowercase
    let reversedString = s.split("").reverse().join('').replace(/[^0-9a-z]/gi, '').toLowerCase()
    //console.log(reversedString)

    // if the reversed string is equal to the only Alphanumeric string
    // return true
    // else return false
    if (reversedString === onlyAlphaNum){
        return true
    }
    return false
}