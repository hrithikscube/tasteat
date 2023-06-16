import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { keypoints } from '../../utils/helpers'
import story from '../../assets/images/story.png'
import signature from '../../assets/vectors/signature.svg'
import lights from '../../assets/images/lights.png'

import guy from '../../assets/avatars/guy.png'
import nat from '../../assets/avatars/nat.png'
import jack from '../../assets/avatars/jack.png'

import Marquee from "react-fast-marquee";

import burger from '../../assets/images/burger.png'
import pizza from '../../assets/images/pizza.png'
import price from '../../assets/vectors/price.svg'
import price2 from '../../assets/vectors/price2.svg'
import offer from '../../assets/vectors/offer.svg'
import hexagon from '../../assets/vectors/hexagon.svg'






const FeedbackCard = ({ image }: any) => {
  return (
    <div className='bg-[#343942] p-10 lg:w-[527px] w-[327px] lg:h-[386px] flex flex-col m-5'>

      <div className='flex items-center gap-5 '>
        <img src={image} alt="" />

        <div>
          <p className='lg:text-3xl text-2xl font-infantBold text-white'>Daniyal Sppra</p>
          <p className='lg:text-xl text-lg font-joseRegular text-dimYellow'>Newyork</p>
        </div>

      </div>

      <div className='border-b border-white my-5   ' />

      <div className=''>
        <p className='font-infantItalic text-white lg:text-3xl text-xl'>
          "It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.
        </p>
      </div>
    </div>
  )
}


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

            <div className=''>
              <span className='uppercase border-y border-dimYellow font-joseMedium text-lg text-white py-1'>testimonial</span>
              <div className='flex flex-col gap-2 mt-2'>
                <p className='text-white font-infantBold lg:text-4xl text-3xl '>What our clients say</p>
                <p className='text-white font-joseRegular lg:text-lg text-base '>We love to hear from customers, so please leave a comment or say hello in an email.</p>
              </div>
            </div>

            <Marquee>
              <FeedbackCard image={guy} />
              <FeedbackCard image={nat} />
              <FeedbackCard image={jack} />
            </Marquee>

          </div>
          <img src={lights} alt="" />
        </div>

        <div className="lg:mt-40 mt-20 flex flex-col justify-center items-center">
          <span className='uppercase border-y border-dimYellow font-joseMedium text-lg text-darkSlate '>offer</span>
          <p className='font-infantBold lg:text-4xl text-3xl text-darkSlate my-2'>Our special  Offer dishes</p>
          <p className='lg:w-[702px] lg:text-xl text-base font-joseRegular text-[#555555] text-center'>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.</p>
              <br/>
          <div className='flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5 lg:m-auto m-5 '>
            {/* burger card */}
            <div className='bg-[#C6EAF2] flex lg:flex-row flex-col items-center justify-center p-10 relative lg:gap-0 gap-5'>

              <div className='lg:w-[259px]'>
                <img src={price} alt="price_value" className='w-[100px] h-[100px] mb-2' />
                <span className='uppercase border-y border-darkSlate py-1 font-joseMedium text-base text-darkSlate'>50% Offer Going</span>
                <p className='font-infantBold text-darkSlate lg:text-3xl text-2xl mt-2'>Chicken Burger</p>
                <p className='font-joseRegular text-[#555555] lg:text-lg text-base mt-1'>Lorem Ipsum is that it has a more-or-less normal</p>
              </div>
              <img src={burger} alt="burger" className='w-[332px] h-[242px] z-[20]' />

              <div className='absolute top-0 lg:block hidden'>
                <img src={offer} alt="shape" />
              </div>

            </div>
            {/* pizza card */}
            <div className='bg-[#D7D7D7] flex lg:flex-row flex-col items-center justify-center p-10 relative lg:gap-0 gap-5'>

              <div className='lg:w-[259px]'>
                <img src={price2} alt="price_value" className='w-[100px] h-[100px] mb-2' />
                <span className='uppercase border-y border-darkSlate py-1 font-joseMedium text-base text-darkSlate'>50% Offer Going</span>
                <p className='font-infantBold text-darkSlate lg:text-3xl text-2xl mt-2'>Chicken Pizza</p>
                <p className='font-joseRegular text-[#555555] lg:text-lg text-base mt-1'>Lorem Ipsum is that it has a more-or-less normal</p>
              </div>
              <img src={pizza} alt="pizza" className='w-[332px] h-[242px] object-contain scale-[1.3] z-[20]' />
              <div className='absolute bottom-0 z-[10] right-[20px]'>
                <img src={hexagon} alt="" />
              </div>

            </div>
          </div>

        </div>


      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Home