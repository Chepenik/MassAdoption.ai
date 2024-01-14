"use client"

export default function Meetup() {
    return (
        <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center p-4">
            <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-semibold mb-4">MASSADOPTION ADVISORY SERVICES </h1>
                <ul className="list-decimal list-inside mb-4">
                    <p>Will help you buy, secure and manage your bitcoin so you will sleep well at night knowing your wealth is protected.</p>
                    <br />
                    <p>Our services include:</p>
                    <br />
                    <li>-Buying bitcoin using exchanges </li>
                    <li>-Custody (Wallets) and security </li>
                    <li>-Education and advice </li>
                    <li>-Retirement </li>
                    <li>-Risk Management </li>
                    <li>-Family/inheritance planning</li>
                </ul>
                <p>
                    Please email us at <a href="mailto:MassAdoptionbtc@gmail.com" className="text-blue-400 hover:text-blue-300">MassAdoptionbtc@gmail.com</a> to learn more!
                </p>
            </div>
        </div>
    );
};
