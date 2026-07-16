# [6]. [Sharing Data via Lifting State Up]

## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

Di React, aliran data itu kaku: hanya bisa mengalir satu arah dari atas ke bawah (Parent ke Child). Data tidak bisa dioper secara horizontal ke samping antar sesama komponen anak yang sejajar.

Jika ada kasus di mana dua komponen anak yang bertetangga butuh saling berbagi dan membaca data yang sama, caranya adalah menaikkan (lifting) state tersebut satu tingkat ke atas, ke komponen induk bersama mereka. Komponen induk inilah yang nantinya bertugas membagikan data tersebut kembali ke bawah melalui props.

## Sintaks Penting

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js

```

## Contoh Kode

```jsx
// Komponen Anak A: Tempat mengetik input pencarian
function KotakPencarian({ kataKunci, setKataKunci }) {
  return (
    <input 
      type="text" 
      value={kataKunci} 
      onChange={(e) => setKataKunci(e.target.value)} 
      placeholder="Ketik untuk memfilter..." 
    />
  );
}

// Komponen Anak B: Tempat memajang status pencarian (Sejajar dengan Anak A)
function InfoPencarian({ kataKunci }) {
  return <p>Anda sedang mencari data dengan kata kunci: <strong>{kataKunci}</strong></p>;
}

// Komponen Induk: Menampung state utama agar bisa dipakai bersama oleh Anak A dan Anak B
export default function ParentDashboard() {
  const [kataKunci, setKataKunci] = useState(""); // State di-lift up ke sini!

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h3>Dashboard Utama</h3>
      <KotakPencarian kataKunci={kataKunci} setKataKunci={setKataKunci} />
      <InfoPencarian kataKunci={kataKunci} />
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