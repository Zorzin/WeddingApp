import Image from "next/image";
import fs from "node:fs/promises";

export default async function LastUploadedImages() {
    const files = await fs.readdir("./public/uploads");
    const images = files
        .slice(0, 4)
        .map((file) => `/uploads/${file}`);
    
    return (
        <div className="flex flex-wrap">
            <h1>Sneak peak tego, co już wrzuciliście!</h1>
            {images.map((image) => (
                <div key={image}>
                    <Image
                        key={image}
                        src={image}
                        width={400}
                        height={400}
                        alt={image}
                        className="object-cover w-full"
                    />
                </div>
            ))}
        </div>
    );
}