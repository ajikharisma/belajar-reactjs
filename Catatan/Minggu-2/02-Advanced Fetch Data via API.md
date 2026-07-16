# [2]. [Advanced Fetch Data via API]

## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

Mengambil data dari API itu ibarat "Memesan GoFood". Kamu (React) menembak alamat restoran (URL API), menunggu makanannya dimasak dan diantar, lalu setelah makanannya sampai, baru kamu santap (tampilkan ke layar).

Di dunia kerja nyata, pola penulisan yang paling disukai dan standar industri adalah menggabungkan fungsi async/await dengan blok try...catch...finally.

1. try: Blok tempat kita mencoba mengambil data dari API.

2. catch: Tempat menangkap error jika tiba-tiba internet putus atau server mati.

3. finally: Blok penutup yang pasti berjalan apa pun hasilnya (baik sukses maupun gagal). Sangat pas untuk mematikan status loading.

## Sintaks Penting

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js
const ambilData = async () => {
  try {
    // 1. Jalankan proses asynchronous
  } catch (error) {
    // 2. Tangkap jika ada error
  } finally {
    // 3. Eksekusi akhir (selalu jalan)
  }
};
```

## Contoh Kode

```jsx
import { useState, useEffect } from 'react';

function AmbilPostingan() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const dapatkanData = async () => {
      try {
        const respon = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!respon.ok) throw new Error("Gagal mengambil data dari server!");
        const dataJson = await respon.json();
        setPosts(dataJson);
      } catch (err) {
        console.error("Ada masalah: ", err.message);
      }
    };

    dapatkanData();
  }, []);

  return <div>{posts.title}</div>;
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