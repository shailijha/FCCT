function sumFibs(num) {
  var first_six_fib_num = [1, 1, 2, 3, 5, 8];
  var sum = 0;

  if (first_six_fib_num.indexOf(num) > -1) {
    let index = first_six_fib_num.indexOf(num);
    while (index >= 0) {
      if (first_six_fib_num[index] % 2 == 1) sum += first_six_fib_num[index];
      index--;
    }
  } else if (num < 8) {
    let index = 0;
    while (index < 6 && first_six_fib_num[index] < num) {
      if (first_six_fib_num[index] % 2 == 1) sum += first_six_fib_num[index];
      index++;
    }
  } else if (num > 8) {
    var num1 = 5;
    var num2 = 8;
    var next_fib_num = num1 + num2;
    if (num < next_fib_num) {
      let index = 5;
      while (index >= 0) {
        if (first_six_fib_num[index] % 2 == 1) sum += first_six_fib_num[index];
        index--;
      }
    } else {
      sum = 10;
      while (next_fib_num <= num) {
        if (next_fib_num % 2 == 1) sum += next_fib_num;
        num1 = num2;
        num2 = next_fib_num;
        next_fib_num = num1 + num2;
      }
    }
  }
  console.log(sum);

  //return num;
}

sumFibs(4);
