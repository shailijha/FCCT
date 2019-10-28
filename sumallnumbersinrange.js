//time taken = 02:30
function sumAll(arr) {
  let limit1 = arr[0];
  let limit2 = arr[1];

  let sum = 0;

  if (limit1 < limit2) {
    let temp = limit1;
    while (temp <= limit2) {
      sum += temp;
      temp += 1;
    }
  } else {
    let temp = limit1;
    while (temp >= limit2) {
      sum += temp;
      temp -= 1;
    }
  }

  return sum;
}

sumAll([1, 4]);
