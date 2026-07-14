# [Nomor]. [Nama Konsep]

> Contoh: `3. useState` 

## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

Variabel JavaScript biasa (seperti let atau const) akan langsung "lupa" nilainya dan ter-reset setiap kali komponen di-render ulang oleh React. Di sinilah useState masuk.

useState adalah sebuah Hook (fitur bawaan React) yang digunakan untuk membuat data yang bisa berubah dan diingat oleh React. Ketika data di dalam state ini berubah, React akan otomatis memperbarui tampilan layar secara instan.

## Sintaks Penting

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js
// Mengambil fungsi useState dari React
import { useState } from 'react';

// Format penulisan selalu berpasangan menggunakan array destructuring
const [nilaiSaatIni, fungsiPengubah] = useState(nilaiAwal);
```

## Contoh Kode

```jsx
import { useState } from 'react';

function Counter() {
  // Membuat state bernama 'angka' dengan nilai awal 0
  const [angka, setAngka] = useState(0);

  return (
    <div>
      <p>Kamu sudah klik sebanyak {angka} kali</p>
      {/* Mengubah state menggunakan fungsi pengubahnya */}
      <button onClick={() => setAngka(angka + 1)}>Klik Aku</button>
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