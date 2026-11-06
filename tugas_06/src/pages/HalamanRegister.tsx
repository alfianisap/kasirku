import { useState } from "react";
import type { FormEvent } from "react";
import Toast from "../components/Toast";
import { useNavigate } from "react-router-dom";
import type { Pengguna } from "../data/pengguna";

type Props = {
  daftarPengguna: Pengguna[];
  onDaftar: (baru: Pengguna) => void;
};

type FormErrors = { 
    email?: string; 
    password?: string; 
    nama?: string; 
    noHp?: string;
    ulangi?: string;
    setuju?: string;
};
type InfoToast = { 
    teks: string; jenis: "sukses" | "gagal" } | null;

export default function HalamanRegister({ daftarPengguna, onDaftar }: Props) {

  const [nama, setNama] = useState("");
  const [noHP, setNohp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ulangiPassword, setUlangiPassword] = useState("");
  const [setuju, setSetuju] = useState(false);
  const [pesan, setPesan] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState<InfoToast | null>(null);
  const navigate = useNavigate();

  function tampilkanToast(teks: string, jenis: "sukses" | "gagal") {
    setToast({ teks, jenis });
    setTimeout(() => setToast(null), 3000);
  }

  function handleDaftar(e: FormEvent) {
    e.preventDefault();
    setPesan(`Mencoba mendaftar sebagai ${nama}`);
  }

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (noHP === "") errs.noHp = "No. HP wajib diisi";
    else if (!/^[0-9]{10,13}$/.test(noHP)) errs.noHp = "No. HP harus 10–13 angka";
    
    if (nama === "") errs.nama = "Nama wajib diisi";
    else if (nama.length < 4) errs.nama = "Nama minimal 4 karakter";
    else {
      const sudahAda = daftarPengguna.some(
        (p) => p.nama.toLowerCase() === nama.trim().toLowerCase()
      );
      if (sudahAda) {
        errs.nama = "Nama sudah terdaftar";
      }
    }

    if (email === "") errs.email = "Email wajib diisi";
    else if (!email.includes("@")) errs.email = "Format email salah";
    
    if (password === "") errs.password = "Password wajib diisi";
    else if (password.length < 8) errs.password = "Minimal 8 karakter";
    
    if (ulangiPassword === "") errs.ulangi = "Ulangi password wajib diisi";
    else if (ulangiPassword !== password) errs.ulangi = "Password tidak sama";
    
    if (!setuju) errs.setuju = "Wajib centang setuju";

    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    // Hentikan proses jika ada error
    if (Object.keys(validationErrors).length > 0) return;
    console.log("Validation passed! Siap kirim data ke API.");
    
    // Simulasi pendaftaran berhasil
    tampilkanToast("Berhasil mendaftar akun PT Minyak Solar. Selamat datang!", "sukses");
    onDaftar({ nama, email, password });
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Buat Akun Staf / Mitra</h2>
      <p>Kelola distribusi bahan bakar industri dan pemesanan solar dengan mudah dan aman</p>
      
      <label htmlFor="nama" style={{ marginRight: "20px" }}>
        Nama Lengkap
      </label>
      <input
        className={errors.nama ? "error" : "input"}
        id="nama"
        style={{}}
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      {errors.nama && <small className="error-message">{errors.nama}</small>}
      
      <label htmlFor="noHp" style={{ marginRight: "20px" }}>
        No. HP
      </label>
      <input
        className={errors.noHp ? "error" : "input"}
        id="noHp"
        style={{}}
        value={noHP}
        onChange={(e) => setNohp(e.target.value)}
      />
      {errors.noHp && <small className="error-message">{errors.noHp}</small>}
      
      <label htmlFor="email" style={{ marginRight: "20px" }}>
        Alamat Email
      </label>
      <input
        className={errors.email ? "error" : "input"}
        id="email"
        style={{}}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <small className="error-message">{errors.email}</small>}
      
      <label htmlFor="password">Kata Sandi</label>
      <div className="password-row">
        <input
          id="password"
          className={errors.password ? "error" : "input"}
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Sembunyikan" : "Lihat"}
        </button>
      </div>
      {errors.password && (
        <small className="error-message">{errors.password}</small>
      )}
      
      <label htmlFor="ulangiPassword">Ulangi Kata Sandi</label>
      <div className="password-row">
        <input
          id="ulangiPassword"
          className={errors.ulangi ? "error" : "input"}
          type={showPassword ? "text" : "password"}
          value={ulangiPassword}
          onChange={(e) => setUlangiPassword(e.target.value)}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Sembunyikan" : "Lihat"}
        </button>
      </div>
      {errors.ulangi && (
        <small className="error-message">{errors.ulangi}</small>
      )}
      
      <label>
        <input 
          type="checkbox" 
          checked={setuju}
          onChange={(e) => setSetuju(e.target.checked)} 
        />
        {" "}Saya setuju dengan syarat & ketentuan PT Minyak Solar
      </label>
      {errors.setuju && <small className="error-message">{errors.setuju}</small>}

      <button type="submit">Daftar Sekarang</button>
      {pesan && <p>{pesan}</p>}

      {toast && <Toast teks={toast.teks} jenis={toast.jenis} />}
    </form>
  );
}