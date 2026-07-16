# [1]. [useEffect & Kesaktian Dependency Array]

## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

Bayangkan useEffect seperti "Asisten Otomatis" di tokomu. Dia akan langsung bekerja begitu toko pertama kali buka, atau saat ada stok barang tertentu yang berubah nilainya.

Di React, useEffect digunakan untuk menangani Side Effects (efek samping) yang berada di luar kendali render utama React, seperti mengambil data dari API, mengubah judul halaman browser, atau menyalakan timer.

Kunci kekuatan useEffect ada pada Dependency Array (kotak kurung siku [] di akhir fungsi):

1. Kosong []: Fungsi di dalamnya cuma jalan 1 kali pas komponen pertama kali muncul di layar (mount). Sangat cocok untuk fetch data awal.

2. Ada Isinya [variabel]: Fungsi akan jalan pertama kali, DAN otomatis jalan ulang setiap kali nilai di dalam variabel tersebut berubah. Sangat cocok untuk fitur live search atau filter data.

3. Tidak Ditulis: Fungsi akan jalan terus-menerus setiap kali terjadi perubahan state apa pun di komponen tersebut. (Hindari pola ini untuk hit API karena bisa membuat server jebol!)

## Sintaks Penting

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js
useEffect(() => {
  // Kode aksi yang ingin dijalankan otomatis
  
}, [variabelPengendali]); // <-- Dependency Array
```

## Contoh Kode

```jsx
import { useState, useEffect } from 'react';

function CariUser() {
  const [keyword, setKeyword] = useState("");
  const [hasil, setHasil] = useState([]);

  useEffect(() => {
    if (!keyword.trim()) {
      setHasil([]);
      return;
    }

    // Fungsi ini akan dijalankan ULANG setiap kali state 'keyword' berubah
    fetch(`https://jsonplaceholder.typicode.com/users?username=${keyword}`)
      .then(res => res.json())
      .then(data => setHasil(data));
      
  }, [keyword]); // <-- React memantau variabel keyword di sini

  return (
    <div>
      <input 
        type="text" 
        value={keyword} 
        onChange={(e) => setKeyword(e.target.value)} 
        placeholder="Cari username..." 
      />
      <ul>
        {hasil.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
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