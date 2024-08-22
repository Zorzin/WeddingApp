import {NextRequest, NextResponse} from "next/server";
import * as Bytescale from "@bytescale/sdk";

export const POST = async (request: NextRequest, response: NextResponse) => {

    const uploadManager = new Bytescale.UploadManager({
        apiKey: "public_W142ikK7b8SHzr5t3gmsymFjq7a2" // This is your API key.
    });

    const formData = await request.formData();
    // console to demonstrate the data receiving on the server
    const files = formData.getAll('imageFile') as File[]

    console.log("Request body:", files);
    files.map(async (file) => {
        try {
            const { fileUrl, filePath } = await uploadManager.upload({ data: file });
            console.log(`File uploaded:\n${fileUrl}`);
        } catch (e: any) {
            console.log(`Error:\n${e.message}`);
        }
    });

    // Return a response
    return NextResponse.json({ message: 'Photo added successfully' });
}