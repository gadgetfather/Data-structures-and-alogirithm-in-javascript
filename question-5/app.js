// [1,2,3,4,5,6,7,8] => total elements 8
// Count largest sum of consecutive digits

// conditions
// array length greater than 0
// loop condition->total elements - number of group + 1

function getLargestSum(array, num) {
  if (array.length < 0) {
    return "array is empty";
  }
  let max = 0; // for final result
  for (let i = 0; i < array.length - num + 1; i++) {
    let temp = 0; // temp result to compare with final result
    for (let j = 0; j < num; j++) {
      temp += array[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

const result = getLargestSum([1, 2, 3, 4, 5, 6, 7, 8], 4);
console.log(result);
