"use strict";

// Typescript basic : type data
var hello = "dsad";
var a = false;
var b = 123;

// Type data generic :
var c;

// type : Dalam TypeScript, type adalah cara untuk menentukan struktur dan bentuk data.

// kekurangan type tidak ada extends

// interface : Interface adalah fitur TypeScript yang memungkinkan Anda menentukan struktur, properti, dan metode objek.

// Type data generic : Generik di TypeScript memungkinkan penulisan kode yang dapat bekerja dengan berbagai tipe data sekaligus menjaga keamanan tipe. Generik memudahkan penulisan kode yang dapat digunakan kembali.

// interface dengan extends
// interface UserWithPermission extends BasicUser {
//   permission: string[]; // contoh tipe objek string array
// }

var user = {
  // contoh penggunaan type untuk data objek
  name: "Tomi",
  age: 23,
  married: false
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
  permission: ["admin", "manager"]
};
console.log(user2);
var user3 = {
  name: "anto",
  age: 22,
  married: true
};

// function

var mul = function mul(a, b) {
  return a * b;
};

// contoh function tanpa type
var add = function add(a, b) {
  return a + b;
};

// Union Type

// Extends type

var userFull = {
  name: "antip",
  age: 21,
  married: false,
  account: 12,
  permission: ["admin", "user", "manager"]
};
console.log(userFull);

//=> Unknown, never and Tuple
/* 
unknown Digunakan sebagai alternatif yang lebih baik dari any. Ketika sebuah nilai dideklarasikan menggunakan unknown, TypeScript tidak mengetahui tipenya, yang berarti Anda tidak dapat menggunakan salah satu metode yang tersedia hingga Anda secara eksplisit "mempersempit" tipenya ke sesuatu yang spesifik. 
*/

// function dengan tipe return void
var logFunction = function logFunction(data) {
  // untuk tipe data unknown tipe data child nya juga harus unknown tidak bisa tipe data primitif
  var data2 = data;
  console.log(data);
  console.log(data2);
  throw new Error("Bad");

  // return unknown; // tidak bisa
  // return string; // tidak bisa
  // return undefined; //tipe function void hanya bisa return undefined
};

// function dengan tipe return never
/* 
never Digunakan ketika Anda kehabisan tipe data dan tidak memiliki nilai apa pun. Never adalah tipe yang paling mustahil, karena mewakili nilai yang tidak pernah muncul. 
*/
var logFunction2 = function logFunction2(data) {
  var data2 = data;
  // untuk tipe data unknown tipe data child nya juga harus unknown tidak bisa tipe data primitif
  console.log(data);
  console.log(data2);
  throw new Error("Bad");

  // return unknown; // tidak bisa
  // return string; // tidak bisa
  // return undefined; //tipe function void hanya bisa return undefined
};

// Tuple
/* 
Tuple dalam TypeScript adalah tipe data yang dapat digunakan seperti variabel lainnya. Tuple adalah array bertipe dengan panjang yang telah ditetapkan dan tipe untuk setiap indeksnya. Tuple dapat digunakan untuk menghubungkan beberapa data dengan sintaksis yang lebih sedikit daripada objek yang dikunci.
*/

var perm = ["admin", 12]; //dengan tuple kita hanya bisa assign 2 value

var userFull2 = {
  name: "antip",
  age: 21,
  married: false,
  account: 12,
  permission: ["admin", "user"]
};

// => UtilityTypes

var userFull3 = {
  name: "antip",
  age: 21,
  married: false,
  account: 12,
  permission: ["admin", "user"]
};
// userFull3.name = "sdsa"; // error : Cannot assign to 'name' because it is a read-only property.

// Seperti optional

// bisa digabung seperti ini

/* 
Record dalam TypeScript adalah tipe utilitas generik yang membuat tipe objek dengan kunci tertentu dari tipe tertentu dan nilai-nilai yang bertipe lain yang ditentukan. Tipe Record didefinisikan sebagai Record<K, T>, di mana K mewakili tipe kunci dan T mewakili tipe nilai.
Record<K extends keyof any, T>
*/
var DepsForPermiss = {
  admin: {
    depName: "security",
    level: 10
  },
  user: {
    depName: "sales",
    level: 5
  },
  manager: {
    depName: "sales",
    level: 10
  }
};

/* 
Omit adalah utilitas dalam TypeScript yang memungkinkan pengembang membuat tipe baru dengan mengecualikan properti tertentu dari tipe yang sudah ada.

type Omit<T, K extends keyof any>
*/
//contoh hilangkan key permission

/* 
Exclude adalah sebuah tipe utilitas di TypeScript yang memungkinkan Anda untuk mengecualikan anggota tertentu dari tipe gabungan yang telah ditetapkan.
*/

// //contoh hilangkan value 'admin'

/* 
ReturnType adalah tipe utilitas di TypeScript yang mengambil tipe pengembalian dari fungsi atau tipe yang dapat dipanggil. Tipe ini dapat berguna saat bekerja dengan basis kode yang kompleks atau saat mencoba menerapkan tipe pengembalian tertentu dalam TypeScript.
*/
function getFirst2(arr) {
  return arr[0];
}

// akan mereturn string array