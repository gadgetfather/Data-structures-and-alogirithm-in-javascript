// checking sum zero - question1
// [-5,-4,-3,-2,0,2,4,6,8]-> input
// Take out the first pair whose sum is 0
// Improved the solution (sorted array is needed)

// approach - take left number and compare with it right most number if sum is not equal to 0 but sum is greater than zero then do right--(shift to right) and if sum is less than zero then do left--(shift to left)

function getSumPairZero(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum < 0) {
      left++;
    } else if (sum > 0) {
      right--;
    }
  }
}

const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);

console.log(result);

// If sum is zero then right pointer will start from last position instead of resetting
