import {NextRequest, NextResponse} from 'next/server';
import fs from "node:fs/promises";

export const POST = async (request: NextRequest, response: NextResponse) => {
    console.log(request.body);
    const formData = await request.formData();
    // console to demonstrate the data receiving on the server
    const files = formData.getAll('imageFile') as File[]
    
    console.log(files);
    files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);

        await fs.writeFile(`./public/uploads/${file.name}`, buffer);
    });

    // // Return a response
    return NextResponse.json({ message: 'Photo added successfully' });
}