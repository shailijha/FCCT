function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var result = '';
  var consonants = '';
  for (let index = 0; index < str.length; index++) {
    if (vowels.includes(str.charAt(0))) result = str + 'way';
    else if (!vowels.includes(str.charAt(index)))
      consonants += str.charAt(index);
    else if (vowels.includes(str.charAt(index))) {
      //console.log(consonants);
      result = str.substring(index) + consonants + 'ay';
      break;
    }
  }
  if (result == '' && consonants.length > 0) result = consonants + 'ay';
  console.log(result);
  return result;
}

translatePigLatin('rhythm');
//time: 14:05
