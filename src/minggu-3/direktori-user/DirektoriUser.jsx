import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import ListUser from './components/ListUser';
import DetailUser from './components/DetailUser';
import TombolKembali from './components/TombolKembali';

export default function DirektoriUser({ kembaliKeMateri }) {
  return (
    <UserProvider>
      <BrowserRouter>
        <div style={{ padding: "20px" }}>
          <TombolKembali kembaliKeMateri={kembaliKeMateri} />

          <h1>Project: Direktori User</h1>

          <Routes>
            <Route path="/" element={<ListUser />} />
            <Route path="/user/:id" element={<DetailUser />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}