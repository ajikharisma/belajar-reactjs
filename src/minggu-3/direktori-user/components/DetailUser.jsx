import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

export default function DetailUser(){
    const {id} = useParams();
    const { data: user, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (loading) return <p>⏳ Memuat detail...</p>;
    if (error) return <p>❌ {error}</p>;

    return(
        <div>
            <Link to="/">← Kembali ke daftar</Link>
            <Card>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Kota: {user.address.city}</p>
            </Card>
        </div>
    );
}