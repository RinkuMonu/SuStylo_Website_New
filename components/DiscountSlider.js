import Image from 'next/image'
import React from 'react'
const discounts = [
    {
        percent: '30%',
        desc: 'On Hair Cut & conditioning',
        detail: 'On your nearest salon',
        img: '/Home/discount.png',
        coupon: "HAIRCUT300",
    },
    {
        percent: '25%',
        desc: 'On Hair Spa & styling',
        detail: 'All locations',
        img: '/Home/discount.png',
        coupon: "HAIRCUT300",
    },
    {
        percent: '10%',
        desc: 'On Hair Colour',
        detail: 'Weekend only',
        img: '/Home/discount.png',
        coupon: "HAIRCUT300",
    }
];

export default function DiscountSlider() {
    return (
        <>
            <section className='py-5'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
                    {discounts.map((offer, idx) => (
                        <div key={idx} className="flex flex-row gap-0 bg-white  overflow-hidden">
                            <div className='p-3 bg-[#617772] flex items-center flex-col justify-center pt-10 '>
                                <h3 className='text-2xl text-white font-bold'>Get-{offer.percent}</h3>
                                <p className='text-[14px] text-white w-30 text-center'>{offer.desc}</p>
                                <small className='text-[#CBAA87] text-[10px] mt-auto'>{offer.detail}</small>
                            </div>
                            <div className='flex items-center justify-center'>
                                <Image src={offer.img} alt='Discount' width={225} height={154} className="object-cover" />
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}
