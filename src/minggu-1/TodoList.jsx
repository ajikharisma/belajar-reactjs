// src/TodoList.jsx
import { useState } from 'react';

export default function TodoList({kembaliKeMateri}) {
    const [todos, setTodos] = useState([
        { id: 1, teks: "Belajar React Component & JSX", selesai: true },
        { id: 2, teks: "Memahami useState dan Props", selesai: false },
    ]);
    const [inputBaru, setInputBaru] = useState("");

    const tambahTodo = (e) => {
        e.preventDefault();
        if (!inputBaru.trim()) return;

        const todoBaru = {
            id: Date.now(),
            teks: inputBaru,
            selesai: false,
        };

        setTodos([...todos, todoBaru]);
        setInputBaru("");
    };

    const toggleSelesai = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, selesai: !todo.selesai} : todo));
    };

    const hapusTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px", fontFamily: "sans-serif"}}>
            {/* TOMBOL KEMBALI MENGGUNAKAN PROPS FUNGSI */}
            <button onClick={kembaliKeMateri} style={{ marginBottom: "20px", padding: "8px"}}>
                Kembali ke Materi
            </button>

            <h2>Projek Latihan: Todo List</h2>

            <form onSubmit={tambahTodo}>
                <input
                    type="text"
                    placeholder="Tambah tgas baru..."
                    value={inputBaru}
                    onChange={(e) => setInputBaru(e.target.value)}
                    style={{ padding: "8px", width: "65%"}}
                />
                <button type="submit" style={{ padding:"8px", marginLeft: "5px"}}>Tambah</button>
            </form>

            {todos.length === 0 && <p style={{ color: "gray"}}>Yait! Semua tugas sudah selesai.</p>}

            <ul style={{paddingLeft: "0", listStyle: "none", marginTop: "20px"}}>
                {todos.map((todo)=>(
                    <li key={todo.id} style={{ display: "flex", justifyContent: "space-between", padding: "8px", borderBottom: "1px solid #ccc"}}>
                        <span
                            onClick={() => toggleSelesai(todo.id)}
                            style={{cursor: "pointer", textDecoration: todo.selesai? "line-through":"none", color: todo.selesai ?"gray" : "black"}}
                        >
                            {todo.teks} {todo.selesai ? "✅" : "⏳"}
                        </span>
                        <button onClick={() => hapusTodo(todo.id)} style={{backgroundColor: "red", color: "white", border: "none", padding: "4px 8px"}}>
                            Hapus
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );

}