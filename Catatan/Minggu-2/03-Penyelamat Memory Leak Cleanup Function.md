# [3]. [Penyelamat Memory Leak Cleanup Function]

## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

Bayangkan kamu memesan GoFood, tetapi sebelum driver sampai ke rumah, kamu memutuskan untuk pindah rumah dan mengosongkan alamat tersebut. Ketika driver sampai, dia akan kebingungan mencari kamu.

Di React, jika proses fetch API belum selesai tapi komponennya sudah hilang/ditutup dari layar oleh user (unmount), React akan memunculkan warning memory leak karena mencoba mengubah state pada komponen yang sudah mati.

Cleanup Function adalah sebuah fungsi yang kita return di dalam useEffect. Fungsi ini akan dipanggil otomatis oleh React tepat sebelum komponen tersebut dihancurkan dari layar untuk membersihkan sisa-sisa proses yang menggantung.

## Sintaks Penting

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js
useEffect(() => {
  // 1. Jalankan efek samping di sini
  
  return () => {
    // 2. CLEANUP FUNCTION: Beres-beres di sini saat komponen hilang
  };
}, []);
```

## Contoh Kode

```jsx
import { useState, useEffect } from 'react';

function KomponenBerita() {
  const [berita, setBerita] = useState({});

  useEffect(() => {
    let masihAktif = true; // Flag penanda komponen masih hidup

    const ambilBerita = async () => {
      const respon = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await respon.json();
      
      // Cuma update state kalau komponennya terbukti masih nongol di layar
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

  return <div>{berita.title}</div>;
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