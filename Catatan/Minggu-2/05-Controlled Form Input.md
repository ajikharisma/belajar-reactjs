# [5]. [Controlled Form Input]

## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

Di HTML biasa, apa yang diketik oleh pengguna di dalam kotak input akan disimpan di memori internal elemen HTML itu sendiri. Namun di React, kita memegang teguh prinsip Single Source of Truth (Satu Sumber Kebenaran). Kita bajak kendali input tersebut dan menyerahkannya kepada useState React.

Setiap kali pengguna mengetik satu huruf, event onChange akan menangkapnya dan memperbarui nilai di useState. Akibatnya, teks yang muncul di kotak input akan selalu sinkron 100% dengan nilai state kita.

## Sintaks Penting

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js

```

## Contoh Kode

```jsx
import { useState } from 'react';

function ControlledForm() {
  const [nama, setNama] = useState("");
  const [status, setStatus] = useState("Aktif");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kirim data ke Backend Laravel:", { nama, status });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nama Pengguna:</label>
      <input 
        type="text" 
        value={nama} 
        onChange={(e) => setNama(e.target.value)} 
        placeholder="Ketik nama lengkap..." 
      />

      <label>Status:</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Aktif">Aktif</option>
        <option value="Nonaktif">Nonaktif</option>
      </select>

      <button type="submit">Simpan ke Database</button>
    </form>
  );
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