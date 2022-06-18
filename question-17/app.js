// bubble sort optimization
// i/p - [8,1,2,3,4,5,6,7]
// apart from first element the entire array is sorted to avoid unecessary iteration we will use flag to check if element has swapped or not
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let isSwapped;

    // decide how many times iterate
    for (let j = 0; j < i - 1; j++) {
      // for comparing elements
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return arr;
}

const res = bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
console.log(res);
