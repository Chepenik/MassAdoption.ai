"use client"

import Image from "next/image";

export default function MrNakamotoPage() {
    return (
        <div className="m-4 text-white min-h-screen flex flex-col items-center justify-center text-center py-16">
            <h1 className="mb-2.5">Introducing Mr. Nakamoto, a Bitcoin LLM designed to answer any question about Bitcoin with accuracy and detail. Mr. Nakamoto is made to deliver pure signal and he will be released in October!</h1>
            <div className="rounded-full overflow-hidden">
                <Image 
                    src="/mrnakamoto.jpg"
                    alt="Mr. Nakamoto"
                    width={500}
                    height={500}
                    layout="responsive"
                />
            </div>
        </div>
    );
};
