// console.log('2500 x 3 = ' + (2500 * 3));

const produkutama = {
    nama: "kopi",
    harga: 2500,
    stock: 10,
    tersedia: true

};

const daftarproduk = [
    // index 0
    produkutama, 
    // index 1
    {
        nama: "jus",
        harga: 42000,
        stock: 50,
        tersedia: true
    }, 
    // index 2
    {
        nama: "smoothies",
        harga: 2000,
        stock: 20,
        tersedia: true
    }


];

console.log(daftarproduk[1]);
console.log(Number("2500"));
console.log(Number("abc"));