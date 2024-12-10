"use client";

export default function Meetup() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-6">
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
                <div className="p-8">
                    <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-400">MASSADOPTION ADVISORY SERVICES</h1>
                    <p className="text-lg text-gray-300 mb-4 text-center">
                        Let us help you buy, secure, and manage your Bitcoin so you can sleep well at night knowing your wealth is protected.
                    </p>
                    <p className="text-lg text-gray-300 mb-6 text-center">
                        Our comprehensive services include:
                    </p>
                    <ul className="list-disc list-inside text-gray-200 space-y-2 mb-6">
                        <li>Buying Bitcoin using exchanges</li>
                        <li>Custody (Wallets) and security</li>
                        <li>Education and advice</li>
                        <li>Setting up and managing nodes</li>
                        <li>Bitcoin mining setup and strategies</li>
                        <li>Retirement planning with Bitcoin</li>
                        <li>Risk management</li>
                        <li>Family and inheritance planning</li>
                    </ul>
                    <div className="bg-blue-600 text-white text-center py-4 rounded-lg shadow-lg hover:bg-blue-500 transition-all">
                        <a
                            href="https://calendly.com/massadoptionbtc?hide_landing_page_details=1&hide_gdpr_banner=1"
                            className="text-xl font-bold tracking-wide"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Schedule a Free Consultation
                        </a>
                    </div>
                </div>
                <div className="p-8 text-center">
                    <p className="text-gray-300">
                        Have questions? Email us at{" "}
                        <a
                            href="mailto:MassAdoptionbtc@gmail.com"
                            className="text-blue-400 hover:underline"
                        >
                            MassAdoptionbtc@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
