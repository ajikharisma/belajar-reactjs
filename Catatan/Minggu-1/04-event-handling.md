# [4]. [event-handling]


## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

Event handling adalah cara kita membuat aplikasi menjadi interaktif dan hidup. Konsepnya mirip seperti JavaScript DOM biasa (seperti menangkap klik, ketikan form, submit), tetapi di React penulisan nama event-nya menggunakan format camelCase dan kita langsung mengoper fungsi (callback) ke dalamnya, bukan string.

## Sintaks Penting

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js
// Menggunakan camelCase untuk nama event
onClick={namaFungsi}
onChange={namaFungsi}
onSubmit={namaFungsi}
```

## Contoh Kode

```jsx
function FormBelajar() {
  const handleKlik = () => {
    alert("Tombol diklik!");
  };

  const handleKetik = (event) => {
    // event.target.value digunakan untuk menangkap isi ketikan user
    console.log("Kamu mengetik: ", event.target.value);
  };

  return (
    <div>
      <button onClick={handleKlik}>Klik Saya</button>
      <input type="text" onChange={handleKetik} placeholder="Ketik sesuatu..." />
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