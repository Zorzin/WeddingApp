"use client"

import {useState} from "react";
import Image from 'next/image';
import {Button} from "@/ui/button";
import "../uploader.css";

export default function Uploader() {
    const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);

    const handlePhotoChange = (e: any) => {
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
            const data = new FormData()
            selectedPhotos.map((selectedPhoto) => {
                data.append('imageFile', selectedPhoto)
            })

            const response = await fetch('/photoupload', {
                method: 'POST',
                body: data
            });

            if (response.ok) {
                setSelectedPhotos([]);
                alert('Zdjęcia i filmy zostały wysłane! Dzięki!');
            }
        } catch (error) {
            alert('Błąd podczas wysyłania zdjęć i filmów, spróbuj ponownie (ale to nie pomoże, więc odśwież stronę i powinno działać).');
            console.error('Error:', error);
        }
    }

    return (
        <div className="w-full">
            <div className="photo-uploader-center">
                <input
                    id="fileInput"
                    hidden
                    type="file"
                    accept="image/*"
                    multiple // Allow multiple file selection
                    onChange={handlePhotoChange}
                />
                <Button className="photo-selector-button orange">
                    <label className="photo-selector-button-label" htmlFor="fileInput">{selectedPhotos.length > 0 && ("Wybierz inne zdjęcia lub filmy!")} {selectedPhotos.length == 0 && ("Wybierz zdjęcia lub filmy!")}</label>
                </Button>
            </div>
            {
                selectedPhotos.length > 0 && (
                    <div className="photo-uploader-center">
                        <div key="photolist" className="photoList">
                            {selectedPhotos.map((photo, index) => (
                                <div key={index} className="relative aspect-square">
                                <Image
                                        alt="preview"
                                        fill={true}
                                        objectFit="cover"
                                        src={URL.createObjectURL(photo)}
                                    />
                                    <div className="photo-uploader-remove-button" 
                                             onClick={() => handleRemovePhoto(index)}>x</div>
                                </div>
                            ))}
                        </div>

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

    );
}