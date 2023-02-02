 //Self-memoizing function
function isPrime(number) {
  if (!isPrime.answers) {
    isPrime.answers = {}; //Create the 'cache' in which the function will save the answers to the computations it performs
  }

  if (isPrime.answers[number] !== undefined) { //Check for cached numbers
    return isPrime.answers[number];
  }

  let prime = number !== 1;

  for (let i = 2; i < number; i++) {
    if (number % 2 === 0) {
      prime = false;
      break;
    }
  }
  return isPrime.answers[number] = prime; //Store the computed number
}

isPrime(5);
isPrime(5);
console.log(isPrime.answers[5]);
isPrime(11);
isPrime(2);

console.log(isPrime.answers);



