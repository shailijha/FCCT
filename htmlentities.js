function convertHTML(str) {
  // &colon;&rpar;
  var html_entity_map = new Map();
  html_entity_map.set('&', '&amp;');
  html_entity_map.set('<', '&lt;');
  html_entity_map.set('>', '&gt;');
  html_entity_map.set('"', '&quot;');
  html_entity_map.set("'", '&apos;');

  var result = '';
  for (let index = 0; index < str.length; index++) {
    if (html_entity_map.get(str[index]) != undefined)
      result += html_entity_map.get(str[index]);
    else result += str[index];
  }
  console.log(result);
  //return str;
}

convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
