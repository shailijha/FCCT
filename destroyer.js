function destroyer(arr) {
  // Remove all the values
  var result = [];
  var input = arguments[0];
  var removeElements = [];
  for (let idx = 1; idx < arguments.length; idx++) {
    removeElements.push(arguments[idx]);
  }
  // console.log(removeElements);
  // console.log(input);
  for (let idx = 0; idx < input.length; idx++) {
    for (let idx1 = 0; idx1 < removeElements.length; idx1++) {
      if (input[idx] == removeElements[idx1]) {
        //console.log(input[idx]);
        input[idx] = null;
        //console.log(input);
      }
    }
  }
  for (let index = 0; index < input.length; index++) {
    if (input[index] !== null) result.push(input[index]);
  }
  //console.log(input);
  console.log(result);
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//time = 15:35
