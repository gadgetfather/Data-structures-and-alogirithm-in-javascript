// recursion : when function call itself
// otherwise it will be called infinite times
// if a function call itself then there must be a end point
let count = 1;
function demo(n) {
  if (count > n) {
    return;
  }
  console.log("hi" + count);
  count++;
  demo(n);
}

demo(5);
