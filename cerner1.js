function pascalTriangle(n) {
  console.log(n);
  let start = 1;
  let result = [];
  result.push(start);
  for (let index = 1; index < n - 1; index++) {
    if (result.length == 1) {
      let next_row = [start + 0, start + 0];
      result.push(next_row);
    } else if (result.length > 1) {
      let prev_row = result[result.length - 1];
      let new_row = [];
      new_row.push(1);
      for (let num = 0; num < prev_row.length; num++) {
        let temp = prev_row[num] + prev_row[num + 1];
        new_row.push(temp);
      }
      new_row.push(1);
      result.push(new_row);
    }
  }
  console.log(result);
}

pascalTriangle(3);
