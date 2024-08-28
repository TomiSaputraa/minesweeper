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
