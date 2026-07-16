# [4]. [UX yang Matang dengan Loading & Error State]

## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

Saat menunggu GoFood diantar, aplikasi memunculkan status "Driver sedang menuju lokasi" (Loading State). Dan jika ban driver bocor, aplikasi memunculkan info "Gagal mengantar makanan" (Error State).

Di aplikasi web profesional, kita tidak boleh membiarkan layar kosong saat internet user lambat. Kita wajib mengatur 3 kondisi state di setiap proses hit API agar User Experience (UX) aplikasi menjadi mulus dan informatif.

## Sintaks Penting

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js

```

## Contoh Kode

```jsx
import { useState, useEffect } from 'react';

function TampilanDataMulus() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let masihAktif = true;

    const hitAPI = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!res.ok) throw new Error("Gagal memuat data dari API publik!");
        const hasil = await res.json();
        
        if (masihAktif) setData(hasil);
      } catch (err) {
        if (masihAktif) setError(err.message);
      } finally {
        if (masihAktif) setLoading(false); // Selalu matikan loading di akhir
      }
    };

    hitAPI();

    return () => { masihAktif = false; };
  }, []);

  // Conditional Rendering berdasarkan status proses
  if (loading) return <p>⏳ Sedang memuat data dari server, mohon tunggu...</p>;
  if (error) return <p>❌ Terjadi Masalah: {error}</p>;

  return (
    <div>
      <h3>Tugas: {data?.title}</h3>
      <p>Status: {data?.completed ? "Selesai ✅" : "Belum Selesai ⏳"}</p>
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