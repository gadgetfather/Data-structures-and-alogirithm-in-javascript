//helper recursive function
//[1,2,3,4,5,6,7,8,9,10]
//[1,3,5,7,9]=> output
// My code
// let newArr = [];
// function filterArray(array) {
//   for (let i of array) {
//     if (i % 2 !== 0) {
//       newArr.push(i);
//     }
//   }
// }
// function checkFiltered(array) {
//   for (let i of array) {
//     if (i % 2 === 0) {
//       return false;
//     }
//     return true;
//   }
// }
// function filterOdd(array) {
//   if (checkFiltered(array)) {
//     return;
//   }
//   for (let i of array) {
//     if (i % 2 == 0) {
//       filterArray(array);
//     }
//   }
// }

// const result = filterOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(newArr);
let result = [];
function findOdd(array) {
  function helperRecursive(inputArr) {
    if (inputArr.length === 0) {
      return;
    }
    if (inputArr[0] % 2 !== 0) {
      console.log(result);
      result.push(inputArr[0]);
    }
    helperRecursive(inputArr.slice(1));
  }
  helperRecursive(array);
}

findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);
