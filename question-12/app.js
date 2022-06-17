// advance recursion
// Sorting using recursive function
// [2,3,1,4]-> input
let arr = [2, 3, 1, 4, 7, 8, 25, 6];
let i = 0;
let j = 1;
function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
function sortArray(array) {
  if (isSorted(array)) {
    return array;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    sortArray(array);
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    sortArray(array);
  }
  return array;
}

const result = sortArray(arr);
console.log(result);
