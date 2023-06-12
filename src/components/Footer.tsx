import React from 'react'
import footerLogo from '../assets/images/footerLogo.svg'
import { socials } from '../utils/helpers'

const Footer = () => {
    return (
        <div className='lg:mt-20 mt-10 bg-darkSlate w-full '>
            {/* footer */}
            <div className=' flex lg:flex-row justify-between items-end lg:w-[1378px] m-auto lg:py-10 py-5'>
                <div className='flex flex-col lg:gap-[120px] gap-5'>

                    <div>
                        <p className='lg:text-xl text-lg font-joseRegular text-white underline'>Instagram Feed</p>
                    </div>

                    <div className='flex flex-col gap-2 justify-start items-start'>

                        <span className='uppercase border-y border-dimYellow font-joseMedium lg:text-xl text-lg text-white'>Contact</span>

                        <p className='w-[266px] text-lg text-white font-joseRegular'>
                            5 Rue Dalou, 75015 Paris <br />
                            Call - +33 156 78 89 56
                            benoit@mail.com
                        </p>

                    </div>
                </div>

                <div className='flex flex-col gap-5 justify-center items-center'>
                    <img src={footerLogo} alt="" className='w-[300px] h-[196px] m-auto' />
                    <div className='lg:w-[300px] text-center'>
                        <p className='font-joseRegular lg:text-xl text-lg text-white'> Join our mailing list for updates,
                            Get news & offers events.</p>
                    </div>
                    <div className='flex items-center lg:w-[509px]'>
                        <input className='placeholder:font-joseRegular outline-none border border-white p-[17px] w-full bg-darkSlate text-white text-xl placeholder:text-white' placeholder='Email' />
                        <button className='p-[17.8px] px-10 font-joseMedium text-xl bg-white'>Subscribe</button>
                    </div>
                </div>

                <div className='flex flex-col lg:gap-[120px] gap-5 justify-end items-end'>
                    <div className='flex items-center gap-5'>
                        {
                            socials.map((item: any) => (
                                <img src={item.icon} alt="" />
                            ))
                        }
                    </div>

                    <div className='flex flex-col gap-2 justify-end items-end text-end'>

                        <span className='uppercase border-y border-dimYellow font-joseMedium lg:text-xl text-lg text-white'>working hours</span>

                        <p className='w-[266px] text-lg text-white font-joseRegular'>
                            Mon – Fri: 7.00am – 6.00pm <br />
                            Sat: 7.00am – 6.00pm <br />
                            Sun: 8.00am – 6.00pm <br />
                        </p>

                    </div>
                </div>
            </div>
            {/* copyright */}
            <div className='p-5  border-y border-[#fcfcfc]'>
                <div className='flex items-center justify-between lg:w-[1378px] m-auto '>
                    <div>
                        <p className='text-white font-joseRegular text-lg'>
                            © Copyright - Restaurantate 2023
                        </p>
                    </div>

                    <div>
                        <p className='font-joseRegular text-white text-lg'>Tasteat</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer