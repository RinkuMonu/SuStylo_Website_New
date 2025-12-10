// "use client";
// import Image from 'next/image';
// import Link from 'next/link'
// import React from 'react'



// const experts = [
//     {
//         name: "Alisa Menon",
//         role: "Makeup expert",
//         imgUrl: "/Home/expert1.png",
//         rating: 4.5
//     },
//     {
//         name: "Alisa Menon",
//         role: "Makeup expert",
//         imgUrl: "/Home/expert2.png",
//         rating: 4.5
//     },
//     {
//         name: "Alisa Menon",
//         role: "Makeup expert",
//         imgUrl: "/Home/expert3.png",
//         rating: 4.5
//     },
//     {
//         name: "Alisa Menon",
//         role: "Makeup expert",
//         imgUrl: "/Home/expert4.png",
//         rating: 4.5
//     }
// ];
// export default function HomeFreelancer() {
//     return (
//         <>
//             <section className='my-12'>
//                 <div className='flex justify-between items-center'>
//                     <h3 className="text-[24px] font-bold uppercase underline decoration-[#717171] ">CHOOSE YOUR FREELANCER</h3>
//                     <Link href={"/freelancerList"} className='text-[14px] bg-[#637571] text-white p-2 px-3 rounded-[10px]'>View more</Link>
//                 </div>
//                 <div className="py-10">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                         {experts.map((expert, idx) => (
//                             <Link href={"/freelancerList"} key={idx} className="rounded-2xl relative overflow-hidden flex flex-col items-center">
//                                 <div className="w-64  relative h-44 rounded-2xl overflow-hidden">
//                                     <Image
//                                         src={expert.imgUrl}
//                                         alt={expert.name}
//                                         fill
//                                         className="object-cover rounded-2xl"
//                                     />
//                                     <span className="absolute bottom-3 right-3 flex items-center bg-[#f4ecd3] px-2 py-1 rounded-full text-sm font-medium text-gray-800 shadow">
//                                         <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.845 12 .967 7.91l7.156-.616L10 0l1.877 7.294 7.156.616-4.878 4.09 1.723 5.18z"></path></svg>
//                                         {expert.rating}
//                                     </span>
//                                 </div>
//                                 <div className="py-3 w-full text-center">
//                                     <div className="text-[20px]  font-semibold text-black">{expert.name}</div>
//                                     <div className="text-[#617772] text-[15px] mt-1">{expert.role}</div>
//                                 </div>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </section>


//         </>
//     )
// }

// uper static UI hai 


"use client";
import Image from 'next/image';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import axiosInstance from '../src/app/axios/axiosinstance';

export default function HomeFreelancer() {
    const [freelancers, setFreelancers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch freelancers from API
    useEffect(() => {
        const fetchFreelancers = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get('/freelancer');
                
                if (response.data.success) {
                    // Transform API data to match your UI structure
                    const transformedFreelancers = response.data.freelancers
                        .filter(freelancer => freelancer.isActive && freelancer.approvalStatus === "approved")
                        .slice(0, 4) // Take only first 4 for homepage
                        .map(freelancer => ({
                            id: freelancer._id,
                            name: freelancer.fullName || "Freelancer",
                            role: getExpertiseFromServices(freelancer.services) || "Beauty Expert",
                            imgUrl: freelancer.photos?.[0] || getDefaultFreelancerImage(freelancer.fullName),
                            rating: freelancer.rating?.average || 4.5,
                            services: freelancer.services || [],
                            experience: freelancer.experience || 0,
                            transportCharge: freelancer.transportCharge || 0
                        }));
                    
                    setFreelancers(transformedFreelancers);
                }
            } catch (err) {
                console.error("Error fetching freelancers:", err);
                setError("Failed to load freelancers. Please try again.");
                
                // Fallback to static data if API fails
                const fallbackFreelancers = [
                    {
                        name: "Alisa Menon",
                        role: "Makeup expert",
                        imgUrl: "/Home/expert1.png",
                        rating: 4.5
                    },
                    {
                        name: "Alisa Menon",
                        role: "Makeup expert",
                        imgUrl: "/Home/expert2.png",
                        rating: 4.5
                    },
                    {
                        name: "Alisa Menon",
                        role: "Makeup expert",
                        imgUrl: "/Home/expert3.png",
                        rating: 4.5
                    },
                    {
                        name: "Alisa Menon",
                        role: "Makeup expert",
                        imgUrl: "/Home/expert4.png",
                        rating: 4.5
                    }
                ];
                setFreelancers(fallbackFreelancers);
            } finally {
                setLoading(false);
            }
        };

        fetchFreelancers();
    }, []);

    // Helper function to extract expertise from services
    const getExpertiseFromServices = (services) => {
        if (!services || services.length === 0) return "Beauty Expert";
        
        // Get unique categories from services
        const categories = services.map(service => service.categoryId?.name)
            .filter(Boolean)
            .filter((value, index, self) => self.indexOf(value) === index);
        
        if (categories.length > 0) {
            return `${categories[0]} Expert`;
        }
        
        // Get from service names
        const firstService = services[0];
        if (firstService?.name) {
            const serviceName = firstService.name.toLowerCase();
            if (serviceName.includes('makeup')) return "Makeup Expert";
            if (serviceName.includes('hair')) return "Hair Stylist";
            if (serviceName.includes('facial')) return "Facial Expert";
            if (serviceName.includes('massage')) return "Massage Therapist";
            if (serviceName.includes('spa')) return "SPA Therapist";
        }
        
        return "Beauty Expert";
    };

    // Helper function for default image based on name
    const getDefaultFreelancerImage = (name) => {
        const images = [
            "/Home/expert1.png",
            "/Home/expert2.png",
            "/Home/expert3.png",
            "/Home/expert4.png"
        ];
        
        // Simple hash based on name for consistent image selection
        const hash = name?.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) || 0;
        return images[hash % images.length];
    };

    // Loading state
    if (loading) {
        return (
            <section className='my-12'>
                <div className='flex justify-between items-center'>
                    <h3 className="text-[24px] font-bold uppercase underline decoration-[#717171] ">CHOOSE YOUR FREELANCER</h3>
                    <Link href={"/freelancerList"} className='text-[14px] bg-[#637571] text-white p-2 px-3 rounded-[10px]'>View more</Link>
                </div>
                <div className="py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((_, idx) => (
                            <div key={idx} className="rounded-2xl relative overflow-hidden flex flex-col items-center animate-pulse">
                                <div className="w-64 h-44 bg-gray-300 rounded-2xl"></div>
                                <div className="py-3 w-full text-center">
                                    <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Error state (but still show View more button)
    if (error && freelancers.length === 0) {
        return (
            <section className='my-12'>
                <div className='flex justify-between items-center'>
                    <h3 className="text-[24px] font-bold uppercase underline decoration-[#717171] ">CHOOSE YOUR FREELANCER</h3>
                    <Link href={"/freelancerList"} className='text-[14px] bg-[#637571] text-white p-2 px-3 rounded-[10px]'>View more</Link>
                </div>
                <div className="py-10 text-center text-red-600">
                    <p>{error}</p>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className='my-12'>
                <div className='flex justify-between items-center'>
                    <h3 className="text-[24px] font-bold uppercase underline decoration-[#717171] ">CHOOSE YOUR FREELANCER</h3>
                    <Link href={"/freelancerList"} className='text-[14px] bg-[#637571] text-white p-2 px-3 rounded-[10px]'>View more</Link>
                </div>
                <div className="py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {freelancers.map((freelancer, idx) => (
                            <Link 
                                href={`/freelancerList${freelancer.id ? `?freelancer=${freelancer.id}` : ''}`} 
                                key={freelancer.id || idx} 
                                className="rounded-2xl relative overflow-hidden flex flex-col items-center hover:transform hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div className="w-64 relative h-44 rounded-2xl overflow-hidden">
                                    <Image
                                        src={freelancer.imgUrl}
                                        alt={freelancer.name}
                                        fill
                                        className="object-cover rounded-2xl"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    <span className="absolute bottom-3 right-3 flex items-center bg-[#f4ecd3] px-2 py-1 rounded-full text-sm font-medium text-gray-800 shadow">
                                        <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.845 12 .967 7.91l7.156-.616L10 0l1.877 7.294 7.156.616-4.878 4.09 1.723 5.18z"></path></svg>
                                        {freelancer.rating}
                                    </span>
                                </div>
                                <div className="py-3 w-full text-center">
                                    <div className="text-[20px] font-semibold text-black">{freelancer.name}</div>
                                    <div className="text-[#617772] text-[15px] mt-1">{freelancer.role}</div>
                                    {/* {freelancer.experience > 0 && (
                                        <div className="text-[12px] text-gray-500 mt-1">
                                            {freelancer.experience} years experience
                                        </div>
                                    )} */}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}