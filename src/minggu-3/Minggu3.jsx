import { useState } from "react";
import DirektoriUser from './direktori-user/DirektoriUser';

export default function Minggu3({ kembaliKeHome }){
    const [subHalaman, setSubHalaman] = useState("materi");

    // Menghubungkan ke folder project direktori user
    if(subHalaman === "project"){
        return <DirektoriUser kembaliKeMateri={() => setSubHalaman ("materi")} />;
    }

    return(
        <div style={{ padding:"20px" }}>
            <button onClick={kembaliKeHome} style={{padding:"8px 16px", marginBottom:"20px", cursor:"pointer"}}>
                ← Kembali ke Home
            </button>

            <h1>Minggu 3: React Menengah</h1>

            <button 
                onClick={() => setSubHalaman("project")}
                style={{padding:"10px 20px", backgroundColor:"#28a745", color:"white", border:"none", borderRadius:"5px", cursor:"pointer", fontWeight:"bold"}}
            >
                🚀 Buka Projek Latihan: Direktori User
            </button>


            <hr style={{margin:"20px 0"}}/> 
        </div> 

    )
}