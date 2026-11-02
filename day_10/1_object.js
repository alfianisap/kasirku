function buatProduk({ nama, harga, stok = 0, kategori = "Bahan Bakar & Industri" } = {}) {
  return { nama, harga, stok, kategori };
}

const a = buatProduk({ nama: "Biosolar B35 (Liter)", harga: 6800, stok: 50000, kategori: "Subsidi" });
const b = buatProduk({ harga: 14500, nama: "Solar Industri HSD Non-Subsidi (Liter)", stok: 25000, kategori: "Non-Subsidi" });

console.log(a);
console.log(b);