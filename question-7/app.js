// Determine whether input is prime or not.
// Try dividing number by all smaller numbers and retur true if its divisible by the number and 1
// Solution:1

// function isPrime(input) {
//   for (let i = input - 1; i >= 2; i--) {
//     if (input % i === 0) {
//       console.log("not prime");
//       return;
//     }
//   }
//   console.log("isPrime");
// }

// isPrime(12);

// Solution:2
// IMP :  Every number thats not a prime has a product that consists of two factors a and b that are both neither 1 nor the other number itself
// 9 is not prime so it has factors 3*3

function isPrimeNew(m) {
  for (let i = 2; i <= Math.sqrt(m); i++) {
    if (m % i === 0) {
      console.log("not prime");
      return;
    }
    console.log("isPrime");
  }
}

isPrimeNew(7);
