import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { keypoints } from '../../utils/helpers'
import story from '../../assets/images/story.png'
import signature from '../../assets/vectors/signature.svg'
import lights from '../../assets/images/lights.png'

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='bg-[#FFF8F5] lg:py-10 py-10'>

        <div className='lg:w-[1378px] m-auto'>
          <div className='my-10'>
            <div className='flex lg:flex-row flex-col lg:justify-between  items-center lg:gap-10 gap-5 lg:m-auto m-5'>
              {
                keypoints.map(item => (
                  <div className='flex lg:items-center  gap-5 p-2'>
                    <img src={item.icon} alt="" />
                    <div className='flex flex-col gap-2'>
                      <p className='lg:text-4xl text-3xl font-infantBold text-darkSlate'>{item?.title}</p>
                      <p className='lg:text-xl text-lg text-[#4A4A4A] font-joseRegular'>{item?.subText}</p>
                    </div>
                  </div>
                ))
              }
            </div>

          </div>

          <div className='flex lg:flex-row flex-col justify-center items-center lg:m-auto m-5 lg:gap-0 gap-5'>
            <img src={story} alt="" />
            <div className='flex flex-col gap-2 lg:h-[446px] lg:p-10'>
              <p className='lg:text-4xl text-3xl font-infantBold text-darkSlate'>The Story</p>
              <p className='lg:text-lg text-base font-joseRegular text-[#555555]'>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere', makinlook like readable English. Many desktop publishing packages.</p>

              <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-2 my-2'>
                <div>
                  <p className='lg:text-4xl text-3xl font-infantBold text-darkSlate'>1996</p>
                  <p className='lg:text-lg text-base font-joseRegular text-[#555555]'>Lorem Ipsum is that it has a more-or-less normal distribution </p>
                </div>

                <div>
                  <p className='lg:text-4xl text-3xl font-infantBold text-darkSlate'>2023</p>
                  <p className='lg:text-lg text-base font-joseRegular text-[#555555]'>Lorem Ipsum is that it has a more-or-less normal distribution </p>
                </div>


              </div>

              <img src={signature} alt="" className='w-[159px] h-[116px]' />
            </div>
          </div>

        </div>

        <div className='bg-darkSlate w-full mt-10'>
          <div className='lg:p-10 lg:pl-20 p-5'>

            <div className='flex flex-col gap-2'>
              <span className='uppercase border-y border-dimYellow font-joseMedium text-lg text-white py-1'>testimonial</span>
              <p className='text-white font-infantBold lg:text-4xl text-3xl '>What our clients say</p>
              <p className='text-white font-joseRegular lg:text-lg text-base '>We love to hear from customers, so please leave a comment or say hello in an email.</p>
            </div>

          </div>
          <img src={lights} alt="" />
        </div>

      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Home