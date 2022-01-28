// Given a string 's', find the length of the longest substring without repeating characters.

// input = string
// output = integer

function lengthOfLongestSubstring(s){
    // GOALS
    // if length of string === 0, return 0
    // if length of string === 1, return 1
    // declare temp variable
    // declare length variable
    // loop through the string
        // if the index of the letter of the string === -1
            // push it onto temp array
            // Math.max the length
        // else 
            // push the letter into a new temp var
            // slice the 
            // reassign the length variable
            // if the length variable of the substring is larger than the current substring...
    // return the length

    if (s.length === 0 ) return 0
    if (s.length === 1) return 0

    let temp = []
    let maxLength = 0

    for (let i = 0; i < s.length; i++){
        if (temp.indexOf(s[i]) === -1){
            temp.push(s[i])
            maxLength = Math.max(maxLength, temp.length)
        } else {
            maxLength = Math.max(maxLength, temp.length)
            temp = temp.slice(temp.indexOf(s[i])+1)
            temp.push(s[i])
        }
        
    }
    
    return maxLength
}