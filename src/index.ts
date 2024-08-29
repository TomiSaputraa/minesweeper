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

//=> Unknown, never and Tuple
/* 
unknown Digunakan sebagai alternatif yang lebih baik dari any. Ketika sebuah nilai dideklarasikan menggunakan unknown, TypeScript tidak mengetahui tipenya, yang berarti Anda tidak dapat menggunakan salah satu metode yang tersedia hingga Anda secara eksplisit "mempersempit" tipenya ke sesuatu yang spesifik. 
*/

// function dengan tipe return void
const logFunction = (data: unknown): void => {
  // untuk tipe data unknown tipe data child nya juga harus unknown tidak bisa tipe data primitif
  const data2: unknown = data;
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
const logFunction2 = (data: unknown): never => {
  const data2: unknown = data;
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
type Permission2 = "admin" | "manager" | "user";

type TuplePermission2 = [Permission2, number];

const perm: TuplePermission2 = ["admin", 12]; //dengan tuple kita hanya bisa assign 2 value

type BasicUser2<A = boolean, P = TuplePermission2> = {
  name: string;
  age: number;
  married: A;
  permission?: P;
};

type AdvanceUser2 = {
  account: number;
};

type FullUser2<A = boolean, P = string[]> = BasicUser2<A, P> & AdvanceUser2;

const userFull2: FullUser2<boolean> = {
  name: "antip",
  age: 21,
  married: false,
  account: 12,
  permission: ["admin", "user"],
};

// => UtilityTypes

type BasicUser3<A = boolean, P = TuplePermission2> = {
  //readonly name: string;
  name: string;
  age: number;
  married: A;
  permission?: P;
};

type FullUser3<A = boolean, P = string[]> = BasicUser3<A, P> & AdvanceUser2;

const userFull3: FullUser3<boolean> = {
  name: "antip",
  age: 21,
  married: false,
  account: 12,
  permission: ["admin", "user"],
};
// userFull3.name = "sdsa"; // error : Cannot assign to 'name' because it is a read-only property.

type BasicUserReadonly = Readonly<BasicUser3>;
type BasicUserRequired = Required<BasicUser3>;
type BasicUserPartial = Partial<BasicUser3>; // Seperti optional

// bisa digabung seperti ini
type BasicUserReadonlyRequired = Readonly<Required<BasicUser3>>;
type BasicUserReadonlyPartial = Readonly<Partial<BasicUser3>>;

interface DepartemensForPermission {
  depName: string;
  level: number;
}

/* 
Record dalam TypeScript adalah tipe utilitas generik yang membuat tipe objek dengan kunci tertentu dari tipe tertentu dan nilai-nilai yang bertipe lain yang ditentukan. Tipe Record didefinisikan sebagai Record<K, T>, di mana K mewakili tipe kunci dan T mewakili tipe nilai.
Record<K extends keyof any, T>
*/
const DepsForPermiss: Record<Permission2, DepartemensForPermission> = {
  admin: {
    depName: "security",
    level: 10,
  },
  user: {
    depName: "sales",
    level: 5,
  },
  manager: {
    depName: "sales",
    level: 10,
  },
};

type BasicUser4<A = boolean, P = TuplePermission2> = {
  name: string;
  age: number;
  married: A;
  permission?: P;
};

/* 
Omit adalah utilitas dalam TypeScript yang memungkinkan pengembang membuat tipe baru dengan mengecualikan properti tertentu dari tipe yang sudah ada.

type Omit<T, K extends keyof any>
*/
type BasicUserWithoutPermission = Omit<BasicUser4, "permission">; //contoh hilangkan key permission

/* 
Exclude adalah sebuah tipe utilitas di TypeScript yang memungkinkan Anda untuk mengecualikan anggota tertentu dari tipe gabungan yang telah ditetapkan.
*/
type PermissionWithoutAdmin = Exclude<Permission2, "admin">; // //contoh hilangkan value 'admin'

/* 
ReturnType adalah tipe utilitas di TypeScript yang mengambil tipe pengembalian dari fungsi atau tipe yang dapat dipanggil. Tipe ini dapat berguna saat bekerja dengan basis kode yang kompleks atau saat mencoba menerapkan tipe pengembalian tertentu dalam TypeScript.
*/
function getFirst2<T>(arr: T[]): T {
  return arr[0];
}

type BasicFunction = () => string[];

type GetFirstReturnType = ReturnType<BasicFunction>; // akan mereturn string array
