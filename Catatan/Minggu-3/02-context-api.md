# [2]. [context-api]

## Konsep & Analogi

<!-- Jelaskan pakai bahasamu sendiri, jangan copy-paste dari sumber belajar.
     Kalau kamu bisa jelasin dengan analogi sendiri, itu tandanya kamu beneran paham. -->

 Inget "Lifting State Up" minggu 2? Itu jalan kalau cuma 2 komponen yang sejajar. Tapi kalau ada data yang dibutuhin banyak komponen di banyak level berbeda (misal: data user yang login, atau tema dark/light mode), oper props satu-satu jadi capek banget (disebut "prop drilling"). Context API itu kayak "siaran radio" — sekali disiarkan, semua komponen yang mau "dengerin" bisa langsung akses tanpa dioper manual.
## Sintaks Penting

<!-- Kalau ada pola/format kode yang sering dipakai berulang, tulis di sini -->

```js

```

## Contoh Kode

```jsx
import { createContext, useContext, useState } from 'react';

// 1. Bikin Context
const UserContext = createContext();

// 2. Bikin Provider (pembungkus yang nyiarin data)
function UserProvider({ children }) {
  const [user, setUser] = useState({ nama: "Aji", role: "mahasiswa" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Pakai di komponen manapun, sedalam apapun levelnya
function ProfilCard() {
  const { user } = useContext(UserContext);  // langsung "dengerin" siaran
  return <p>Halo, {user.nama} ({user.role})</p>;
}

// Bungkus App dengan Provider
function App() {
  return (
    <UserProvider>
      <ProfilCard />
    </UserProvider>
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