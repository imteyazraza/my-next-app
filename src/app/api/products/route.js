import { connectionStr } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let data = [];
    try {
        await mongoose.connect(connectionStr);
        data = await Product.find(); 
    }
    catch{
        data = {success: false}
    }
    return NextResponse.json({result: data, success: true})
}

// export async function POST(request) {
//     await mongoose.connect(connectionStr);
//     let product = new Product({
//         name: "Note 10",
//         price: "33000",
//         color: "red",
//         company: "samsung",
//         category: "mobile"
//     })
//     const result = await product.save();
//     return NextResponse.json({result, success: true})
// }

export async function POST(request) {
    const payload = await request.json()
    await mongoose.connect(connectionStr);
    let product = new Product(payload)
    const result = await product.save();
    return NextResponse.json({result, success: true})
}