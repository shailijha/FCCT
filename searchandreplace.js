function myReplace(str, before, after) {
  var split_string = str.split(' ');
  let index = 0;
  var letters = /^[A-Z]+$/;

  while (index < str.length) {
    if (split_string[index] === before) {
      if (split_string[index].charAt(0).match(letters))
        after = after.charAt(0).toUpperCase() + after.substring(1);
      split_string[index] = after;
      break;
    }
    index++;
  }

  var result = split_string.join(' ');
  console.log(result);
  return result;
}

myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting');
//time: 9:16
