import { useState, useEffect } from 'react';
import TugasMinggu2 from './tugas-minggu-2';

export default function Minggu2({ kembaliKeHome }) {
  const [subHalaman, setSubHalaman] = useState ("materi");

  // menghubungkan ke file project tugas-minggu-2
  if (subHalaman === "todo"){
    return <TugasMinggu2 KembaliKeMateri={() => setSubHalaman("materi")} />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={kembaliKeHome}
        style={{ padding: "8px 16px", marginBottom: "20px", cursor: "pointer" }}
      >
        ← Kembali ke Home
      </button>

      <h1>Minggu 2: Koneksi ke Data & Form</h1>

      <button
        onClick={() => setSubHalaman("todo")}
        style = {{
          padding:"10px 20px",
          backgroundColor:"#28a745",
          color:"white",
          border:"none",
          borderRadius:"5px",
          cursor:"pointer",
          fontWeight:"bold"
        }}
      >
        🚀 Buka Projek Latihan: API Explorer
      </button>

      <hr style={{ margin: "20px 0 "}}/>

      <CariUser />
      <AmbilPostingan />
      <KomponenBerita />
      <TampilanDataMulus />
      <ControlledForm />
      <ParentDashboard />
    </div>
  );
}

// 1. useEffect & Kesaktian Dependency Array
function CariUser(){
    const [keyword, setKeyword] = useState("");
    const [hasil, setHasil] = useState([]);

    useEffect(() => {
        if (!keyword.trim()){
            setHasil([]);
            return; 
        } 

        // fungsi ini akan dijalankan ulang setiap kali state 'keyword' berubah
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then(res => res.json())
          .then(data => {
            const filtered = data.filter(user =>
              user.name.toLowerCase().includes(keyword.toLowerCase())
            );
            setHasil(filtered);
          });

    }, [keyword]); // <-- dependency array, artinya efek ini akan dijalankan ulang setiap kali 'keyword' berubah

    return (
        <div>
            <input
                type="text"
                placeholder="Cari user..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <ul>
                {hasil.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
}

// 2. Advanced Fetch Data via API (async/await + try/catch/finally)
function AmbilPostingan(){
  const [posts, setPosts] = useState(null);

  useEffect (() => {
    const dapatkanData = async () => {
      try {
        const respon = await fetch ('https://jsonplaceholder.typicode.com/posts/1');
        if (!respon.ok) throw new Error ("Gagal mengambil data dari server!");
        const dataJson = await respon.json();
        setPosts(dataJson);
      } catch (err) {
        console.error("Ada masalah: ", err.message);
      }
    };
    dapatkanData();
  }, []);

  if (!posts) return <p>⏳ Memuat ...</p>;

  return <div>{posts.title}</div>;
}

// 3. Penyelamat Memory Leak: Cleanup Function
function KomponenBerita() {
  const [berita, setBerita] = useState({});

  useEffect(() => {
    let masihAktif = true; // Flag penanda komponen masih hidup

    const ambilBerita = async () => {
      const respon = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await respon.json();

      // Cuma update state kalau komponenya terbukti masih nongol di layar
      if (masihAktif) {
        setBerita(data);
      }
    };

    ambilBerita();

    // CLEANUP FUNCTION: Otomatis jalan pas user pindah halaman/komponen unmount
    return () => {
      masihAktif = false; // Matikan flag agar tidak terjadi memory leak
    };
  }, []);

  return <div>{berita.title}</div>
}

// 4. UX yang Matang dengan Loading & Error State
function TampilanDataMulus() {
  const [data, setData]= useState(null);
  const[loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect (() => {
    let masihAktif = true;

    const hitApi = async () => {
      try{
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!res.ok) throw new Error("Gagal memuat data dari API publik!");
        const hasil = await res.json();

        if (masihAktif) setData(hasil);
      } catch (err) {
        if (masihAktif) setError(err.message);
      } finally {
        if (masihAktif) setLoading(false); // Selalu matikan loading di akhir
      }
    };

    hitApi();

    return () => {masihAktif = false;};
  }, []);

  // Conditional rendering berdasarkan status proses
  if (loading) return <p>⏳ Memuat data dari server, mohon tunggu...</p>;
  if (error) return <p>❌ Terjadi Masalah: {error}</p>;

  return (
    <div>
      <h3>Tugas: {data?.title}</h3>
      <p>Status: {data?.completed ? "Selesai ✅" : "Belum Selesai ⏳"}</p>
    </div>
  ); 
}

// 5. Controlled Form Input
function ControlledForm(){
  const [nama, setNama] = useState("");
  const [status, setStatus] = useState("Aktif");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kirim data ke Backend Laravel:", {nama, status});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nama Pengguna:</label>
      <input
        type="text"
        value={nama}
        onChange={(e) => setNama(e.currentTarget.value)}
        placeholder='Ketik nama lengkap...'
      />

      <label>Status:</label>
      <select value={status} onChange={(e) => setStatus(e.currentTarget.value)}>
        <option value="Aktif">Aktif</option>
        <option value="Nonaktif">Nonaktif</option>
      </select>
      <button type='submit'>Simpan ke Database</button>
    </form> 
  );
}

// 6. Sharing Data via Lifting State Up
// Komponen Anak A: Tempat Mengetik Input Pencarian
function KotakPencarian ({ kataKunci, setKataKunci }) {
  return (
    <input
      type="text"
      value={kataKunci}
      onChange={(e) => setKataKunci(e.target.value)}
      placeholder='Ketik untuk memfilter...'
    />
  );
}

// Komponen Anak B: Tempat memajang status pencarian (Sejajar dengan Anak A)
function InfoPencarian ({ kataKunci }) {
  return <p>Anda Sedang Mencari data dengan kata kunci: <strong>{kataKunci}</strong></p>;
}

// Komponen Induk: Menampung state utama agar bisa dipakai oleh Anak A dan Anak B
function ParentDashboard() {
  const [kataKunci, setKataKunci] = useState(""); // State di-lift up ke sini!

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h3>Dashboard Utama</h3>
      <KotakPencarian kataKunci={kataKunci} setKataKunci={setKataKunci}/>
      <InfoPencarian kataKunci={kataKunci} />
    </div>
  );
}