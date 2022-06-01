// Divide and conquer - Binary Search
// Find the index of given no in sorted array 7
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] =>index 6 -> output
// Steps to algorithm
// 1. take min and max index of array
// 2. find the index of middle element
// 3. if middle element is less than searched number then change min to midIndex +1
// 4. if middle element is greater than searched number then change max to midIndex - 1
// 5 else return the middle element
function SearchAlgo(array, no) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    if (no > array[midIndex]) {
      min = midIndex + 1;
    } else if (no < array[midIndex]) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
}

const result = SearchAlgo(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  1
);
console.log(result);

// time complexity O(n)
