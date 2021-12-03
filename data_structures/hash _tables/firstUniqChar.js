// Given a string, return the index of the first unique character

// Input = string
// Output = Integer (index)

function firstUniqChar(string){
    // loop through the string
    for (let i = 0; i < string.length; i++){
        // if the index of any string item is equal to the index of the last occurrence of the specified string value
        if (string.indexOf(string[i]) === string.lastIndexOf(string[i])){
            // return the index
            return i
        }
    }
    // otherwise return -1 or "sorry"
    return -1
}