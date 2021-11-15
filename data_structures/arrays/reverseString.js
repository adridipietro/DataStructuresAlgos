// create a function that reverses a string

// example: input = 'hey there'
// example: output = 'ereht yeh'

// input = string
// output = string

function reverse(string){
    if (!string || string.length < 2 || typeof string !== 'string'){
      return 'Invalid Input'
    }
  
    const backwards = []
    const totalItems = string.length - 1
  
    for (let i = totalItems; i >= 0; i--){
      backwards.push(string[i])
  
    }
  
    let backwardsString = backwards.join("")
    console.log(backwardsString)
  }
  reverse('hey hey')
  
  
  function reverseReal(string){
    if (!string || string.length < 2 || typeof string !== 'string'){
      return 'Invalid Input'
    }
    return string.split("").reverse().join("")
  }
  console.log(reverseReal('yolo'))
  
  
  
  
  const oneLineReverse = (string) => string.split("").reverse().join("")
  
  console.log(oneLineReverse('hehehe'))