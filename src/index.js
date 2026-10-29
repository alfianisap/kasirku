import { menjalankan_node } from "./menjalankan_node.js";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
// console.log(menjalankan_node());

const rl = readline.createInterface({ input, output });

const daftar = [
  {
    nama: "Teh Celup",
    harga: 5000,
  },
  {
    nama: "Coca-cola",
    harga: 8000,
  },
];

console.table(daftar);
let pilihan;

do {
  pilihan = await rl.question("Pilih menu : ");
  switch (pilihan) {
    case "1":
        //Tambah
        const nama = await rl.question("Nama Produk : ");
        if (nama === ""){
            console.log(`isi dulu nama Produk!`);
            break;
        }
        let harga = 0;
        while (true) {
        let hargaString = await rl.question("Harga Produk : ");
        harga = Number(hargaString);
        if (hargaString.trim() !== "" && !isNaN(harga) && harga > 0) {
            break;
}
            console.log(`Harga gagal terinput`);
        }
        daftar.push({nama,harga});
        console.log("Berhasil ditambahkan!");
      break;
    case "2": 
        //Lihat`
        console.table(daftar);
      break;
    case "3":
        //cari
        const cari = await rl.question("ketik yang dicari : ");
        let ketemu = 0;
        for (const d of daftar) {
        if (d.nama.toLowerCase().includes(cari.toLowerCase())) {
            console.table({
            nama: d.nama,
            harga: d.harga,
});
ketemu++;
  }
}
if (ketemu === 0) {
  console.log(`Data tidak ditemukan!`);
}
      break;
    case "4":
        //keluar
    console.log(`Dah Lah....`);
    break;

    default:
      console.log("Pilihan tidak tersedia");
      break;
  }

} while (pilihan !== "4");
rl.close();