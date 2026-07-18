# [1]. [react-router]

## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

Selama ini kamu pindah "halaman" pakai useState + if/else (kayak Minggu1/Minggu2 kamu). Itu jalan buat project kecil, tapi begitu ada 10+ halaman, jadi berantakan. React Router itu kayak "satpam gedung" — dia yang ngatur berdasarkan alamat URL (/login, /dashboard, /profil), pengunjung diarahin ke "ruangan" (component) yang tepat. 

## Sintaks Penting / Instalasi

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js
npm install react-router-dom
```

## Contoh Kode

```jsx
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tentang">Tentang</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/user/:id" element={<DetailUser />} />  {/* dynamic route */}
      </Routes>
    </BrowserRouter>
  );
}

function DetailUser() {
  const { id } = useParams();  // ambil ":id" dari URL
  return <p>Detail user dengan ID: {id}</p>;
}

function Home() {
  const navigate = useNavigate();  // pindah halaman lewat kode (bukan cuma klik link)
  return <button onClick={() => navigate('/tentang')}>Ke halaman Tentang</button>;
}
```

## Bug / Kesalahan yang Pernah Aku Alami

<!-- Bagian PALING PENTING — isi tiap kali kamu nemu error pas praktik.
     Kesalahan yang kamu alami sendiri jauh lebih nempel daripada teori doang. -->

| Bug | Penyebab | Perbaikan |
|---|---|---|


## Pertanyaan yang Masih Mengganjal

<!-- Tulis di sini kalau ada bagian yang belum 100% jelas.
     Nanti pas ketemu jawabannya, update bagian ini juga. -->

-

## Referensi

<!-- Link sumber belajar yang kamu pakai buat topik ini -->

-