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

#### **Extends Interface**:

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

#### **Extends types**

Dalam TypeScript, kita dapat memperluas type menggunakan &, contoh:

```ts
type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvanceUser;
```

#### **Union Type**

Union types memungkinkan sebuah variabel untuk memiliki lebih dari satu tipe. Ini sangat berguna ketika sebuah nilai bisa berupa beberapa tipe yang berbeda.

  ```ts
  // Union Type
  type Permission = "admin" | "user" | "manager";

  // atau digunakan dalam tipe data objek
  ```


#### **Multiple Generic Types**

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

### Unknown, never and Tuple

#### **Unknown**
  
  unknown adalah tipe yang kurang lebih mirip dengan any, tetapi lebih aman. Tipe ini digunakan ketika tipe dari sebuah nilai tidak diketahui pada saat kompilasi. Anda tidak bisa melakukan operasi apa pun pada nilai unknown tanpa memeriksa atau menyaring tipe datanya terlebih dahulu.

  ```ts
  let someValue: unknown;

  someValue = "Hello, World!";
  console.log(someValue); // Bisa diakses, tapi dengan tipe unknown

  if (typeof someValue === "string") {
    // Hanya setelah pengecekan tipe, operasi string bisa dilakukan
    console.log(someValue.toUpperCase());
  }
  ```

  **Kegunaan**: Berguna ketika Anda menginginkan fleksibilitas tipe, tetapi tetap menginginkan keamanan dengan pengecekan tipe sebelum operasi tertentu dilakukan.

#### **Never**
  
  never adalah tipe yang digunakan untuk menyatakan bahwa suatu nilai tidak akan pernah terjadi. Biasanya digunakan dalam fungsi yang tidak pernah mengembalikan nilai (misalnya, fungsi yang selalu melempar error atau fungsi yang menjalankan loop tanpa akhir).

  ```ts
  function throwError(message: string): never {
  throw new Error(message);
  }

  function infiniteLoop(): never {
    while (true) {
      // Loop tanpa akhir
    }
  }
  ```

  **Kegunaan**: never digunakan untuk menunjukkan bahwa sebuah fungsi tidak akan pernah berhasil menyelesaikan eksekusi dengan nilai return yang valid. Ini membantu compiler dan developer lain dalam memahami alur program.

#### **Tuple**
  
  Tuple adalah tipe khusus di TypeScript yang memungkinkan Anda menentukan array dengan jumlah elemen tetap dan tipe elemen yang spesifik. Ini berguna ketika Anda tahu persis berapa banyak elemen yang harus ada dalam array dan apa tipe dari masing-masing elemen tersebut.

  ```ts
  let person: [string, number];

  person = ["John Doe", 30]; // Ini valid
  // person = [30, "John Doe"]; // Ini tidak valid karena urutan dan tipe tidak sesuai

  console.log(person[0]); // "John Doe"
  console.log(person[1]); // 30
  ```

  **Kegunaan**: Tuple digunakan ketika Anda memerlukan array dengan elemen yang memiliki tipe yang berbeda-beda, tetapi Anda tahu berapa banyak elemen yang harus ada dan apa tipenya.

### UtilityTypes

#### `Partial<T>`
  
Membuat semua properti dari tipe T menjadi opsional.

```ts
type Person = {
  name: string;
  age: number;
};

// Partial<Person> akan menjadi:
// {
//   name?: string;
//   age?: number;
// }

const partialPerson: Partial<Person> = {
  name: "John"
};
```

#### `Required<T>`
  
Membuat semua properti dari tipe T menjadi wajib.

```ts
type Person = {
  name?: string;
  age?: number;
};

// Required<Person> akan menjadi:
// {
//   name: string;
//   age: number;
// }

const requiredPerson: Required<Person> = {
  name: "John",
  age: 30
};
```

#### `Readonly<T>`
  
Membuat semua properti dari tipe T menjadi hanya-baca (immutable) atau readonly.

```ts
type Person = {
  name: string;
  age: number;
};

// Readonly<Person> akan menjadi:
// {
//   readonly name: string;
//   readonly age: number;
// }

const readonlyPerson: Readonly<Person> = {
  name: "John",
  age: 30
};

// readonlyPerson.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.
```

#### `Pick<T, K>`
  
Membuat tipe baru dari tipe T dengan memilih properti yang spesifik K.

```ts
type Person = {
  name: string;
  age: number;
  location: string;
};

// Pick<Person, 'name' | 'age'> akan menjadi:
// {
//   name: string;
//   age: number;
// }

const pickedPerson: Pick<Person, 'name' | 'age'> = {
  name: "John",
  age: 30
};
```

#### `Omit<T, K>`
  
Membuat tipe baru dari tipe T dengan menghilangkan properti tertentu K.

```ts
type Person = {
  name: string;
  age: number;
  location: string;
};

// Omit<Person, 'location'> akan menjadi:
// {
//   name: string;
//   age: number;
// }

const omittedPerson: Omit<Person, 'location'> = {
  name: "John",
  age: 30
};
```

#### `Record<K, T>`
  
Membuat tipe objek dengan kunci K dan nilai T.

```ts
type PageInfo = {
  title: string;
};

// Record<string, PageInfo> akan menjadi:
// {
//   [key: string]: PageInfo;
// }

const pageInfo: Record<string, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" }
};
```

#### `Exclude<T, U>`
  
Membuat tipe baru dari tipe T dengan mengecualikan tipe-tipe yang ada di U.

```ts
type T = string | number | boolean;

// Exclude<T, string> akan menjadi:
// number | boolean

type NonString = Exclude<T, string>;
```

#### `Extract<T, U>`
  
Membuat tipe baru dari tipe T dengan hanya memilih tipe-tipe yang juga ada di U.

```ts
type T = string | number | boolean;

// Extract<T, string | number> akan menjadi:
// string | number

type StringOrNumber = Extract<T, string | number>;
```

#### `NonNullable<T>`
  
Membuat tipe baru dari tipe T dengan menghilangkan null dan undefined.

```ts
type T = string | number | null | undefined;

// NonNullable<T> akan menjadi:
// string | number

type NonNull = NonNullable<T>;
```

#### `ReturnType<T>`
  
Mengambil tipe pengembalian (return type) dari fungsi T.

```ts
function getUser() {
  return { name: "John", age: 30 };
}

// ReturnType<typeof getUser> akan menjadi:
// { name: string; age: number; }

type UserType = ReturnType<typeof getUser>;
```

#### `InstanceType<T>`
  
Mengambil tipe instance dari konstruktor atau kelas T.

```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// InstanceType<typeof Person> akan menjadi:
// Person

type PersonInstance = InstanceType<typeof Person>;
```

#### `Parameters<T>`
  
Mengambil tipe parameter dari fungsi T.

```ts
function greet(name: string, age: number) {
  return `Hello, ${name}. You are ${age} years old.`;
}

// Parameters<typeof greet> akan menjadi:
// [string, number]

type GreetParameters = Parameters<typeof greet>;
```

## Section 3 : React Intro

### Setup babel dan React

TC39 adalah singkatan dari Technical Committee 39, yaitu komite yang bertanggung jawab untuk mengembangkan dan memelihara spesifikasi bahasa ECMAScript. ECMAScript adalah spesifikasi yang mendefinisikan cara kerja JavaScript.

#### Babel

Babel.js adalah toolchain atau kompiler JavaScript yang mengubah kode ECMAScript 2015+ menjadi versi JavaScript yang kompatibel dengan versi lama. Babel.js dapat digunakan untuk: Mengubah sintaksis, Menambahkan fitur polyfill yang hilang di lingkungan target, Mengubah kode sumber.

Setup babel untuk react :

```bash
yarn add --dev @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/preset-typescript
```

Buat file `babel.config.js` dengan settingan seperti ini : 

```js
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};
```

Jalankan command berikut untuk check apakah babel sudah berhasil di setup : 

```bash
npx babel src --out-dir lib --extensions .ts,.tsx
#npx babel <nama folder sumber> --out-dir <nama folder hasil> --extensions .ts,.tsx
```

#### React

Cara setup react :
```bash
yarn add react react-dom --save
```

Jika menggunakan typescipt tambahkan :

```bash
yarn add -D @types/react @types/react-dom
```

### Webpack

Webpack adalah alat yang berfungsi untuk menggabungkan file JavaScript menjadi satu atau lebih bundel. Webpack merupakan bundler modul sumber terbuka dan gratis yang dibuat terutama untuk JavaScript.

**Berikut adalah beberapa fungsi Webpack:** 
- Menggabungkan file JavaScript, font, gambar, dan CSS ke dalam satu file 
  
- Membantu memuat modul aplikasi dan dependensinya 

- Menangani berbagai definisi dan kompatibilitas browser 

- Memproses file seperti SASS dan LESS menjadi CSS 
  
- Mengubah JSX dan ECMAScript modern menjadi JavaScript yang ramah browser 
  
- Memelihara runtime yang berisi informasi yang diperlukan untuk menjalankan aplikasi 

**Setup Webpack**

Command install: 

```bash
yarn add -D webpack webpack-cli
```

Lalu buat file `webpack.config.js` dengan settingan seperti berikut : 
```js
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
```

Tambahkan script commad pada file `package.json`
```json
"scripts": {
    "build": "webpack --mode=production --node-env=production",
    "build:dev": "webpack --mode=development",
    "build:prod": "webpack --mode=production --node-env=production",
```

Penting: install `webpack loader`

Fungsi webpack loader adalah untuk memproses file terlebih dahulu, sehingga memungkinkan webpack untuk menggabungkan sumber daya statis selain JavaScript. Loader adalah fungsi JavaScript yang mengubah kode sumber modul yang diimpor.

Dok : https://webpack.js.org/loaders/#root

Install loader dengan command : 

```bash
yarn add -D babel-loader 
#untuk babel
yarn add -D css-loader 
#untuk css
```

**Dan install loader lainnya sesuai keperluan**

hasil akhir dari configurasi webpack akan seperti ini : 

```js
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, // Membersihkan folder dist sebelum build baru
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
};
```

