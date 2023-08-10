"use client";
import Image from "next/image";
import React from "react";
import model1 from "../../../public/images/hero-1.webp";

const page = () => {
  return (
    <div className="box-border w-full">
      <div className="flex items-center py-4 px-52 gap-96 bg-black text-white border-b border-[hsla(0,0%,100%,.3)]">
        <div className="text-4xl">Crypto V</div>
        <div className="flex justify-between items-center gap-9">
          <div>Home</div>
          <div>About Us</div>
          <div>Contact</div>
        </div>
      </div>
      <div className=" h-[100vh] hero-bg-img flex ">
        <div className="w-[50%] p-6">
          <h3 className="text-[6rem] font-bold tracking-[-.03rem] text-white leading-[1.25] mb-6">
            Powerful for developers. Fast for everyone.
          </h3>
          <button
            className="bg-[#00ffbd] text-[#232323] py-3 px-5 rounded-full
           font-medium mr-4 hover:opacity-[0.60]"
          >
            Wallet Connect
          </button>
          <button
            className="bg-black text-white py-3 px-5 rounded-full font-medium border
           border-white hover:opacity-[0.60]"
          >
            Explore More
          </button>
        </div>
        <div className="w-[50%] flex justify-center">
          <div>
            <Image src={model1} className="m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

// font-size: 6rem;
// line-height: 1;
// font-weight: 700;
// text-align: left;
// letter-spacing: -.03rem;
