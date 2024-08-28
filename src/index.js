// Typescript basic : type data
var hello = "dsad";
var a = false;
var b = 123;
// Type data generic :
var c;
// interface dengan extends
// interface UserWithPermission extends BasicUser {
//   permission: string[]; // contoh tipe objek string array
// }
var user = {
    // contoh penggunaan type untuk data objek
    name: "Tomi",
    age: 23,
    married: false,
};
var usersArray = [user, user, user];
// dari pada menulis seperti ini
/*
function firstUser(usersArray: BasicUser[]): BasicUser {
  return usersArray[0];
}
*/
// Tulis seperti ini menggunakan generic
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst(usersArray));
var user2 = {
    name: "Tomi",
    age: 23,
    married: false,
    permission: ["admin", "manager"],
};
console.log(user2);
var user3 = {
    name: "anto",
    age: 22,
    married: true,
};
var mul = function (a, b) { return a * b; };
// contoh function tanpa type
var add = function (a, b) { return a + b; };
var userFull = {
    name: "antip",
    age: 21,
    married: false,
    account: 12,
    permission: ["admin", "user", "manager"],
};
console.log(userFull);
