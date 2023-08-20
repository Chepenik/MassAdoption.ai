"use client"

import React from 'react';

const Team = () => {
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'Founder & CEO',
            image: 'https://cdn.nostr.build/p/nb7511.jpg',
            twitter: 'https://twitter.com/johndoe',
            website: 'https://www.johndoe.com',
        },
        {
            name: 'Jane Smith',
            role: 'Creative Director',
            image: 'https://cdn.nostr.build/p/nb7511.jpg',
            twitter: 'https://twitter.com/janesmith',
            website: 'https://www.janesmith.com',
        },
        // Add more team members as needed
    ];

    return (
        <section className="bg-gray-100 py-16">
            <h2 className="text-3xl text-center mb-8 font-semibold">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-gray-500">{member.role}</p>
                        <div className="mt-4 flex space-x-4">
                            <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter text-blue-500 text-xl"></i>
                            </a>
                            <a href={member.website} target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-user-circle text-green-500 text-xl"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;
