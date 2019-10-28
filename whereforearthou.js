function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var collection_string;
  // Only change code below this line
  var collection_entries = Object.entries(collection);
  var source_entries = Object.entries(source);

  for (var property in collection) {
    collection_string = property + collection[property];
  }
  // Only change code above this line
  //console.log(collection_string);
  //return arr;
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
);
//time : 8:27 + 9:51
