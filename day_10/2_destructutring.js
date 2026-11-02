const produk = { nama: "Solar Industri HSD Non-Subsidi (Liter)", harga: 14500, stok: 25000 };
const { nama, harga: hargaSatuan, diskon = 0 } = produk;

const terlaris = ["Biosolar B35", "Solar Industri HSD", "Marine Fuel Oil"];
const [juara1, , juara3] = terlaris;
console.log(terlaris);

const baru = { ...produk, stok: 30000 };   // salinan, stok diubah
const baru2 = { ...produk, stok: 50000 };   // salinan, stok diubah
const tambah = [...terlaris, "High Speed Diesel Drum"];

console.log(produk);
console.log(terlaris);
console.log(baru);
console.log(baru2);
console.log(tambah);
