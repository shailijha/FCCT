function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var letters = /^[A-Za-z-]+$/;
  var result = '';

  for (let index = 0; index < str.length; index++) {
    if (str.charAt(index) !== str.charAt(index).toLowerCase()) {
      if (index > 0) result += '-';
      result += str.charAt(index).toLowerCase();
    } else if (!str.charAt(index).match(letters)) {
      continue;
    } else {
      if (str.charAt(index - 1) == ' ') result += '-';
      result += str.charAt(index);
    }
  }
  console.log(result);
  return result;
}

console.log(spinalCase('Teletubbies say Eh-oh'));
//time: 24:41
