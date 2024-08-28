## Section 1 : Setup

### project init & install typescipt

1. init

   Cara init project folder bisa menggunakan npm atau yarn contoh:
   `yarn init` atau `npm init`

2. install typescript

   Cara install typescript adalah sebagai berikut :
   `yarn add -D typescript` atau `npm install --save-dev typescipt`

   lalu init typescript :
   `npx tsc`

3. Eslint dan prettier

   ESLint menganalisis kode Anda secara statis untuk menemukan masalah dengan cepat. ESLint sudah terpasang di sebagian besar editor teks dan Anda dapat menjalankan ESLint sebagai bagian dari alur integrasi berkelanjutan Anda.

   cara setup bisa menggunakan : `yarn create @eslint/config` atau `npm init @eslint/config@latest`

   maka eslint akan meminta beberapa settingan setup dan install depedency

   Prettier digunakan sebagai code formatting

   cara install `yarn add --dev --exact prettier`

## Section 2: Dasar-dasar TypeScript

### Tipe Dasar

Tipe data dasar typescript bisa `string` untuk teks, `number` untuk angka, dan `boolean` untuk true atau false

```ts
var hello: string = "dsad";
let a: boolean = false;
let b: number = 123;
```

### Type

- **Type**: Dalam TypeScript, type adalah cara untuk menentukan struktur dan bentuk data.

```ts
type User = {
  name: string;
  age: number;
  married: boolean;
};
```

- **Kekurangan**: Type tidak di extends seperti interface.

### Interface

- **Interface**: Interface adalah fitur TypeScript yang memungkinkan Anda menentukan struktur, properti, dan metode objek.

```ts
interface BasicUser {
  name: string;
  age: number;
  married: boolean;
  permission?: string[]; // tanda ? tanda tidak require atau boleh tidak di isi
}
```

- **Extends Interface**:

  Contoh memperluas interface:

  ```ts
  interface UserWithPermission extends BasicUser {
    permission: string[]; // contoh tipe objek string array
  }
  ```

### **Tipe generic**

Generik di TypeScript memungkinkan penulisan kode yang dapat bekerja dengan berbagai tipe data sekaligus menjaga keamanan tipe. Generik memudahkan penulisan kode yang dapat digunakan kembali.

contoh :

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ["apple", "banana", "orange"];

// 👇 Note generic value disimpan kedalam <number> & <string>
const firstNumber = getFirstElement<number>(numberArray);
const firstString = getFirstElement<string>(stringArray);
```

### Extends types, multiple generic type, union types

- **Extends types**

Dalam TypeScript, kita dapat memperluas type menggunakan &, contoh:

```ts
type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvanceUser;
```

- **Union Type**

Union types memungkinkan sebuah variabel untuk memiliki lebih dari satu tipe. Ini sangat berguna ketika sebuah nilai bisa berupa beberapa tipe yang berbeda.

  ```ts
  // Union Type
  type Permission = "admin" | "user" | "manager";

  // atau digunakan dalam tipe data objek
  ```


- **Multiple Generic Types**

TypeScript mendukung penggunaan beberapa tipe generik dalam satu fungsi atau kelas. Ini memungkinkan kita untuk membuat kode yang lebih fleksibel dan dapat digunakan kembali.

```ts
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
```