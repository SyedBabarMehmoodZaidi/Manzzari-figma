import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="bg-[#A29875] p-4 w-full h-[134px] flex items-center">
        <h1 className="font-rye text-[#FFFFFF] text-[4.5rem] sm:text-5xl md:text-6xl pl-6 md:pl-9 font-normal leading-[1.2]">
          MANZZARI
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Left Text Content */}
        <div className="lg:w-1/2 flex flex-col justify-center items-start space-y-4 px-6 sm:px-12 lg:pl-[176px] py-8 lg:py-0">
          <h1 className="max-w-full lg:max-w-[496px] font-libre-bodoni font-bold text-[28px] sm:text-3xl md:text-4xl">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="max-w-full lg:max-w-[902px] font-libre-bodoni text-[18px] sm:text-lg md:text-xl text-[#787054]">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button className="bg-[#A29875] w-full sm:w-[288px] font-libre-bodoni font-medium text-[20px] sm:text-[30px] h-[58px] flex items-center justify-center text-white rounded-[10px]">
            Explore Now
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center items-center px-6 sm:px-12 py-8 lg:py-0">
          <Image
            src="/images/slider1.png"
            alt="Image description"
            width={450}
            height={600}
            className="w-full max-w-[450px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
