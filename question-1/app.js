// checking sum zero - question1
// [-5,-4,-3,-2,0,2,4,6,8]-> input
// Take out the first pair whose sum is 0

function getSumPairZero(array) {
  for (const num of array) {
    for (let i = 1; i < array.length; i++) {
      if (num + array[i] === 0) {
        return [num, array[i]];
      }
    }
  }
}
let result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

// Here the loop is nested so the time complexity is o(n^2)
