function sumPrimes(num) {
  var sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      console.log(i);
      sum += i;
    }
  }
  console.log(sum);
  //return sum;
}

function isPrime(num) {
  let sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

sumPrimes(10);
