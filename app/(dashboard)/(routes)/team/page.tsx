"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const TeamPage = () => { 
    const [teamMembers, setTeamMembers] = useState ([
        {
            name: 'Greg',
            twitter: 'https://twitter.com/gwhoffmeister',
            role: 'Founder',
            image: 'https://i.nostr.build/vR96.jpg',
            bio: 'Greg is a founding member of MassAdoption. He is a descendant of Mayflower passenger Stephen Hopkins and Revolutionary War soldier Seth Hopkins. He spent 25 years in commercial real estate and now coaches high school football, brews beer, and raises awareness of Bitcoin.',
        },
        {
            name: 'Brendan',
            twitter: 'https://twitter.com/BrendanQuinn84',
            role: 'Advisor',
            image: 'https://i.nostr.build/jqw5.jpg',
            bio: 'Brendan is a lifelong learner and Advisor at Cantilever where he helps people leverage digital assets. Cantilvers investment framework is Bitcoin first. ',
        },
        {
            name: 'Jeff',
            twitter: 'https://twitter.com/BTC_MS_THRIVING',
            role: 'Founder',
            image: 'https://i.nostr.build/PYr8.jpg',
            bio: 'Jeff holds an accounting degree from the University of Massachusetts Business School and initially worked in public accounting. After gaining a profound understanding of financial statements, he built a successful chain of 40 high-end consignment stores across the U.S., eventually selling his stake to a private equity firm in 2009 and completing the sale in 2011. Following a non-compete agreement in the U.S., he expanded to Toronto, establishing an 18-store chain of used and vintage clothing shops. Health concerns led him to pass the CEO role to another in 2016, but in 2017, he returned to entrepreneurship with vintage clothing and sneaker stores in downtown Boston. Facing the challenges of the pandemic in 2020, Jeff made the strategic decision to close his retail businesses, allowing him to immerse himself in the world of Bitcoin.'
        },
        {
            name: 'Ron',
            twitter: 'https://twitter.com/rounakskm',
            role: 'AI Engineer',
            image: 'https://i.nostr.build/8mR4.jpg',
            bio: 'Ron is a machine learning engineer who fell down the Bitcoin rabbit hole. He enjoys leveraging lightning and orange pilling other devs to get involved with Bitcoin.'
        },
        {
            name: 'Conor',
            twitter: 'https://twitter.com/ConorChepenik',
            role: 'Lead Developer',
            image: 'https://i.nostr.build/WklY.jpg',
            bio: 'Conor graduated from Tufts University in 2020, he is a father & Bitcoiner determined to make sure his daughter can grow up in a world where money is backed by open-source software and math rather than violence. Conor is also on Nostr @ npub16syt2k5uky4pxycfttxrxmwwzht2t3008f2q68kw4almjl4guu9qea8t7y or use my NIP 5 Binmucker.'
        },
        {
            name: 'Phil',
            twitter: 'https://twitter.com/NEEDcreations',
            role: 'Project Manager',
            image: 'https://i.nostr.build/3D4X.jpg',
            bio: 'Phil is a Bitcoin educator, node runner and home miner. Phils accomplishments in the Bitcoin space include creating and managing a Bitcoin Education Discord, creating 2 Bitcoin products with Satoshis Journal (educational playing cards and a childrens book), and working as the project manager for Mass Adoptions Freedom Festival.'
        },
        {
            name: 'Brandon',
            twitter: 'https://twitter.com/BTCNationalist',
            role: 'AI engineer',
            image: 'https://i.nostr.build/l38G.jpg',
            bio: 'Brandon is an engineer specializing in power generation. He believes Bitcoin is the embodiment of extreme ownership, and a tool to achieve sovereignty. Brandon also believes that Bitcoin will dematerialize the cost of energy which will improve the lives of everyone on Earth.'
        }
    ]);

    const [selectedMember, setSelectedMember] = useState(null);

    const handleBioClick = (index: number) => {
        alert(`${teamMembers[index].bio}`);
    };

    const handleXClick = (index: number) => {
        window.open(`${teamMembers[index].twitter}`, '_blank');
    };

    const handleUseClientClick = (index: number) => {
        alert(`Use Client clicked for ${teamMembers[index].name}`);
    };

    return (
        <section className="bg-gray-200 py-16">
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
                        <div className="mt-4 flex justify-center space-x-4">
                            <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter text-blue-500 text-xl"></i>
                            </a>
                            <Button  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded" onClick={() => handleXClick(index)}>
                                X
                            </Button>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded" onClick={() => handleBioClick(index)}>
                                Bio
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TeamPage;