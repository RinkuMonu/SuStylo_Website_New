import React from 'react'

export default function HomeAbout() {
    return (
        <>
            <section className='min-h-screen mt-10 bg-no-repeat bg-cover flex flex-col justify-center items-center ' id="about-section" style={{ backgroundImage: "url(/Home/HAbout.png)" }}>

                <div className='w-[36%] text-left h-100'>
                    <h3 className='text-[32px] font-bold'>About Us</h3>
                    {/* <p className='text-[20px] leading-10 font-normal'>Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum Lorem ipsumolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum</p> */}
                    <p className='text-[20px] leading-10 font-normal'>
                        Sustylos is a platform that connects users with nearby salons and professional freelancers for beauty and grooming services. Our goal is to make booking easy, transparent, and hassle-free. Whether you want to visit a salon or prefer home service, you can explore prices, check availability, compare options, and book instantly. We work with trusted salons and skilled freelancers to ensure you always get a smooth, reliable, and comfortable experience.
                    </p>

                </div>

            </section>

        </>
    )
}
