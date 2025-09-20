"use client";

import Image from "next/image";

export default function Spotted() {
  return (
    <section className="w-full py-20 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black font-rye">
        Spotted on
      </h1>

      {/* Images Row */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {/* Image 1 */}
        <div className="w-[417px] h-[485px] overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 cursor-pointer">
          <Image
            src="/images/profile1.svg"
            alt="Spotted 1"
            width={417}
            height={485}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 2 */}
        <div className="w-[417px] h-[485px] overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 cursor-pointer">
          <Image
            src="/images/profile2.svg"
            alt="Spotted 2"
            width={417}
            height={485}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 3 */}
        <div className="w-[417px] h-[485px] overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 cursor-pointer">
          <Image
            src="/images/profile3.svg"
            alt="Spotted 3"
            width={417}
            height={485}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Cards Row */}
      <div className="flex flex-wrap justify-center gap-8 mb-20">
        {/* Card 1 */}
        <div className="w-[536px] h-[288px] bg-white shadow-md rounded-xl flex flex-col items-center text-center p-6 transform transition duration-300 hover:scale-105 cursor-pointer">
          <div className="w-20 h-20 mb-4 overflow-hidden rounded-full border">
            <Image
              src="/images/icon1.svg"
              alt="Sophia Carter"
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-xl font-semibold text-[#938965] mb-1">
            Sophia Carter
          </h1>
          <h3 className="text-sm text-gray-500 mb-3">Fashion Blogger</h3>
          <p className="text-sm text-gray-700">
            Sophia loves mixing luxury jewelry with casual outfits, making every
            look chic and timeless.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-[536px] h-[288px] bg-white shadow-md rounded-xl flex flex-col items-center text-center p-6 transform transition duration-300 hover:scale-105 cursor-pointer">
          <div className="w-20 h-20 mb-4 overflow-hidden rounded-full border">
            <Image
              src="/images/icon2.svg"
              alt="Daniel Lee"
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-xl font-semibold text-[#938965] mb-1">
            Daniel Lee
          </h1>
          <h3 className="text-sm text-gray-500 mb-3">Lifestyle Influencer</h3>
          <p className="text-sm text-gray-700">
            Daniel is known for his bold style choices, often pairing statement
            jewelry with modern streetwear.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-[536px] h-[288px] bg-white shadow-md rounded-xl flex flex-col items-center text-center p-6 transform transition duration-300 hover:scale-105 cursor-pointer">
          <div className="w-20 h-20 mb-4 overflow-hidden rounded-full border">
            <Image
              src="/images/icon3.png"
              alt="Emily Brown"
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-xl font-semibold text-[#938965] mb-1">
            Emily Brown
          </h1>
          <h3 className="text-sm text-gray-500 mb-3">Creative Director</h3>
          <p className="text-sm text-gray-700">
            Emily&apos;s refined taste shines through as she effortlessly blends
            jewelry into her everyday wardrobe.
          </p>
        </div>
      </div>

     {/* About Us Section */}
<div className="w-full bg-[#A29875] flex flex-col md:flex-row items-center justify-center md:justify-between">
  {/* Left Image */}
  <div className="w-full md:w-1/2 h-[500px] md:h-[600px] relative">
    <Image
      src="/images/about.svg"
      alt="About Us"
      fill
      className="object-cover object-center"
    />
  </div>

  {/* Right Content */}
  <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center text-white p-8 md:p-16">
    <h1 className="text-4xl font-bold mb-6">ABOUT US</h1>
    <p className="mb-6 max-w-lg">
      At Purity, we strive to deliver excellence, consistently. We&apos;ve
      brought to the market a whole new standard of business ethics and
      product reliability.
    </p>
    <button className="px-6 py-3 bg-white text-[#A29875] rounded-lg font-medium hover:bg-gray-200 transition">
      View More
    </button>
  </div>
</div>

    </section>
  );
}
