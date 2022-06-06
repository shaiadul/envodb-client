import { useEffect, useState, } from "react"

const useSection = () =>{
    const [sections, setSections] = useState([])
    useEffect(() =>{
        fetch("https://obscure-temple-73914.herokuapp.com/data")
        .then(res => res.json())
        .then(data => setSections(data));
    },[])
    return [sections, setSections];
}
 export default useSection;
