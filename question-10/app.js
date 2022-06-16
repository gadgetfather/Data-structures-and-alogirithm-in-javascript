// Checking square in another array
// arr1= [1, 2, 3, 4]  arr2= [1,9,4,16] case 1
// arr1=[1,2,4,2] arr2=[1,4,4,16] case 2

// map1={1:1,2:2,4:1}
// map2={1:1,4:2,16:1}

let arr1 = [1, 2, 4, 2];
let arr2 = [1, 4, 4, 16];
function checkSquare(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let map1 = {};
  let map2 = {};

  for (i of arr1) {
    map1[i] = (map1[i] || 0) + 1;
  }

  for (i2 of arr2) {
    map2[i2] = (map2[i2] || 0) + 1;
  }

  for (let key in map1) {
    if (map1[key] !== map2[key * key]) {
      return false;
    }
    if (!map2[key * key]) {
      return false;
    }
  }
  return true;
}
const result = checkSquare(arr1, arr2);
console.log(result);
