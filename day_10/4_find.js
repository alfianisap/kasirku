const produk = [
  { nama: "Biosolar B35 (Liter)", harga: 6800, stok: 50000 },
  { nama: "Solar Industri HSD Non-Subsidi (Liter)", harga: 14500, stok: 25000 },
  { nama: "Marine Fuel Oil / MFO (Liter)", harga: 11200, stok: 10000 },
  { nama: "High Speed Diesel Drum (200L)", harga: 2900000, stok: 150 },
  { nama: "Sampel Uji Laboratorium", harga: 2000, stok: 15 },
];

function saringStokMenipis(daftar) {
  return daftar.find((p) => p.harga < 2500);
}

const hasil = saringStokMenipis(produk);
if (hasil.length === 0) console.log("Tidak ditemukan");
else console.table(hasil);