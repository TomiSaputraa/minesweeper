import { kali, tambah } from "./math";

describe("Test matematika math", () => {
  it("Check menambah", () => {
    expect(tambah(2, 1)).toBe(3);
  });

  it("Check perkalian", () => {
    expect(kali(2, 1)).toBe(2);
  });
});
