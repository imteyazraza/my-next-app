'use client';

import { useEffect, useState } from "react"
import "../../style.css"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function page(props){
    const router = useRouter()
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        getProductDetails()
    },[])

    const getProductDetails = async () => {
        const productId = props.params.editProduct;
        let productDetails = await fetch(`http://localhost:3000/api/products/${productId}`);
        productDetails = await productDetails.json();
        if(productDetails.success) {
            let result = productDetails.result;
            setName(result.name);
            setPrice(result.price);
            setColor(result.color);
            setCompany(result.company);
            setCategory(result.category)
        }
    }


    const updateProduct = async() => {
        const productId = props.params.editProduct;
        let productDetails = await fetch(`http://localhost:3000/api/products/${productId}`, {
            method: 'PUT',
            body: JSON.stringify({name, price, color, company, category})
        });
        productDetails = await productDetails.json();

        if(productDetails.result) {
            alert("Product has been updated and Page will redirect after closing this dialog");
            router.push('/products')
        }
    }
    return(
        <div>
            <h1>Update Product</h1>
            <input type="text" value={name} onChange={(e)=> {setName(e.target.value)}} placeholder="Enter Product Name" className="input"/>
            <input type="text" value={price} onChange={(e)=> {setPrice(e.target.value)}}  placeholder="Enter Product Price" className="input"/>
            <input type="text" value={color} onChange={(e)=> {setColor(e.target.value)}}  placeholder="Enter Product Color" className="input"/>
            <input type="text" value={company} onChange={(e)=> {setCompany(e.target.value)}}  placeholder="Enter Product Company" className="input"/>
            <input type="text" value={category} onChange ={(e)=> {setCategory(e.target.value)}}  placeholder="Enter Product Category" className="input"/>
            <button className="btn" onClick={updateProduct}>Update Product</button>
            <Link href="/products">Go To Product list page</Link>
        </div>
    )
}