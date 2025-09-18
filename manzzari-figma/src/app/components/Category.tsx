import React from "react";
import Image from "next/image";

function Card({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="w-full sm:w-[300px] bg-white p-6 flex flex-col items-center text-center rounded-lg shadow-md transform transition-transform hover:scale-105">
      <div className="w-14 h-14 relative mb-4">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

export default function Category() {
  return (
    <div className="px-8 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-8">
        Shop By Categories
      </h1>

      {/* Buttons */}
      <div className="flex justify-center flex-wrap gap-12 mb-12">
        <button className="text-xl font-medium">EARINGS</button>
        <button className="text-xl font-medium">NECKLACE</button>
        <button className="text-xl font-medium">BRACLET</button>
        <button className="text-xl font-medium">RINGS</button>
      </div>

      {/* Image Grid */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {/* Row 1 */}
        <div className="w-[893px] h-[582px] relative">
          <Image
            src="/images/img1.png"
            alt="Category 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-[438px] h-[581px] relative">
          <Image
            src="/images/img2.png"
            alt="Category 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-[438px] h-[581px] relative">
          <Image
            src="/images/img3.png"
            alt="Category 3"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Row 2 */}
        <div className="w-[438px] h-[581px] relative">
          <Image
            src="/images/img4.png"
            alt="Category 4"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-[438px] h-[581px] relative">
          <Image
            src="/images/img5.png"
            alt="Category 5"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-[893px] h-[581px] relative">
          <Image
            src="/images/img6.svg"
            alt="Category 6"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-24">
        <div className="border border-gray-300">
        <Card
          icon="/images/Frame.png"
          title="Shipping Worldwide"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        </div>
        <div className="border border-gray-300">

        <Card
          icon="/images/Frame2.png"
          title="14 Days Return"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        </div>
        <div className="border border-gray-300">

        <Card
          icon="/images/Frame3.svg"
          title="Security Payment"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        </div>
      </div>
    </div>
  );
}
