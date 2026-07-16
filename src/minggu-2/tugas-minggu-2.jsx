import { useState, useEffect } from "react";

export default function TugasMinggu2({ KembaliKeMateri }){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cari, setCari] = useState("") // Controlled input untuk filter pencarian

    useEffect(() => {
        let masihAktif = true; // Cleanup flag biar tidak memory leak

        const ambilPostingan = async () => {
            try {
                setLoading(true);
                const respon = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8');
                if (!respon.ok) throw new Error ("Gagal mengambil data API");
                const data = await respon.json();

                if (masihAktif) setPosts(data);
            } catch (err) {
                if (masihAktif) setError(err.message);
            } finally{
                if (masihAktif) setLoading(false);
            }
        };

        ambilPostingan();

        // Cleanup function otomatis jalan pas komponen di-unmount
        return () => {
            masihAktif = false;
        }
    }, []);

    // Logika menyaring postingan (Dapat ter-update otomatis berkat dependency cari)
    const postinganTersaring = posts.filter((post) =>
        post.title.toLowerCase().includes(cari.toLowerCase())
    );

    return(
        <div style={{ padding: "20px", maxWidth:"500px", fontFamily:"sans-serif" }}>
            {/* TOMBOL KEMBALI MENGGUNAKAN PROPS FUNGSI */}
            <button onClick={KembaliKeMateri} style={{ marginBottom:"20px", padding:"8px", cursor:"pointer" }}>
                ⬅ Kembali ke Materi
            </button>

            <h2>Project Latihan: API Explorer</h2>

            {/* Controlled form input */}
            <div style={{ marginBottom:"20px" }}>
                <input
                    type="text"
                    placeholder="Cari Judul Postingan..."
                    value={cari}
                    onChange={(e) => setCari (e.target.value)}
                    style={{ padding:"8px", width:"95%", borderRadius:"4px", border:"1px  solid #ccc" }}
                />
            </div>

            {/* Conditional rendering untuk status loading */}
            {loading && <p style = {{ color:"orange" }}>⏳ Sedang mengambil data...</p>}

            {/* Conditional rendering untuk status error */}
            {error && <p style = {{ color:"red" }}>❌ Terjadi kesalahan: {error}</p>}

            {/* Status jika data pencarian tidak ketemu */}
            {!loading && postinganTersaring.length == 0 && <p style = {{ color:"grey" }}>Data tidak ditemukan.</p>}

            {/* Rendering list menggunakan .map() */}
            <ul style = {{ paddingLeft:"0", listStyle:"none", marginTop:"20px" }}>
                {postinganTersaring.map((post) => (
                    <li
                        key={post.id}
                        style={{
                            padding:"12px",
                            borderBottom:"1px solid #ccc",
                            marginBottom:"10px",
                            backgroundColor:"#f9f9f9",
                            borderRadius:"6px"
                        }}
                    >
                        <h4 style = {{ margin:"0 0 5px 0", textTransform:"capitalize",color:"#2c3e50" }}>
                            {post.title}
                        </h4>
                        <p style = {{ margin:0,color:"#666",fontSize:"14px" }}>
                            {post.body}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
} 