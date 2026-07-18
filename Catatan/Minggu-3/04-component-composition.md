# [4]. [component-composition]

## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

 Ini cara bikin komponen "pembungkus" yang isinya fleksibel, kayak bikin bingkai foto yang bisa diisi foto apa aja.

## Sintaks Penting

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js

```

## Contoh Kode

```jsx
function Card({ children }) {
  return <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>{children}</div>;
}

// Pakainya:
function App() {
  return (
    <Card>
      <h2>Judul Apapun</h2>
      <p>Isi apapun bisa dimasukkan ke sini</p>
    </Card>
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