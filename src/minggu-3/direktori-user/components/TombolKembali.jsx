import { useNavigate } from "react-router-dom";

export default function TombolKembali({ kembaliKeMateri }) {
  const navigate = useNavigate();   // aman di sini, karena komponen ini dirender di DALAM BrowserRouter

  const handleKembali = () => {
    navigate('/');
    kembaliKeMateri();
  };

  return (
    <button onClick={handleKembali} style={{ marginBottom: "20px", padding: "8px", cursor: "pointer" }}>
      ⬅ Kembali ke Materi
    </button>
  );
}