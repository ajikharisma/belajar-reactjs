import { useState } from 'react';
import Minggu1 from './minggu-1/Minggu1';
import Minggu2 from './minggu-2/Minggu2'

// FUNCTION INDUK — sekarang cuma jadi menu navigasi antar minggu
export default function App() {
  const [halaman, setHalaman] = useState("home");

  // Jika state halaman adalah "minggu1", tampilkan semua materi & project minggu 1
  if (halaman === "minggu1") {
    return <Minggu1 kembaliKeHome={() => setHalaman("home")} />;
  }

  // Jika state halaman adalah "minggu2", tampilkan semua materi minggu 2
  if (halaman === "minggu2") {
    return <Minggu2 kembaliKeHome={() => setHalaman("home")} />;
  }

  // Halaman utama — daftar menu tiap minggu
  return (
    <div style={{ 
      padding: "20px", 
      display: "flex",
      flexDirection: "column",
      alignItems: "center",       // Mengetengahkan judul & grup tombol secara horizontal (kiri-kanan)
      justifyContent: "center",    // Mengetengahkan secara vertikal (atas-bawah)
      minHeight: "80vh",          // Memberikan ruang tinggi agar efek tengahnya kelihatan
      fontFamily: "sans-serif"
      }}>
      <h1>Progress Belajar React — Aji</h1>

      {/* elemen pembungkus dengan flexbox vertikal */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
        maxWidth: "200px",        // Membatasi lebar tombol kamu
      }}>
        <button
          onClick={() => setHalaman("minggu1")}
          style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginBottom: "20px", marginTop: "20px" }}
        >
          📘 Buka Minggu 1
        </button>
        {/* Nanti tambah tombol Minggu 2, Minggu 3, dst di sini */}
        
        <button
          onClick={() => setHalaman("minggu2")}
          style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginBottom: "20px" }}
        >
          📘 Buka Minggu 2
        </button>
      </div>
    </div>
  );
}