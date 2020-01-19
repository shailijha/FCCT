var PrimesBelowHundred = [];
primesBelowHundred();
var smallest_lcm = 1;

function smallestCommons(arr) {
  var prime_factor_map = new Map();
  var low_limit = 0;
  var high_limit = 0;

  if (arr[0] < arr[1]) {
    low_limit = arr[0];
    high_limit = arr[1];
  } else {
    low_limit = arr[1];
    high_limit = arr[0];
  }
  for (let num = low_limit; num <= high_limit; num++) {
    if (isPrime(num)) smallest_lcm *= num;
    else {
      let num_prime_factors = primeFactorization(num);
      prime_factor_map.set(num, num_prime_factors);
    }
  }
  console.log('smallest lcm with prime numbers:', smallest_lcm);

  if (prime_factor_map.size != 0)
    prime_factor_map.forEach(findLeastCommonMultiple);

  console.log(prime_factor_map);
  console.log('final lcm', smallest_lcm);
}

function findLeastCommonMultiple(value, key) {
  console.log('value', value);
  console.log('key', key);
  if (smallest_lcm % key != 0) {
    let temp_factors = value;
    let index = 0;

    while (smallest_lcm % key != 0) {
      if (
        (smallest_lcm % temp_factors[index] != 0 ||
          smallest_lcm % temp_factors[index] == 0) &&
        smallest_lcm % key != 0
      )
        smallest_lcm *= temp_factors[index];
      index++;
      console.log('smallest lcm in while loop', smallest_lcm);
    }
  }
}

function primeFactorization(num) {
  let prime_factors = [];
  var temp_factor = num;
  while (!isPrime(temp_factor)) {
    for (let index = 0; index < PrimesBelowHundred.length; index++) {
      if (temp_factor % PrimesBelowHundred[index] == 0) {
        prime_factors.push(PrimesBelowHundred[index]);
        temp_factor = temp_factor / PrimesBelowHundred[index];
      } else continue;
    }
  }
  if (temp_factor != 1) prime_factors.push(temp_factor);
  return prime_factors;
}

function primesBelowHundred() {
  for (let num = 2; num <= 100; num++) {
    if (isPrime(num)) PrimesBelowHundred.push(num);
  }
}

function isPrime(num) {
  let sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

smallestCommons([23, 18]);
