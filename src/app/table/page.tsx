"use client"

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import "./table.css";
import { useDebouncedCallback } from "use-debounce";
import TableContent from "@/ui/TableContent/TableContent";
import {Suspense} from "react";


export default function Table() {
    const router = useRouter();
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const query = searchParams.get('query');

    function GoBack() {
        router.push('/');
    }

    const handleSearch = useDebouncedCallback((term: string) => {

        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="w-full items-center flex flex-col">
            <div className="text-left w-full">
                <div className="ml-12 mt-6"><Image src={"/undo.png"} alt="arrow" height={30} width={30} unoptimized
                                                   onClick={GoBack}/></div>
            </div>
            <div className="tableBody">
                <div className="tableContent pl-6 pr-6">
                    <h1 className="mt-4 mb-2">Podaj swoje imię i nazwisko:</h1>
                    <Suspense>
                        <input
                            className="mr-6 peer text-center block w-full rounded-md border border-gray-200 py-[9px] pl-2 pr-2 text-sm outline-2 placeholder:text-gray-500"
                            placeholder="Imię i nazwisko"
                            onChange={(e) => {
                                handleSearch(e.target.value);
                            }}
                            defaultValue={searchParams.get('query')?.toString()}/>
                    </Suspense>

                    {query && <TableContent params={{value: query}}/>}
                </div>
            </div>
        </div>
    )
}