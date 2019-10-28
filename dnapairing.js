function pairElement(str) {
  var result = [];
  for (let index = 0; index < str.length; index++) {
    let temp = [];
    switch (str.charAt(index)) {
      case 'C':
        temp.push('C');
        temp.push('G');
        break;
      case 'G':
        temp.push('G');
        temp.push('C');
        break;
      case 'A':
        temp.push('A');
        temp.push('T');
        break;
      case 'T':
        temp.push('T');
        temp.push('A');
        break;
      default:
        console.log('Invalid input');
        break;
    }
    result.push(temp);
  }
  console.log(result);
  return result;
  //return str;
}

pairElement('GCG');
//time: 6:30
