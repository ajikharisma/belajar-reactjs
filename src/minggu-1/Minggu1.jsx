import { useState } from 'react';
import TodoList from './TodoList';

export default function Minggu1({ kembaliKeHome }) {
  const [halaman, setHalaman] = useState("materi");

  if (halaman === "todo") {
    return <TodoList kembaliKeMateri={() => setHalaman("materi")} />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={kembaliKeHome}
        style={{ padding: "8px 16px", marginBottom: "20px", cursor: "pointer" }}
      >
        ← Kembali ke Home
      </button>

      <button
        onClick={() => setHalaman("todo")}
        style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginBottom: "20px", marginLeft: "10px" }}
      >
        🚀 Buka Projek Latihan: Todo List
      </button>

      <h1>Halo Dunia! Saya Siap Belajar React.</h1>
      <WelcomeCard />
      <Tombol warna="red" teks="Hapus!" />
      <Tombol warna="green" teks="Simpan!" />
      <Counter />
      <Form />
      <DaftarSayur />
      <Notifikasi adaPesanBaru={true} namaUser="Aji" />
    </div>
  );
}

// 1. Component & JSX
function WelcomeCard() {
  const username = "Aji";
  return (
    <>
      <h1>Halo, {username}!</h1>
      <p>Selamat Belajar React, semoga lancar-lancar Aamiin.</p>
    </>
  );
}

// 2. Props (Properties)
function Tombol(props) {
  return <button style={{ backgroundColor: props.warna }}>{props.teks}</button>;
}

// 3. useState
function Counter() {
  const [angka, setAngka] = useState(0);
  return (
    <div>
      <p>Kamu sudah mengklik sebanyak {angka} kali.</p>
      <button onClick={() => setAngka(angka + 1)}>Klik Aku!</button>
    </div>
  );
}

// 4. Event Handling
function Form() {
  const handleKlik = () => {
    alert("Tombol Sudah Diklik!");
  };
  const handleKetik = (event) => {
    console.log("Kamu sedang mengetik: ", event.target.value);
  };
  return (
    <div>
      <button onClick={handleKlik}>Klik Saya!</button>
      <input type="text" onChange={handleKetik} placeholder="Ketik sesuatu..." />
    </div>
  );
}

// 5. Rendering List (.map())
function DaftarSayur() {
  const sayurSayuran = ["Bayam", "kentang", "Wortel", "Buncis", "Kangkung"];
  return (
    <ul>
      {sayurSayuran.map((sayur, index) => (
        <li key={index}>{sayur}</li>
      ))}
    </ul>
  );
}

// 6. Conditional Rendering
function Notifikasi({ adaPesanBaru, namaUser }) {
  return (
    <div>
      <h2>{namaUser ? `Selamat Datang, ${namaUser}` : "Selamat Datang, Tamu"}</h2>
      {adaPesanBaru && <p>🔴 Kamu memiliki pesan baru!</p>}
    </div>
  );
}