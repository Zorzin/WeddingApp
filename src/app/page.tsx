import Image from "next/image";
import Uploader from "@/ui/uploader/Uploader";
import LastUploadedImages from "@/ui/uploader/LastUploadedImages";
import Informer from "@/ui/informer/Informer";

export default async function Home() {
    
  return (
    <main className="flex min-h-screen flex-col items-center">
        <div className="max-w-90p main-page">
            <div className="main-content">
                <div className="w-full center-div main-text">
                    <p className="pt-10 text-2xl">Było wybornie! Dziękujemy!</p>
                </div>

                <div className="relative aspect-square main-logo">
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                        src="/logo-new.jpg"
                        alt="App Logo"
                        width={500}
                        height={8900}
                        priority
                    />
                </div>

                <div className="w-full center-div flex items-center justify-center pb-8">

                    <iframe width="270" height="480" src="https://www.youtube.com/embed/dtiSbwEBj7Y?si=z41sRsQOZmJbqWFY"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </main>
  );
}
