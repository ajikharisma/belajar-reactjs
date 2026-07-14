# [Nomor]. [Nama Konsep]

> Contoh: `1. Component-jsx` 

## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

Bayangkan Component seperti balok Lego. Aplikasi React dibangun dari susunan balok-balok kecil ini (misal: tombol, navbar, atau form input). Di React, component hanyalah sebuah fungsi JavaScript biasa yang mengembalikan (return) struktur UI.

JSX (JavaScript XML) adalah sintaks yang membuat kita bisa menulis struktur mirip HTML di dalam JavaScript.

1. turan Utama JSX: Harus mengembalikan satu elemen induk. Jika punya banyak elemen sejajar, bungkus dengan pembungkus kosong bernama Fragment: <> ... </>.

2. Untuk memasukkan variabel atau ekspresi JavaScript ke dalam JSX, gunakan kurung kurawal {}.

## Sintaks Penting

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js
// Format dasar Functional Component di React
function NamaKomponen() {
  return (
    <>
      {/* Struktur UI di sini */}
    </>
  );
}

// Cara memanggil komponen di dalam komponen lain (Self-Closing Tag)
<NamaKomponen />
```

## Contoh Kode

```jsx
// src/minggu-1/Minggu1.jsx

function WelcomeCard() {
  const nama = "Aji";

  return (
    <>
      <h1>Halo, {nama}!</h1>
      <p>Selamat Belajar React, semoga lancar-lancar Aamiin.</p>
    </>
  );
}

export default WelcomeCard;
```

## Bug / Kesalahan yang Pernah Aku Alami

<!-- Bagian PALING PENTING — isi tiap kali kamu nemu error pas praktik.
     Kesalahan yang kamu alami sendiri jauh lebih nempel daripada teori doang. -->

| Bug | Penyebab | Perbaikan |
|---|---|---|
| *Contoh: tombol tidak berubah warna* | *typo `backgroundcolor` harusnya `backgroundColor` (camelCase)* | *ganti ke `backgroundColor`* |
| | | |

## Pertanyaan yang Masih Mengganjal

<!-- Tulis di sini kalau ada bagian yang belum 100% jelas.
     Nanti pas ketemu jawabannya, update bagian ini juga. -->

-

## Referensi

<!-- Link sumber belajar yang kamu pakai buat topik ini -->

-