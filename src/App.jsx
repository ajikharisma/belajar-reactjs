import { useState } from 'react';
import Minggu1 from './minggu-1/Minggu1';

// FUNCTION INDUK — sekarang cuma jadi menu navigasi antar minggu
export default function App() {
  const [halaman, setHalaman] = useState("home");

  // Jika state halaman adalah "minggu1", tampilkan semua materi & project minggu 1
  if (halaman === "minggu1") {
    return <Minggu1 kembaliKeHome={() => setHalaman("home")} />;
  }

  // Halaman utama — daftar menu tiap minggu
  return (
    <div style={{ padding: "20px" }}>
      <h1>Progress Belajar React — Aji</h1>
      <button
        onClick={() => setHalaman("minggu1")}
        style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginBottom: "20px" }}
      >
        📘 Buka Minggu 1
      </button>
      {/* Nanti tambah tombol Minggu 2, Minggu 3, dst di sini */}
    </div>
  );
}