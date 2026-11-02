const produk = [
  { nama: "Biosolar B35 (Liter)", kategori: "Subsidi", harga: 6800, stok: 50000 },
  { nama: "Solar Industri HSD Non-Subsidi (Liter)", kategori: "Non-Subsidi", harga: 14500, stok: 25000 },
  { nama: "Marine Fuel Oil / MFO (Liter)", kategori: "Non-Subsidi", harga: 11200, stok: 10000 },
];

const nilai = produk
  .filter((x) => x.kategori === "Non-Subsidi")
  .map((x) => x.harga * x.stok)
  .reduce((total, n) => total + n, 0);
console.log(nilai);