import React from 'react'
import error from '../../assets/images/404.png'

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 text-center'>
            <img src={error} alt="404" className='lg:w-[1108.31px] lg:h-[481px] object-cover' />
            <p className='lg:text-5xl text-2xl font-cormorantBold'>Whoops, Nothing delicious to find here!</p>
            <p className='text-lg font-joseRegular'>The page you are looking for doesn't exist or has been moved.</p>
            <button className='bg-dimYellow h-[68px] w-[232px] text-xl font-joseMedium text-primary'>Back to Home</button>
        </div>
    )
}

export default NotFound