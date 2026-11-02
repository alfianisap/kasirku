const produk = [
  { nama: "Biosolar B35 (Liter)", harga: 6800, stok: 50000 },
  { nama: "Solar Industri HSD Non-Subsidi (Liter)", harga: 14500, stok: 5 },
  { nama: "Marine Fuel Oil / MFO (Liter)", harga: 11200, stok: 8 },
  { nama: "High Speed Diesel Drum (200L)", harga: 2900000, stok: 150 },
  { nama: "Pelumas Mesin Industri / Diesel Oil (Drum 200L)", harga: 4500000, stok: 12 },
];

function saringStokMenipis(daftar) {
  return daftar.filter((p) => p.stok > 10);
}

const hasil = saringStokMenipis(produk);
if (hasil.length === 0) console.log("Tidak ditemukan");
else console.table(hasil);