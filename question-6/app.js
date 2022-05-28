// Return the nth element of the fibonacci sequence
// fibonacci sequence [1,1,2,3,5,8,13,...]
// next element is sum of previous two elements

// function to print the fibonacci sequence
// function getFibonacci() {
//   let array = [1, 1];
//   for (let i = 2; i < 10; i++) {
//     array.push(array[i - 1] + array[i - 2]);
//   }
//   console.log(array);
// }

// getFibonacci();
// --------
// Function to get nth element of the fibonacci sequence

function getNthElement(elementNumber) {
  let array = [1, 1];
  for (let i = 2; i < elementNumber; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  console.log(array[elementNumber - 1]);
}

getNthElement(4);
