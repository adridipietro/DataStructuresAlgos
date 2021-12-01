// Given an array "temps", return the integer that is closest to zero
// The array "temps" is made up of only pos + neg integers (no floats)

// Return the integer in positive form

// Input = array
// Output = positive integer

// If array temps is empty, return zero
// If array temps only has one array item, return that array item (positive)

function findClosestToZero(temps){
    let closest = 0
  
    for (let i = 0; i < temps.length; i++){
      if (closest === 0) {
              closest = temps[i]
              console.log(closest)
      } else if (temps[i] > 0 && temps[i] <= Math.abs(closest)) {
              closest = temps[i]
              console.log(closest)
      } else if (temps[i] < 0 && - temps[i] < Math.abs(closest)) {
              closest = temps[i]
              console.log(closest)
      }
    }
    return Math.abs(closest)
  
  }
  
  console.log(findClosestToZero([54, 0, 33, -1, -2]))