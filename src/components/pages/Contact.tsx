import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import TextInput from '../TextInput'

const Contact = () => {
    return (
        <React.Fragment>
            <Header />
            <div className='flex flex-col justify-center items-center gap-2 my-10 '>
                <span className='uppercase border-y border-dimYellow font-joseMedium lg:text-xl text-lg text-darkSlate'>mail us</span>

                <div className='lg:w-[744px] m-auto flex flex-col gap-5 mt-10'>
                    <div className='grid grid-cols-2  gap-5'>
                        <TextInput placeholder="Name" />
                        <TextInput placeholder="Email" type="email" />
                        <TextInput placeholder="Subject" />
                        <TextInput placeholder="Phone" type="number" />
                    </div>
                    <TextInput height="pt-5 pb-20" placeholder="Message" />
                </div>



            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Contact