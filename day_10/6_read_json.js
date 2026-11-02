import { readFile, writeFile, mkdir } from "node:fs/promises";
const produk = [
  { nama: "Biosolar B35 (Liter)", harga: 6800, stok: 50000 },
  { nama: "Solar Industri HSD Non-Subsidi (Liter)", harga: 14500, stok: 25000 },
  { nama: "Marine Fuel Oil / MFO (Liter)", harga: 11200, stok: 10000 },
  { nama: "High Speed Diesel Drum (200L)", harga: 2900000, stok: 150 },
  { nama: "Pelumas Mesin Industri / Diesel Oil (Drum 200L)", harga: 4500000, stok: 40 },
];

async function simpan(data) {
  await mkdir("data", { recursive: true });
  await writeFile("data/produk.json", JSON.stringify(data, null, 2));
}

await simpan(produk);


async function muat() {
  try {
    return JSON.parse(await readFile("data/produk.json", "utf8"));
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}


const dataFile = await muat();
console.log("Jumlah data dari file:", dataFile.length);