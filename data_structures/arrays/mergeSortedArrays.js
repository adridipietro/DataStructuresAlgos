// Given two arrays, merge them into 1 array

// Input = 2 arrays
// Output = 1 array

const array1 = [1, 2, 3]
const array2 = [3, 4, 5]




function mergeSortedArrays(array1, array2) {
    // creating an empty array
    const mergedArray = []
    // grabbing the first item from each array
    let array1Item = array1[0]
    let array2Item = array2[0]

    // declare and define i and j 
    let i = 1
    let j = 1

    // EdgeCase: if either of the arrays are empty, return the not empty one
    if (array1 === []){
        return array2
    }
    if (array2 === []){
        return array1
    }

    // loop through the array until the condition is not met
    while (array1Item || array2Item){
        //console.log(array1Item, array2Item)
          if (!array2Item || array1Item < array2Item){
              mergedArray.push(array1Item)
              array1Item = array1[i]
              i++
  
          } else {
              mergedArray.push(array2Item)
              array2Item = array2[j]
              j++
          }
      }
      return mergedArray
}

mergeSortedArrays(array1, array2)