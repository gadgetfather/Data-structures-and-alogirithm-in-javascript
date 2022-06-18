// bubble sort (sorting)
//A sorting algorithm where the largest values bubble up at the top
// time complexity o(n^2)
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    // decide how many times iterate
    for (let j = 0; j < i - 1; j++) {
      // for comparing elements
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const res = bubbleSort([5, 2, 4, 1, 3]);
console.log(res);
