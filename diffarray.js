function diffArray(arr1, arr2) {
  var resultArr = [];
  let sameArr = [];
  // Same, same; but different.
  // if(arr1.length < arr2.length) let length = arr1.length;
  // else let length = arr2.length;

  for (let index = 0; index < arr1.length; index++) {
    for (let idx = 0; idx < arr2.length; idx++)
      if (arr1[index] === arr2[idx]) {
        sameArr.push(arr1[index]);
        arr1[index] = null;
        arr2[idx] = null;
      }
  }

  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== null) resultArr.push(arr1[index]);
  }

  for (let idx = 0; idx < arr2.length; idx++) {
    if (arr2[idx] !== null) resultArr.push(arr2[idx]);
  }
  console.log(arr1);
  console.log(arr2);
  console.log(resultArr);
  return resultArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//time: 13:50
