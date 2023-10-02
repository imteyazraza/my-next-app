'use client';

import { useRouter } from "next/navigation";

export default function DeleteButton(props){
    const router = useRouter();
    const {productId} = props;
    const deleteProduct = async() => {
        let response = await fetch(`http://localhost:3000/api/products/${productId}`, {
            method: 'delete',
        });
        response = await response.json();
        if(response.success) {
            alert('product deleted');
            router.refresh();
        }
    }
    return (
        <div>
            <button onClick={deleteProduct}>{props.name}</button>
        </div>
    )

}