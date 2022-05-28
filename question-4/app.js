// Count unique numbers in array
//      i   j
// [1,2,3,2,3,3,4,4,5,5,]
// output = 5

// conditions
// i = 0 j = 1
// array[i]!=array[j]
//   i++
// array[i]=array[j]

function countUniqueNumber(array) {
  if (array.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] != array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  }
}

const result = countUniqueNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
console.log(result);

// Time complexity o(n) - linear time
