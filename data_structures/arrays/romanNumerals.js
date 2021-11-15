
// given roman numerals, return the corresponding integer

// input = string
// output = integer
// If 'I' comes before another roman numeral, subtract 1 from the total
// If multiple Is come before another roman numeral, subtract the amount of Is from the total

// want to split string into array and iterate through each array item to find corresponding integer

// create an object where roman numbers are keys and integers are values


function romanToInt(s) {
    
    let symbols = {
        "I": 1,
        "V": 5, 
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    console.log(symbols)
    
    let array = s.split("")
    console.log(array)
    let total = 0
    
    for (let i = 0; i < array.length; i++){
        symbols[array[i]] < symbols[array[i+1]] ? total -= symbols[array[i]]: total += symbols[array[i]]
    }
    
    return total
    
    
    
};

console.log(romanToInt("VX"))