function uniteUnique(arr) {
  var result = [];
  let args_length = 0;
  while (args_length < arguments.length) {
    let temp_arg = arguments[args_length];
    let index = 0;
    while (index < temp_arg.length) {
      if (!result.includes(temp_arg[index])) result.push(temp_arg[index]);
      index++;
    }
    args_length++;
  }

  //console.log(result);
  return result;
}

uniteUnique([1, 2, 3], [5, 2, 1]);
