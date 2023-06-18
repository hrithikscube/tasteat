import React from "react";
import Marquee from "react-fast-marquee";

import italian from "../../assets/images/italian.png";
import stuffed from "../../assets/images/stuffed.png";
import tubular from "../../assets/images/tubular.png";
import { instaPics } from "../../utils/helpers";
import Footer from "../Footer";
import Header from "../Header";

const pastas = [
  {
    name: "Italian Pasta",
    image: italian,
  },
  {
    name: "Stuffed Pasta",
    image: stuffed,
  },
  {
    name: "Tubular Pasta",
    image: tubular,
  },
];

const Gallery = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="mt-10 flex flex-col justify-center items-center lg:gap-10 gap-5 lg:px-10">
        {pastas.map((item) => (
          <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-5 lg:mx-auto mx-5">
            <img
              src={item?.image}
              alt=""
              className="lg:h-[382px] lg:w-[700px] object-cover"
            />
            <div className="flex flex-col gap-2 lg:w-[360px]">
              <p className="font-infantBold lg:text-5xl text-3xl text-darkSlate">
                {item?.name}
              </p>
              <p className=" text-base text-[#555] font-joseRegular">
                Typical spaghetti is made from water, milled wheat, and flour,
                but authentic spaghetti is made with durum wheat semolina.
              </p>
              <p className=" text-base text-[#555] font-joseRegular">
                Spaghetti is Italy's classic pasta that is known for its long,
                thin, cylindrical shape.
              </p>
              <div className="w-[253px] gap-5 font-infantRegular text-darkSlate">
                <p className="text-base">
                  <span className="uppercase font-infantMedium">CATEGORY:</span>{" "}
                  Main Sweet, Tasty{" "}
                </p>
                <p className="text-base">
                  <span className="uppercase font-infantMedium">Courses:</span>{" "}
                  DATE: October 20, 2023{" "}
                </p>
                <p className="text-base">
                  <span className="uppercase font-infantMedium">Tags:</span>{" "}
                  Recipes,
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col justify-center items-center lg:mt-20 mt-10 overlfow-hidden">
        <span className="border-y uppercase border-dimYellow font-joseRegular lg:text-lg text-base text-darkSlate">
          stories
        </span>
        <p className="font-infantBold lg:text-4xl text-3xl text-darkSlate">
          Instagram Gallery
        </p>
        <div className="mt-10 flex flex-row justify-center items-center gap-5">
          <Marquee>
            {instaPics?.map((item: any) => (
              <img src={item} alt="instaPics" className="ml-5" />
            ))}
          </Marquee>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Gallery;
