// javascript basic : type data
var hello = "dsad";
var a = false;
var b = 123;
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
var user2 = {
    name: "Tomi",
    age: 23,
    married: false,
    permission: ["manager", "admin"],
};
var user3 = {
    name: "anto",
    age: 22,
    married: true,
};
var mul = function (a, b) { return a * b; };
// contoh function tanpa type
var add = function (a, b) { return a + b; };
