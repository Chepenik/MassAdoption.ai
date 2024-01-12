"use client"

export default function Meetup() {
    return (
        <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center p-4">
            <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-semibold mb-4">Start a Meetup</h1>
                <p className="mb-4">
                    Have you always thought about starting a meetup? Do your normie friend's eyes glaze over when you talk to them about Bitcoin? Are you looking to build your own Bitcoin network in your area? Don’t worry, MassAdoption is here to help.
                </p>
                <p>
                    Please email us at <a href="mailto:MassAdoptionbtc@gmail.com" className="text-blue-400 hover:text-blue-300">MassAdoptionbtc@gmail.com</a> to get started!
                </p>
            </div>
        </div>
    );
};
