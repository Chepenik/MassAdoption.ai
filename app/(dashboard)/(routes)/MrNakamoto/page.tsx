"use client"

import Image from "next/image";

export default function MrNakamotoPage() {
    return (
        <div className="m-4 text-white min-h-screen flex flex-col items-center justify-center text-center py-16 bg-black">
            <h1 className="m-6 text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">Introducing Mr. Nakamoto, a Bitcoin LLM designed to answer any question about Bitcoin with accuracy and detail. Our own LLM is coming soon but in the meantime click the photo below for a GPT trained on bitcoin data!</h1>
            <div className="relative group">
                <a href="https://chat.openai.com/g/g-2Z9CpJRSs-mr-nakamoto" target="_blank" rel="noopener noreferrer" className="rounded-lg overflow-hidden block shadow-lg">
                    <Image 
                        src="/mrnakamoto.jpg"
                        alt="Mr. Nakamoto"
                        width={500}
                        height={500}
                        layout="intrinsic"
                        className="transition duration-500 ease-in-out transform group-hover:scale-105"
                    />
                </a>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-2">
                    <p className="text-white text-base md:text-lg font-medium">Click Here</p>
                </div>
            </div>
        </div>
    );
};
