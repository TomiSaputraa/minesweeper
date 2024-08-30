// Mengimpor fungsi 'add' dari file 'mathfunction.ts'
import { add, mul } from "./mathFunction";

// Deskripsi dari suite pengujian untuk fungsi matematika
describe("Math function test", () => {
  // Pengujian untuk fungsi 'add'
  it("Check add function", () => {
    // Memastikan bahwa fungsi 'add' dengan input 1 dan 2 menghasilkan output 3
    expect(add(1, 2)).toBe(3);
  });

  it("Check multiply function", () => {
    expect(mul(2, 3)).toBe(6);
  });
});
