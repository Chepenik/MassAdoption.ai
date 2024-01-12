"use client"

export default function Meetup() {
    return (
        <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center p-4">
            <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-semibold mb-4">We offer advisory services for </h1>
                <ul className="list-decimal list-inside mb-4">
                    <li>How to start a meetup</li>
                    <li>Finding locations for meetups</li>
                    <li>Assistance in technical requirements to start a meetup</li>
                    <li>Leverage MassAdoption’s marketing power/network</li>
                    <li>How to attract and build meetups</li>
                    <li>How to start a Bitcoin speaker/workshop series</li>
                    <li>MassAdoption will always be available to help you with any challenges in building a meetup.</li>
                </ul>
                <p>
                    Please email us at <a href="mailto:MassAdoptionbtc@gmail.com" className="text-blue-400 hover:text-blue-300">MassAdoptionbtc@gmail.com</a> to learn more!
                </p>
            </div>
        </div>
    );
};
