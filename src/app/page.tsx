import Image from "next/image";
import Uploader from "@/ui/uploader/Uploader";
import LastUploadedImages from "@/ui/uploader/LastUploadedImages";
import Informer from "@/ui/informer/Informer";

export default async function Home() {
    
  return (
    <main className="flex min-h-screen flex-col items-center">
        <div className="w-full center-div main-text">
            <h1>Folwark Wrzosówka</h1>
            <h1>24-26.08.2024</h1>
        </div>
        
        <div className="relative aspect-square main-logo">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/logo.jpeg"
          alt="App Logo"
          layout="fill"
          priority
        />
        </div>

        <div className="w-full center-div main-description">
            <h1>Wyślij nam zdjęcia i filmy, a my zrobimy z tym coś fajnego!</h1>
        </div>
        <div className="w-full">
            <Uploader/>
            {/*<LastUploadedImages/>*/}
        </div>
        <Informer/>
    </main>
  );
}
