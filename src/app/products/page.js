import Link from "next/link";
import DeleteButton from "../Component/DeleteButton";
import UploadFileButton from "../Component/UploadFile";

const getProduct = async() => {
    let data = await fetch("http://localhost:3000/api/products", {cache: "no-cache"});
    data = await data.json();
    // console.log("data>>>", data)
    if(data.success) {
        return data.result;
    } else {
        return {success: false}
    }
}
export default async function page(){
    const products = await getProduct();
    return(
        <div>
            <h1>Product List</h1>
            <table border="1" cellPadding="10" >
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Color</th>
                        <th>Product Company</th>
                        <th>Product Category</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.color}</td>
                            <td>{item.company}</td>
                            <td>{item.category}</td>
                            <td><Link href={`products/${item._id}`}>Edit</Link></td>
                            <td><DeleteButton name="Delete" productId={item._id}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Upload Image</h2>
            <UploadFileButton/>
        </div>
    )
}