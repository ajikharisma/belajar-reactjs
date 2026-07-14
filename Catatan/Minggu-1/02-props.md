# [Nomor]. [Nama Konsep]

> Contoh: `1. props` 

## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

Jika Component adalah mobilnya, maka Props adalah warna, merek, atau kecepatan mobil tersebut yang ditentukan saat mobil itu dibuat oleh pabriknya. Props digunakan untuk mengirim data dari Komponen Induk (Parent) ke Komponen Anak (Child).

1. Data mengalir satu arah: dari atas (Parent) ke bawah (Child).

2. Props bersifat read-only (Komponen anak hanya bisa menerima dan memakai data tersebut, tidak boleh mengubahnya secara langsung).

## Sintaks Penting

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js
/// Di Komponen Anak (Menerima props sebagai object argument)
function Child(props) {
  return <div>{props.namaProperti}</div>;
}

// Di Komponen Induk (Mengirim props seperti atribut HTML)
<Child namaProperti="Nilai Data" />
```

## Contoh Kode

```jsx
// src/minggu-1/Minggu1.jsx

// Komponen Anak - Menerima data lewat parameter 'props'
function Tombol(props) {
  return <button style={{ backgroundColor: props.warna }}>{props.teks}</button>;
}

// Komponen Induk - Mengirimkan data ke Tombol
function App() {
  return (
    <div>
      <Tombol warna="red" teks="Hapus" />
      <Tombol warna="green" teks="Simpan" />
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