import React from "react";
import Footer from "../Footer";
import Header from "../Header";

import ceo from "../../assets/images/ceo.png";
import signature from "../../assets/vectors/signature.svg";
import cooking from "../../assets/images/cooking.png";

import product from "../../assets/vectors/product.svg";
import hat from "../../assets/vectors/hat.svg";
import drinks from "../../assets/vectors/drinks.svg";
import cuisine from "../../assets/vectors/cuisine.svg";

const attractions = [
  {
    id: 1,
    name: "Fresh Product",
    description: "Professional consider everyone probls small niche friendly.",
    icon: product,
  },
  {
    id: 2,
    name: "Skilled Chef",
    description: "Professional consider everyone probls small niche friendly.",
    icon: hat,
  },
  {
    id: 3,
    name: "Drinks & Juices",
    description: "Professional consider everyone probls small niche friendly.",
    icon: drinks,
  },
  {
    id: 4,
    name: "Vegan Cuisine",
    description: "Professional consider everyone probls small niche friendly.",
    icon: cuisine,
  },
];

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="lg:w-[1378px] flex flex-col justify-center items-center m-auto lg:my-20 my-10">
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="lg:w-[628px] flex flex-col items-start gap-2 p-5">
            <span className="border-y border-dimYellow font-joseRegular text-base tracking-wide uppercase">
              About us
            </span>
            <p className="lg:text-4xl text-3xl font-infantBold text-darkSlate">
              Quality and Tradition
            </p>
            <p className="font-joseRegular lg:text-lg text-base text-[#555]">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content gfshere making
              look like readable English. Many desktop publishing packages.
            </p>
            <img src={signature} alt="sign" className="w-[190px] h-[190px]" />
            <button
              className={`bg-none border-2 border-dimYellow lg:h-[68px] h-[57px] w-[232px]
              } lg:text-xl text-lg font-joseRegular text-dimYellow`}
            >
              See More
            </button>
          </div>
          <img src={ceo} alt="" className="lg:w-[648px] hidden" />
        </div>
      </div>

      <div className="w-full relative ">
        <img src={cooking} alt="bg" />
        <br/>
        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-10 gap-5 lg:absolute top-[20%] left-[7%]">
          {attractions.map((item) => (
            <div className="flex flex-col justify-center items-center gap-2 text-center w-[279px]">
              <img src={item?.icon} alt="" />
              <p className="font-infantBold lg:text-xl text-lg lg:text-white">{item?.name}</p>
              <p className="font-joseRegular text-base lg:text-white">{item?.description}</p>
              <button className="font-joseRegular text-base text-dimYellow mt-5">
                See more
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
