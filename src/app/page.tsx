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
                    <h1 className="pt-10">To nie są ćwiczenia!</h1>
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

                <div className="w-full center-div main-description-plan">
                    <h1>Zobacz co dla Was przygotowaliśmy!</h1>
                </div>
                <Informer/>
            </div>
        </div>
    </main>
  );
}
