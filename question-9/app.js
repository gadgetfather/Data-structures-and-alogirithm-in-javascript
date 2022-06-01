// checking square in the another array
// arr1=[1,2,3,4] arr2=[1,9,4,16]

// steps
// 1. Get inside the first array
// 2. Get inside the second array
// 3. Make a flag variable to keep track of the element
// 4. make square of elements in first array and compare with each element in second array
// 5. if second array is at end and flag is false return false
// 6. return true

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 9, 4, 2];

function checkSquare(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let temp = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] * arr1[i] === arr2[j]) {
        temp = true;
      }
      if (j === arr2.length - 1) {
        if (!temp) {
          return false;
        }
      }
    }
  }
  return true;
}

const result = checkSquare(arr1, arr2);

console.log(result);
