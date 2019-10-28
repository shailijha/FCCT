function fearNotLetter(str) {
  var alphabet_string = 'abcdefghijklmnopqrstuvwxyz';
  var result = [];
  var str_split = str.split('');
  var start_index = alphabet_string.indexOf(str_split[0]);
  var last_index = alphabet_string.indexOf(str_split[str_split.length - 1]);
  var substring = alphabet_string
    .substring(start_index, last_index + 1)
    .split('');
  console.log(str_split);
  console.log(substring);
  let i = 0;
  let j = 0;
  while (i < substring.length && j < str_split.length) {
    if (substring[i] === str_split[j]) {
      substring[i] = null;
      str_split[j] = null;
      i++;
      j++;
    } else {
      result.push(substring[i]);
      i++;
    }
  }

  console.log(result);
  return result.join('');
}

console.log(fearNotLetter('abce'));
