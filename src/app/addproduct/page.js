'use client';

import { useEffect, useRef, useState } from "react"
import "../style.css"

export default function page(){
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        console.log("for testing")
    },[])
    const loadedRef = useRef(false);
    useEffect(() => {
        if(!loadedRef.current){
            console.log("runninnnnnnn")
            loadedRef.current = true;
        }
    }, []);

    console.log("for testing out")

    const addProduct = async() => {
        if(!name || !price || !color || !company || !category) {
            alert("Enter all fields");
            return
        }
        let result = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            body: JSON.stringify({name,price,color,company,category})
        });
        result = await result.json();
        if(result.success) {
            alert("new product added")
            setName('');
            setPrice('');
            setColor('');
            setCompany('');
            setCategory('');
        }
    }
    return(
        <div>
            <h1>Add Product</h1>
            <input type="text" value={name} onChange={(e)=> {setName(e.target.value)}} placeholder="Enter Product Name" className="input"/>
            <input type="text" value={price} onChange={(e)=> {setPrice(e.target.value)}}  placeholder="Enter Product Price" className="input"/>
            <input type="text" value={color} onChange={(e)=> {setColor(e.target.value)}}  placeholder="Enter Product Color" className="input"/>
            <input type="text" value={company} onChange={(e)=> {setCompany(e.target.value)}}  placeholder="Enter Product Company" className="input"/>
            <input type="text" value={category} onChange ={(e)=> {setCategory(e.target.value)}}  placeholder="Enter Product Category" className="input"/>
            <button className="btn" onClick={addProduct}>Add Product</button>
        </div>
    )
}