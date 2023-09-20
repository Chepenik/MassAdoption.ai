import Image from 'next/image'

export const About = () => {
    return (
        //smaller images, don't need 4 sections, make it sweet, simple
        <>
        <div className="mt-10 mb-10">
            <div className="flex flex-col md:flex-row md:justify-center">
            <div className="w-full md:w-1/2 flex justify-center">
                <Image 
                src="/justacalculator.png"
                width={300}
                height={400}
                alt='Mass Adoption Logo'
                className="max-w-md rounded-lg shadow-md hover:shadow-2xl transition duration-500"
                />
            </div>
            <div className="m-7 md:mt-0 md:w-1/2 flex flex-col justify-center ">
                <h2 className="text-2xl font-medium text-white mt-3 text-left">Our mission </h2>
                <div>
                    <p className="text-sm mt-7 mr-7 mb-7 text-orange-200 ">
                        Help others leverage Bitcoin to improve their financial freedom. 
                        We believe creating circular bitcoin economies is the key to a better world. 
                        We would love to have you join our mission by attending a meetup, contributing code, donating, & joining the discord. 
                        We are a community of Bitcoiners passionate about helping others discover the value of sound money.
                    </p>
                    </div>
                </div>
            </div>
        </div>
         <div className="mt-10 mb-10">
         <div className="flex flex-col md:flex-row md:justify-center">
         <div className="m-7 md:mt-0 md:w-1/2 flex flex-col justify-center ">
             <h2 className="text-2xl font-medium text-white mt-3 text-left"></h2>
             <div>
                 <p className="text-sm mt-7 mr-7 mb-7 text-orange-200 ">
                 Fiat is latin for 'by decree'. 
                 Fiat currencies, like the US dollar, are not backed by gold or other commodities.
                 Their value stems from government decree. 
                 Our current monetary system does rely heavily on debt. 
                 I will note fiat currencies have enabled modern economies to grow for decades because money is an incredible technology for trade and development.
                 </p>
                 </div>
             </div>
             <div className="w-full md:w-1/2 flex justify-center">
             <Image 
             src="/2.png"
             width={300}
             height={400}
             alt='Mass Adoption Logo'
             className="max-w-md rounded-lg shadow-md hover:shadow-2xl transition duration-500"
             />
         </div>
         </div>
     </div>
     <div className="mt-10 mb-10">
         <div className="flex flex-col md:flex-row md:justify-center">
         <div className="w-full md:w-1/2 flex justify-center">
             <Image 
             src="/1.png"
             width={300}
             height={400}
             alt='Mass Adoption Logo'
             className="max-w-md rounded-lg shadow-md hover:shadow-2xl transition duration-500"
             />
         </div>
         <div className="m-7 md:mt-0 md:w-1/2 flex flex-col justify-center ">
             <h2 className="text-2xl font-medium text-white mt-3 text-left"></h2>
             <div>
                 <p className="text-sm mt-7 mr-7 mb-7 text-orange-200 ">
                Money should be a store of value. 
                Not a medium of control. 
                 Bitcoin offers an intriguing alternative to fiat. 
                 By operating independently of central banks, Bitcoin provides decentralized, transparent money that anyone can access. 
                 Bitcoins fixed supply offer individuals a hedge against inflationary monetary policies.
                 We see Bitcoin as a way to shift power away from concentrated financial institutions and toward the hands of regular people. 
                While incautious disruption of economic systems could be chaotic, thoughtful integration of crypto's innovations may allow us to shape finance into a more equitable, inclusive, and empowering force for society as a whole.
                With open dialogue, compassion and wisdom, we can heal divides and collectively architect financial systems that uphold both individual freedoms as well as the greater social good.
                 </p>
                 </div>
             </div>
         </div>
     </div>
     </>
      )
    }