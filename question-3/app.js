// string anagram
// hello -> llleo

// Conditions for anagram
// 1. same length for both strings
// 2. same letters with different arrangement

function checkAnagram(ogWord, checkWord) {
  let lengthOg = ogWord.length;
  let lengthCheckWord = checkWord.length;

  if (lengthOg != lengthCheckWord) {
    return false;
  }
  const counter = {};
  for (const letter of ogWord) {
    counter[letter] = (counter[letter] || 0) + 1;
  }
  for (const item of checkWord) {
    if (!counter[item]) {
      console.log(counter[item]);
      return false;
    }
    counter[item] -= 1;
  }
  return true;
}

const result = checkAnagram("hello", "llseo");
console.log(result);

// Time complexity is linear o(n)

// count occurrences of element using reduce
// let result = ogWord.split("").reduce(
//     (acc, curr) => {
//       return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
//     },

//     {}
//   );
