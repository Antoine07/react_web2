import { useState, useMemo } from "react"

export default function () {
    const [search, setSearch] = useState("");

    const filtered = useMemo(() => {
      console.log("Recalcul pour :", search);
      return search;
    }, [search]);
  
    return (
      <>
        <p>Search = {search}</p>
  
        <button onClick={() => setSearch("a")}>
          setSearch("a") 
        </button>
  
        <button onClick={() => {
          setSearch("a");
          setSearch("a");
          setSearch("a");
        }}>
         BTN
        </button>
  
        <p>Résultat useMemo : {filtered}</p>
      </>
    );
  }
