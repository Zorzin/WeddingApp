import {NextRequest, NextResponse} from "next/server";
import cloudinary from "cloudinary";

export const POST = async (request: NextRequest, response: NextResponse) => {

// Return "https" URLs by setting secure: true
    cloudinary.v2.config({
        secure: true,
        cloud_name: "dpvr5xnn9",
        api_key: "699651618645277",
        api_secret: "cVejBQXXhiTAxI5tnh4S-K2cig4"
    });

    const formData = await request.formData();
    // console to demonstrate the data receiving on the server
    const files = formData.getAll('imageFile') as File[]

    console.log("Request body:", files);
    files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);

        try {

            const uploadResult = await new Promise((resolve) => {
                cloudinary.v2.uploader.upload_stream((error, uploadResult) => {
                    return resolve(uploadResult);
                }).end(buffer);
            });
            console.log("Upload result:",uploadResult);
        }
        catch (error) {
            console.error('Error while uploading photo:', error);
            return NextResponse.json({ message: 'Error while uploading photo' });
        }
    });

    // Return a response
    return NextResponse.json({ message: 'Photo added successfully' });
}