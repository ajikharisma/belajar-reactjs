import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useUserContext } from "../context/UserContext";
import card from "./Card";

export default function ListUser(){
    const { data: users, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users');
    const {favorit, toggleFavorit} = useUserContext();

    if (loading) return <p>⏳ Memuat daftar user...</p>
    if (error) return <p>❌ {error}</p>;

    return(
        <div>
            <h2>Daftar User</h2>
            {users.map((user) => (
                <card key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>    
                    <button onClick={() => toggleFavorit(user.id)} style={{marginLeft:"10px"}}>
                        {favorit.includes=(user.id) ? "★ Favorit" : "☆ Tandai Favorit"}
                    </button>
                </card>
            ))}
        </div>
    );
}