import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Leftside = () => {
const [cata,setcata]=useState([]);
useEffect(()=>{
    fetch('categories.json')
    .then(res=>res.json())
    .then(data=>setcata(data))
},[])

    return (
        <div>
            <h1 className="mt-6 text-center text-2xl font-bold">All Categories </h1>
            {
                cata.map(cata=><Link key={cata.id } to={`/cata/${cata.id}`} className="block ml-20 mt-5 text-xl font-bold"  >{cata.name}</Link>)
            }
        </div>
    );
};

export default Leftside;