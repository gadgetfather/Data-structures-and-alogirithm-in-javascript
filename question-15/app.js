// linear search

const users = [
  { username: "jack", email: "jack@gmail.com" },
  { username: "oggy", email: "oggy@gmail.com" },
  { username: "tom", email: "tom@gmail.com" },
];

function isUser(arr, user) {
  for (let i of arr) {
    if (i["username"] === user) {
      return true;
    }
  }
  return false;
}
const result = isUser(users, "jack");
console.log(result);
