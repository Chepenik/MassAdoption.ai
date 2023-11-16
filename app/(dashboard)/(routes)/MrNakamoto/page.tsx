"use client"

import Image from "next/image";

export default function MrNakamotoPage() {
    return (
        <div className="m-4 text-white min-h-screen flex flex-col items-center justify-center text-center py-16">
            <h1 className="mb-2.5">Introducing Mr. Nakamoto, a Bitcoin LLM designed to answer any question about Bitcoin with accuracy and detail. Mr. Nakamoto is made to deliver pure signal ;D</h1>
            <div className="rounded-full overflow-hidden">
                <a href="https://chat.openai.com/g/g-2Z9CpJRSs-mr-nakamoto" target="_blank" rel="noopener noreferrer">
                    <Image 
                        src="/mrnakamoto.jpg"
                        alt="Mr. Nakamoto"
                        width={500}
                        height={500}
                        layout="responsive"
                    />
                </a>
            </div>
        </div>
    );
};
