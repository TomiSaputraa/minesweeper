// Typescript basic : type data
var hello: string = "dsad";
let a: boolean = false;
let b: number = 123;

// Type data generic :
let c: Array<string>;

// type : Dalam TypeScript, type adalah cara untuk menentukan struktur dan bentuk data.
type User = {
  name: string;
  age: number;
  married: boolean;
};
// kekurangan type tidak ada extends

// interface : Interface adalah fitur TypeScript yang memungkinkan Anda menentukan struktur, properti, dan metode objek.

// Type data generic : Generik di TypeScript memungkinkan penulisan kode yang dapat bekerja dengan berbagai tipe data sekaligus menjaga keamanan tipe. Generik memudahkan penulisan kode yang dapat digunakan kembali.
interface BasicUser<A = boolean, P = string[]> {
  //contoh generic dengan tipe data default
  name: string;
  age: number;
  married: A;
  permission?: P[]; // tanda `?` tanda tidak require atau boleh tidak di isi
}

// interface dengan extends
// interface UserWithPermission extends BasicUser {
//   permission: string[]; // contoh tipe objek string array
// }

let user: BasicUser<boolean> = {
  // contoh penggunaan type untuk data objek
  name: "Tomi",
  age: 23,
  married: false,
};

let usersArray: BasicUser[] = [user, user, user];

// dari pada menulis seperti ini
/* 
function firstUser(usersArray: BasicUser[]): BasicUser {
  return usersArray[0];
}
*/

// Tulis seperti ini menggunakan generic
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirst<BasicUser>(usersArray));

const user2: BasicUser<boolean, Permission> = {
  name: "Tomi",
  age: 23,
  married: false,
  permission: ["admin", "manager"],
};
console.log(user2);

const user3: User = {
  name: "anto",
  age: 22,
  married: true,
};

// function
type MathFunc = (a: number, b: number) => number;
const mul: MathFunc = (a, b) => a * b;

// contoh function tanpa type
const add = (a: number, b: number): number => a + b;

// Union Type
type Permission = "admin" | "user" | "manager";

// Extends type
type AdvanceUser = {
  account: number;
};

type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvanceUser;

const userFull: FullUser<boolean, Permission> = {
  name: "antip",
  age: 21,
  married: false,
  account: 12,
  permission: ["admin", "user", "manager"],
};

console.log(userFull);
