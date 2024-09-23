"use client";

import React, {useEffect, useState} from "react";
import Image from "next/image";
import {router} from "next/client";
import {useRouter} from "next/navigation";
import "./album.css";
import {Button} from "@/ui/button";

export default function Album() {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [passwordIncorrect, setPasswordIncorrect] = useState(false)
    const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);


    const handleSubmit = (e: React.FormEvent) => {
        const onSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setLoading(true);
            const request = await fetch(`/api`, {
                body: JSON.stringify({password}),
                headers: {"Content-Type": "application/json"},
                method: "post",
            });

            if (request.status !== 200) {
                setPasswordIncorrect(true);
                setLoading(false);
            } else {
                setLoggedIn(true);
                setPasswordIncorrect(false);
                setLoading(false);
            }
        };
        onSubmit(e);
    };

    function GoBack() {
        router.push('/');
    }

    function GoAnalog() {
        router.push('https://www.icloud.com/sharedalbum/#B0bGf693ZsFGzna');
    }

    function GoSocial() {
        router.push('https://www.icloud.com/sharedalbum/#B0b55Z2WMtqp7jn');
    }

    function GoPro() {
        router.push('https://www.icloud.com/sharedalbum/#B0b5VaUrzsmjsnK');
    }

    function GoPeople() {
        router.push('https://www.icloud.com/sharedalbum/#B0bGDdyTv0jTOnX');
    }

    return (
        <div className="w-full flex items-center flex-col min-h-dvh">
            <div className="text-left w-full">
                <div className="ml-12 mt-6"><Image src={"/undo.png"} alt="arrow" height={30} width={30} unoptimized
                                                   onClick={GoBack}/>
                </div>
            </div>

            <div className="albumBody">
                <div className="albumBody-content  flex items-center flex-col justify-start">
                    <p className="justify-items-start mt-10 text-2xl">Albumy</p>
                    <div className="password-prompt-dialog">
                        {!loggedIn &&
                            <form onSubmit={handleSubmit}>
                                <div className="flex items-center flex-col mt-40">
                                    <label htmlFor="password" className="mb-4">Podaj hasło:</label>
                                    <input type="password" id="password" value={password}
                                           onChange={(e) => setPassword(e.target.value)}
                                           className="mb-4 border-none text-center"/>
                                    <button type="submit">Wyślij</button>
                                </div>
                            </form>
                        }
                        {loggedIn &&
                            <>
                                <div
                                    className="grid grid-cols-2 gap-x-5 gap-y-5 p-5 grid-container aspect-square mt-20">
                                    <div
                                        className="w-full h-full min-h-32 flex justify-center items-center align-bottom overflow-hidden aspect-square">
                                        <Image src="/album/analog.jpg" alt="analog"
                                               width={250}
                                               height={0}
                                               onClick={GoAnalog}
                                               style={{
                                                   minWidth: '100%',
                                                   minHeight: '100%',
                                                   flexShrink: 0,
                                                   objectFit: 'cover'
                                               }}
                                               priority/>

                                        <div className="absolute image-text">
                                            <p className="text-center text-white"
                                               onClick={GoAnalog}>Analogi</p>
                                        </div>
                                    </div>
                                    <div
                                        className="w-full h-full min-h-32 flex justify-center items-center align-middle overflow-hidden">
                                        <Image src="/album/people.jpg" alt="people"
                                               width={250}
                                               height={0}
                                               onClick={GoPeople}
                                               style={{
                                                   height: '100%',
                                                   width: 'auto',
                                                   minWidth: '100%',
                                                   minHeight: '100%',
                                                   flexShrink: 0,
                                                   objectFit: 'cover'
                                               }}
                                               priority/>

                                        <div className="absolute image-text">
                                            <p className="text-center text-white"
                                               onClick={GoPeople}>Od Was</p>
                                        </div>
                                    </div>
                                    <div
                                        className="w-full h-full min-h-32 flex justify-center items-center align-middle overflow-hidden">
                                        <Image src="/album/pro.jpg" alt="pro"
                                               width={250}
                                               height={0}
                                               onClick={GoPro}
                                               style={{
                                                   height: '100%',
                                                   width: 'auto',
                                                   minWidth: '100%',
                                                   minHeight: '100%',
                                                   flexShrink: 0,
                                                   objectFit: 'cover'
                                               }}
                                               priority/>

                                        <div className="absolute image-text">
                                            <p className="text-center text-white"
                                               onClick={GoPro}>Pro</p>
                                        </div>
                                    </div>
                                    <div
                                        className="w-full h-full min-h-32 flex justify-center items-center align-middle overflow-hidden">
                                        <Image src="/album/social.jpg" alt="social"
                                               width={250}
                                               height={0}
                                               onClick={GoSocial}
                                               style={{
                                                   height: '100%',
                                                   width: 'auto',
                                                   minWidth: '100%',
                                                   minHeight: '100%',
                                                   flexShrink: 0,
                                                   objectFit: 'cover'
                                               }}
                                               priority/>

                                        <div className="absolute image-text">
                                            <p className="text-center text-white"
                                               onClick={GoSocial}>Social</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}