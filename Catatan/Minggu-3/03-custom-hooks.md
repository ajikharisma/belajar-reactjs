# [3]. [custom-hooks]

## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

Perhatiin Minggu2.jsx kamu — pola useState + useEffect + loading + error itu ditulis ulang di AmbilPostingan, KomponenBerita, TampilanDataMulus. Custom Hook itu cara "membungkus" pola yang berulang itu jadi 1 fungsi reusable, biar nggak copy-paste terus.
## Sintaks Penting

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js

```

## Contoh Kode

```jsx
// hooks/useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let masihAktif = true;
    const ambilData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error("Gagal mengambil data!");
        const hasil = await res.json();
        if (masihAktif) setData(hasil);
      } catch (err) {
        if (masihAktif) setError(err.message);
      } finally {
        if (masihAktif) setLoading(false);
      }
    };
    ambilData();
    return () => { masihAktif = false; };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;

// Pakainya jadi super simpel:
import useFetch from '../hooks/useFetch';

function TampilanDataMulus() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1');

  if (loading) return <p>⏳ Memuat...</p>;
  if (error) return <p>❌ {error}</p>;
  return <h3>{data.title}</h3>;
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