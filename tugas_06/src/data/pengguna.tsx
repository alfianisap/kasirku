export type Pengguna = {
  nama: string;
  email: string;
  password: string;
};

export const penggunaAwal: Pengguna[] = [
  {
    nama: "Admin PT Minyak Solar",
    email: "admin@ptminyaksolar.com",
    password: "SolarJaya123",
  },
  {
    nama: "Alfiani (Logistik)",
    email: "Alfiani.logistik@ptminyaksolar.com",
    password: "Alfiani123",
  },
];