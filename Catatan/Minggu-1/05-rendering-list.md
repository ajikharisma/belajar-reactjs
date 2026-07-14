# [Nomor]. [Nama Konsep]

> Contoh: `5. rendering-list` 

## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

Kalau kamu punya kumpulan data dalam bentuk Array (seperti daftar belanjaan, nama mahasiswa, atau daftar tugas), kamu tidak perlu menulis struktur HTML-nya satu per satu secara manual. Kita gunakan fungsi bawaan JavaScript yaitu .map() untuk menyisir array tersebut dan mengubahnya secara otomatis menjadi sekumpulan elemen JSX.

1. Aturan Wajib: Setiap elemen terluar di dalam .map() wajib memiliki atribut key yang bernilai unik (seperti ID atau index). Ini penting agar React tahu persis elemen mana yang berubah, ditambah, atau dihapus, sehingga performa aplikasi tetap cepat.

## Sintaks Penting

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js
{namaArray.map((item, index) => (
  <li key={item.id atau index}>{item}</li>
))}
```

## Contoh Kode

```jsx
function DaftarBuah() {
  const buahBuahan = ["Apel", "Pisang", "Mangga"];

  return (
    <ul>
      {buahBuahan.map((buah, index) => (
        // Menggunakan index sebagai key karena datanya sederhana dan statis
        <li key={index}>{buah}</li>
      ))}
    </ul>
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