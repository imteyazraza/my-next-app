'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadFileButton(props){
    const [file, setFile] = useState()
    const router = useRouter();
    const {productId} = props;
    const uploadFile = async(e) => {
        e.preventDefault()
        console.log("file>>>", file);
        const data = new FormData();
        data.set('file', file);
        const result = await fetch('api/upload', {
            method: 'POST',
            body: data
        })
        console.log('result>>>', result)
    }
    return (
        <div>
            <form onSubmit={uploadFile}>
                <input type="file" name="file" onChange={(e)=>{setFile(e.target.files?.[0])}}/>
                <button type="submit">Upload Image</button>
            </form>
        </div>
    )

}