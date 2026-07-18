import { useState, useEffect } from "react";

export default function useFetch(url){
    const [data, setData] = useState (null);
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState (null);

    useEffect (() => {
        let masihAktif = true;
        const ambilData = async () => {
            try{
                setLoading(true);
                const res = await fetch(url);
                if (!res.ok) throw new Error ("Gagal mengambil data");
                const hasil = await res.json();
                if (masihAktif) setData(hasil);
            } catch (err) {
                if (masihAktif) setError (err.message);
            } finally{
                if (masihAktif) setLoading(false);
            }
        };
        ambilData();
        return () => {masihAktif=false;};
    }, [url]);

    return {data, loading, error};
}