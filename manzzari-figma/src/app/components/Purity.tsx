"use client";

import Image from "next/image";

export default function PurityInstagram() {
  return (
    <section className="w-full py-16 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black font-rye">
        Follow Us on Instagram
      </h1>

      {/* Images Grid */}
      <div className="flex flex-wrap justify-center gap-[93px]">
        {/* Image 1 */}
        <div className="w-[250px] h-[250px] overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 cursor-pointer">
          <Image
            src="/images/insta1.png"
            alt="Instagram 1"
            width={250}
            height={250}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 2 */}
        <div className="w-[250px] h-[250px] overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 cursor-pointer">
          <Image
            src="/images/insta2.png"
            alt="Instagram 2"
            width={250}
            height={250}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 3 */}
        <div className="w-[250px] h-[250px] overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 cursor-pointer">
          <Image
            src="/images/insta3.png"
            alt="Instagram 3"
            width={250}
            height={250}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 4 */}
        <div className="w-[250px] h-[250px] overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 cursor-pointer">
          <Image
            src="/images/insta4.png"
            alt="Instagram 4"
            width={250}
            height={250}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 5 */}
        <div className="w-[250px] h-[250px] overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 cursor-pointer">
          <Image
            src="/images/insta5.png"
            alt="Instagram 5"
            width={250}
            height={250}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
