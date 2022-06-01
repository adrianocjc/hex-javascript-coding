  function countPrimeNumbers() {
    let primes = 0
  for (let counter = 2; counter <= 100; counter++)
  {
      if(counter % 2 == 0 || counter % 3 == 0 || counter % 5 == 0 || counter % 7 == 0)isPrime=0; 
      else {
          primes++;
      }
  }
}

let t0 = performance.now();
countPrimeNumbers();
let t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1-t0} milliseconds.`);
