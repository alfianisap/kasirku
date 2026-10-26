const daftarproduk = [{
    nama: "Minyak goreng",
    harga: 25000,
    stock: 10
},{
    nama: "Beras",
    harga: 12000,
    stock: 20
},{
    nama: "Gula",
    harga: 15000,
    stock: 15
}];

console.log(daftarproduk);
// if : menghitung discount
// const totalBelanja = 120000;
function menghitungdiskon(totalBelanja) {
let diskon = 0; 
if(totalBelanja > 100000){
    diskon = totalBelanja * 0.10;
} else if(totalBelanja > 50000) {
    diskon = totalBelanja * 0.05;
} else {
    diskon = 0;
}
return diskon;
}
console.log(`Harga Beli 130.000 dapat diskon : ${menghitungdiskon(13000)}`);
console.log(`Harga Beli 75.000 dapat diskon : ${menghitungdiskon(75000)}`)
function metodebayar (metode){
let biayaadmin = 0;
switch (metodebayar) {
  case "tunai":
    biayaadmin= 0;
    break;
  case "transfer":
    biayaadmin = total;
    break;
  case "qris":
    biayaadmin = 2500;
    break;
}
return biayaadmin;
}

// switch : nyari tau, dapat biaya admin atau tidak dengan mengetahui metode pembayaran
console.log(`biayaadmin ${metodebayar("tunai")} dengan metode bayar adalah cash`);
console.log(`biayaadmin ${metodebayar("transfer")} dengan metode bayar adalah transfer`);

// for..off: hitung satu total 
let totalHarga = 0;
for(const produk of daftarproduk){
totalHarga += produk.harga * produk.stock;
}
console.log(totalHarga);