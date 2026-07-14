# [Nomor]. [Nama Konsep]

> Contoh: `6. conditional-rendering` 

## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

Ini adalah cara kita untuk menampilkan elemen UI yang berbeda berdasarkan kondisi tertentu (mirip seperti fitur menampilkan tombol Log In jika user belum masuk, dan menampilkan foto profil jika user sudah Log In).

Di React, ada 3 cara populer yang sering digunakan:

1. if/else biasa: Sangat cocok ditaruh di luar JSX (di bagian atas sebelum kode return).

2. Ternary operator (kondisi ? ya : tidak): Sangat praktis untuk kondisi bercabang langsung di dalam JSX.

3. Operator Logika &&: Pilihan terbaik jika kamu hanya ingin menampilkan sesuatu jika kondisinya benar (jika salah, tidak menampilkan apa-apa).

## Sintaks Penting

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js
// 1. Ternary Operator
{kondisi ? <KomponenA /> : <KomponenB />}

// 2. Operator &&
{kondisi && <KomponenTampilJikaBenar />}
```

## Contoh Kode

```jsx
function Notifikasi({ adaPesanBaru, namaUser }) {
  return (
    <div>
      {/* 1. Menggunakan Ternary untuk menyapa sesuai kondisi */}
      <h2>{namaUser ? `Selamat Datang, ${namaUser}` : "Selamat Datang, Tamu"}</h2>
      
      {/* 2. Menggunakan && untuk menampilkan ikon notifikasi hanya jika ada pesan baru */}
      {adaPesanBaru && <p>🔴 Kamu memiliki pesan baru!</p>}
    </div>
  );
}
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