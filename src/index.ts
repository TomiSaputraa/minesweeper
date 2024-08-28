// Typescript basic : type data
var hello: string = "dsad";
let a: boolean = false;
let b: number = 123;

// type : Dalam TypeScript, type adalah cara untuk menentukan struktur dan bentuk data.
type User = {
  name: string;
  age: number;
  married: boolean;
};
// kekurangan type tidak ada extends

// interface : Interface adalah fitur TypeScript yang memungkinkan Anda menentukan struktur, properti, dan metode objek.
interface BasicUser {
  name: string;
  age: number;
  married: boolean;
  permission?: string[]; // tanda `?` tanda tidak require atau boleh tidak di isi
}

// interface dengan extends
// interface UserWithPermission extends BasicUser {
//   permission: string[]; // contoh tipe objek string array
// }

let user: BasicUser = {
  // contoh penggunaan type untuk data objek
  name: "Tomi",
  age: 23,
  married: false,
};

const user2: BasicUser = {
  name: "Tomi",
  age: 23,
  married: false,
  permission: ["manager", "admin"],
};

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
