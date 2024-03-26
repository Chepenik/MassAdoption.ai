"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Modal from '@/components/ModalProps';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    
    const TeamPage = () => {
        const [teamMembers, setTeamMembers] = useState ([
            {
                name: 'Jeff',
                twitter: 'https://twitter.com/BTC_MS_THRIVING',
                role: 'Founder',
                image: 'https://i.nostr.build/PYr8.jpg',
                bio: 'Jeff holds an accounting degree from the University of Massachusetts Business School and initially worked in public accounting. After gaining a profound understanding of business operations and financial statements,he built a successful chain of 40 high-end consignment stores across the U.S. In 2009 Jeff sold a portion of his company to a Private Equity Firm and then in 2011 sold his remaining interest in the company to the same Private Equity Firm. Following a non-compete agreement in the U.S., he expanded to Toronto, establishing an 18-store chain of used and vintage clothing shops. Health concerns led him to pass the CEO role to another in 2016, but in 2017, he returned to entrepreneurship with vintage clothing and sneaker stores in downtown Boston. Facing the challenges of the pandemic in 2020, Jeff made the strategic decision to close his retail businesses, allowing him to immerse himself in the world of Bitcoin.'
            },
            {
                name: 'Greg',
                twitter: 'https://twitter.com/gwhoffmeister',
                role: 'Founder',
                image: 'https://i.nostr.build/vR96.jpg',
                bio: '    Greg is a founding member of MassAdoption. Gregs Massachusetts roots run deep and a passion for entrepreneurialism, freedom and revolutionary ideas are steeped in his DNA. He is the 5th generation of his family to be born and raised in the town of Needham. Gregs family tree (through his maternal grandmother Barbara Hopkins) dates back over 400 years to the earliest days of new world colonialism. Greg is a descendant of Stephen Hopkins a Mayflower passenger who was a passenger on the Mayflower that settled Plymouth plantation and was one of the original signatories of the Mayflower Compact in 1620 which declared freedom from the indentures of the Virginia Company. Greg is also a descendent of Seth Hopkins who served in the Massachusetts militia during the Revolutionary War in 1776-1778 fighting for American freedom and independence. Greg is no stranger to playing the role of David vs Goliath. He spent 25 years in the commercial real estate industry building a small boutique brokerage and advisory firm that consistently fought and won business against bigger more established players in the industry. Greg now focuses his time on coaching high school football, building his nano brewery and taproom Black Rock Brewing Company and raising community awareness of Bitcoin and the importance of separating money from state in order to protect and regain freedom and our individual inalienable rights to privacy, property, free speech and sovereignty.',
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
                bio: 'Conor is a father & Bitcoiner determined to make sure his daughter can grow up in a world where money is backed by open-source software and math rather than violence. You can find his podcast and articles at conorchepenik.com as well as enjoy the memes he shares on Nostr @ npub16syt2k5uky4pxycfttxrxmwwzht2t3008f2q68kw4almjl4guu9qea8t7y'
            },
            {
                name: 'Phil',
                twitter: 'https://twitter.com/NEEDcreations',
                role: 'Project Manager',
                image: 'https://i.nostr.build/3D4X.jpg',
                bio: 'Phil is a Bitcoin educator, node runner and home miner. Phil\'s accomplishments in the Bitcoin space include creating and managing a Bitcoin Education Discord, creating 2 Bitcoin products with Satoshis Journal (educational playing cards and a childrens book), and working as the project manager for Mass Adoptions Freedom Festival.'
            },
            {
                name: 'Brandon',
                twitter: 'https://twitter.com/BTCNationalist',
                role: 'AI engineer',
                image: 'https://i.nostr.build/l38G.jpg',
                bio: 'Brandon is an engineer specializing in power generation. He believes Bitcoin is the embodiment of extreme ownership, and a tool to achieve sovereignty. Brandon also believes that Bitcoin will dematerialize the cost of energy which will improve the lives of everyone on Earth.'
            },
            {
                name: 'Brendan',
                twitter: 'https://twitter.com/BrendanQuinn84',
                role: 'Advisor',
                image: 'https://i.nostr.build/jqw5.jpg',
                bio: 'Brendan is a lifelong learner and founding partner of Cantilever Advisors, LLC where he helps people leverage digital assets. Cantilvers investment framework is Bitcoin first.',
            },
            {
                name: 'Nick',
                twitter: 'https://twitter.com/PlebNick',
                role: 'Business Development',
                image: 'https://image.nostr.build/26b4547bfb129f41a1733f5527acfa06ee907cb0307a4930ebf6ca6549026fe6.jpg',
                bio: 'Nick is the business development guru.',
            },
            {
                name: 'Kristina',
                twitter: 'https://twitter.com/KYannotta10',
                role: 'Media Manager',
                image: 'https://image.nostr.build/bd7a04f43933c8b7b18e86d572b6c5cdd8b4e3d08536dd4043714a96df25cbdf.png',
                bio: 'Kristina is our media guru. She is the reason MassAdoption has been able to share our incredible guest speakers with the world via Youtube.',
            },
            {
                name: 'Mickey',
                twitter: 'https://twitter.com/Mickdub29',
                role: 'AI Engineer',
                image: 'https://i.nostr.build/lnXv.jpg',
                bio: 'Avid singer, runner, competitor, uncle, and friend.',
            },
            {
                name: 'Async Thoughts',
                twitter: 'https://twitter.com/async_thoughts',
                role: 'AI Engineer',
                image: 'https://i.nostr.build/8eAG.jpg',
                bio: 'Computational data market maxi.',
            },
            {
              name: 'Ken',
              twitter: 'https://twitter.com/bitcoink3n',
              role: 'Innovation Engineer ',
              image: 'https://i.nostr.build/BRgyD.png',
              bio: 'Value Creator, Next-Level Thinker, Cool Content Builder, Former Cybersecurity Researcher, MIT Rat. ',
          },
        ]);
      const [selectedMember, setSelectedMember] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [modalContent, setModalContent] = useState('');
    
      const handleBioClick = (index: number) => {
        setModalContent(teamMembers[index].bio);
        setIsModalOpen(true);
      };

      const handleXClick = (index: number) => {
        window.open(`${teamMembers[index].twitter}`, '_blank');
    };
    
      const closeModal = () => {
        setIsModalOpen(false);
        setModalContent('');
      };
    
      return (
        <section className="bg-black py-16">
          <h2 className="text-3xl text-center mb-8 font-semibold">
            <span className='text-blue-900'>Mass</span>
            <span className='text-orange-500'>Adoption's</span>
            <span className='text-white'> Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white shadow-md p-6 m-2 rounded-lg">
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
                  <Button
                    className="text-xl bg-gray-800 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded"
                    onClick={() => handleXClick(index)}
                  >
                    <FontAwesomeIcon icon={faXTwitter} className='text-white hover:text-blue-300' />
                  </Button>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded"
                    onClick={() => handleBioClick(index)}
                  >
                    Bio
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
        </section>
      );
    };
    
    export default TeamPage;
    