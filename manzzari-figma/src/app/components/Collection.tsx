"use client";

import Image from "next/image";
import { Rye } from "next/font/google";

// Rye font import
const rye = Rye({
  subsets: ["latin"],
  weight: "400", // sirf 400 available hai
});

interface CardProps {
  name: string;
  price: string;
  image: string;
}

// Card Component
function Card({ name, price, image }: CardProps) {
  return (
    <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <Image
        src={image}
        alt={name}
        width={375}
        height={479}
        className="object-cover rounded-lg"
      />
      <h2 className="mt-4 text-4xl font-medium" style={{ color: "#938965" }}>
        {name}
      </h2>
      <p className="text-2xl" style={{ color: "#938965" }}>
        {price}
      </p>
    </div>
  );
}

// Collection Component
export default function Collection() {
  return (
    <section className="w-full py-28">
      {/* Heading - sirf yahan Rye font apply hoga */}
      <h1
        className={`text-3xl md:text-4xl font-semibold text-center mb-10 ${rye.className}`}
      >
        Trendy Collection
      </h1>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 mb-20">
        <Card name="Classic Sofa" price="$299" image="/images/product1.png" />
        <Card name="Modern Chair" price="$199" image="/images/product2.png" />
        <Card name="Wooden Table" price="$399" image="/images/product3.png" />
        <Card name="Luxury Lamp" price="$149" image="/images/product4.png" />
      </div>

      {/* Jewelry Section */}
<div className="flex flex-col md:flex-row justify-center items-stretch">
  {/* Column 1 */}
  <div className="w-full md:w-1/3 min-h-[400px] flex items-center justify-center">
    <Image
      src="/images/lookbook-3.jpg.svg"
      alt="Jewelry Left"
      width={500}
      height={500}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Column 2 */}
  <div className="w-full md:w-1/3 min-h-[400px] bg-[#938965] flex flex-col items-center justify-center text-center p-6">
    <h1 className="text-white text-2xl md:text-4xl font-bold mb-6">
      Jewelry for Every Occasion
    </h1>
    <button className="bg-white text-[#938965] px-6 py-3 font-semibold rounded-lg shadow-md hover:scale-105 transition">
      Shop Now
    </button>
  </div>

  {/* Column 3 */}
  <div className="w-full md:w-1/3 min-h-[400px] bg-[#938965] flex items-center justify-center">
    <Image
      src="/images/banner-30.jpg.png"
      alt="Jewelry Right"
      width={500}
      height={500}
      className="object-contain transform transition-transform duration-300 hover:scale-105 cursor-pointer"
    />
  </div>
</div>

    </section>
  );
}
