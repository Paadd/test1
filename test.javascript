const addsOne = (num) => num + 1 // We start with 1 as an initial value
  const numPlus1 = addsOne(3) // Function to add 3
  const stringNumPlus1 = addsOne('3') // Add the two functions, expect 4 as the value
    
  /**
    * console.assert
    * https://developer.mozilla.org/en-US/docs/Web/API/console/assert
    * @param test?
    * @param string
    * @returns string if the test fails
    **/
    
  console.assert(numPlus1 === 4, 'The variable `numPlus1` is not 4!')
  console.assert(stringNumPlus1 === 4, 'The variable `stringNumPlus1` is not 4!')