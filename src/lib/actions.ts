'use server';

import {revalidatePath} from "next/cache";
import fs from "node:fs/promises";

export default async function saveFiles({files,}: {files: File[]}) {
    files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
    
        await fs.writeFile(`./public/uploads/${file.name}`, buffer);
    });

    revalidatePath("/");
}