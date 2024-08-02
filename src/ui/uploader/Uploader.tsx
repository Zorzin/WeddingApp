"use client"

import {CSSProperties, useState} from "react";
import Image from 'next/image';
import {Button} from "@/ui/button";
import "../uploader.css";
import {ClipLoader} from "react-spinners";

export default function Uploader() {
    const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const override: CSSProperties = {
        zIndex: 900,
        margin: "0 auto",
    };


    const handlePhotoChange = (e: any) => {
        console.log(e.target.files);
        setSelectedPhotos(Array.from(e.target.files)); // Convert FileList to array
    };

    const handleRemovePhoto = (index: number) => {
        setSelectedPhotos(selectedPhotos.filter((_, i) => i !== index)); // Remove photo at given index
    };

    const handleRemoveAll = async () => {
        try {
            setSelectedPhotos([]);
        } catch (error) {
            console.error('Error while removing all selected photos:', error);
            alert('Error, try again (but it will not help, so reload page and that should work).');
        }
    }

    const handleUpload = async () => {
        try {
            setLoading(true);
            const data = new FormData()
            selectedPhotos.map((selectedPhoto) => {
                data.append('imageFile', selectedPhoto)
            })

            const response = await fetch('/photoupload', {
                method: 'POST',
                body: data
            });
            console.log(response);

            if (response.ok) {
                console.log("response" + response);
                setSelectedPhotos([]);
                alert('Zdjęcia i filmy zostały wysłane! Dzięki!');
            }
        } catch (error) {
            alert('Błąd podczas wysyłania zdjęć i filmów, spróbuj ponownie (ale to nie pomoże, więc odśwież stronę i powinno działać).');
            console.error('Error:', error);
        }
        setLoading(false);
    }

    return (
        <div>
            <div className="w-full">
                <div className="photo-uploader-center">
                    <input
                        id="fileInput"
                        hidden
                        type="file"
                        accept="image/*,video/*"
                        multiple // Allow multiple file selection
                        onChange={handlePhotoChange}
                    />
                    <Button className="photo-selector-button orange">
                        <label className="photo-selector-button-label"
                               htmlFor="fileInput">{selectedPhotos.length > 0 && ("Wybierz inne zdjęcia lub filmy!")} {selectedPhotos.length == 0 && ("Wybierz zdjęcia lub filmy!")}</label>
                    </Button>
                </div>
                {
                    selectedPhotos.length > 0 && (
                        <div className="photo-uploader-center">
                            <div key="photolist" className="photoList">
                                {selectedPhotos.map((file, index) => (
                                    <div key={index} className="relative aspect-square">
                                        {
                                            file.type.includes('video') && (
                                                <video
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="object-cover w-full h-full absolute"
                                                    src={URL.createObjectURL(file)}
                                                />)
                                        }
                                        {
                                            file.type.includes('image') && (
                                                <Image
                                                    alt="preview"
                                                    fill={true}
                                                    objectFit="cover"
                                                    src={URL.createObjectURL(file)}
                                                />)
                                        }
                                        <div className="photo-uploader-remove-button"
                                             onClick={() => handleRemovePhoto(index)}>x
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {loading && (
                            <div className="w-full h-full  text-center">
                                <p>Wysyłam...</p>
                                <ClipLoader
                                    color="#FFA500"
                                    loading={loading}
                                    size={50}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                    cssOverride={override}
                                />
                            </div>)}

                        </div>
                    )}
                {selectedPhotos.length > 0 && (
                    <div className="photo-uploader-center">
                        <Button color="error"
                                onClick={handleRemoveAll}
                                className="photo-selector-button red">
                            Wyczyść wszystko
                        </Button>
                        <Button color="secondary"
                                onClick={handleUpload}
                                className="photo-selector-button green">
                            Wyślij!
                        </Button>
                    </div>
                )}
            </div>
        </div>

    );
}