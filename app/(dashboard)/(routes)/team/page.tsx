"use client"
//import router
import { useRouter } from "next/router";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const TeamPage = () => { 
    const [teamMembers, setTeamMembers] = useState ([
        //replace all websites with a bio section
        //use react useState to have a nice z index display effect so when a user click's on bio it will display the bio
        {
            name: 'David Robinson',
            role: 'Operations Manager',
            image: 'https://cdn.nostr.build/p/nb7511.jpg',
            twitter: 'https://twitter.com/davidrobinson',
            bio: 'David is responsible for managing our operations...',
        },
        {
            name: 'Brendan',
            twitter: 'https://twitter.com/BrendanQuinn84',
            role: 'Founder & CEO',
            image: 'https://cdn.nostr.build/p/nb7148.jpeg',
            bio: 'Brendan is the visionary leader behind our company...',
        },
        {
            name: 'Ron',
            twitter: 'https://twitter.com/rounakskm',
            role: 'Founder & CEO',
            website: 'ron.html',
            image: 'https://cdn.nostr.build/p/nb7148.jpeg',
        },
        {
            name: 'Conor',
            twitter: 'https://twitter.com/ConorChepenik',
            role: 'Founder & CEO',
            website: 'conor.html',
            image: 'https://cdn.nostr.build/p/nb7148.jpeg',
        },
        {
            name: 'Jeff',
            twitter: 'https://twitter.com/BTC_MS_THRIVING',
            role: 'Founder & CEO',
            website: 'jeff.html',
            image: 'https://cdn.nostr.build/p/nb7148.jpeg',
        },
        {
            name: 'Phil',
            twitter: 'https://twitter.com/NEEDcreations',
            role: 'Founder & CEO',
            website: 'phil.html',
            image: 'https://cdn.nostr.build/p/nb7148.jpeg',
        },
        {
            name: 'Brandon',
            twitter: 'https://twitter.com/BitcoinDale',
            role: 'Founder & CEO',
            website: 'brandon.html',
            image: 'https://cdn.nostr.build/p/nb7148.jpeg',
        },
        {
            name: 'Greg',
            twitter: 'https://twitter.com/gwhoffmeister',
            role: 'Founder & CEO',
            website: 'greg.html',
            image: 'https://cdn.nostr.build/p/nb7148.jpeg',
        }
        // Add more team members as needed
    ]);

    const [selectedMember, setSelectedMember] = useState(null);

    const handleBioClick = (index: number) => {
        alert(`${teamMembers[index].bio}`);
    };

    const handleClose = () => {
        setSelectedMember(null);
      };

    const handleXClick = (index: number) => {
        window.open(`${teamMembers[index].twitter}`, '_blank');
    };


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
                            <Button className='bg-orange-600 hover:bg-primary/90'
                                onClick={() => handleBioClick(index)}
                            >
                                <p>Bio</p>
                            </Button>
                            <Button className='bg-orange-600 hover:bg-primary/90'
                                onClick={() => handleXClick(index)}
                            >
                                <p>X</p>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TeamPage;