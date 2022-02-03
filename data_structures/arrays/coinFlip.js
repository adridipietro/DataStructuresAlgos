// Given an array of coins, tell us how many times a coin has to be flipped
    // in order to achieve an alternating pattern between heads and tails.

    // head = 1
    // tail = 0

    // input = array
    // output = integer

function coinFlip(array){
        // iterate over array to access value of each array item
        // declare a counter and increment the counter when needed
        // declare a pointer to the 'next' value

    //edge cases
    if (array.length === 0 || array.length ===1){
        return 0 
    }

    let minimumFlips = 0

    for (let i = 0; i < array.length; i++){
        let coin = array[i]
        //console.log(coin)
        let pointer = array[i+1]
        //console.log(pointer)
        if (coin === pointer && coin === 0){
            pointer = 1
            minimumFlips++
        }
        if (coin === pointer && coin === 1){
            pointer = 0
            minimumFlips++
        }
        
    }
    // return minimumFlips 
    return minimumFlips
}

coinFlip([0, 0, 1, 0])