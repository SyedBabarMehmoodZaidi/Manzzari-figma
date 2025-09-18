"use client";
import { Rye } from "next/font/google";

const rye = Rye({
  subsets: ["latin"],
  weight: "400", // sirf 400 available hai
});

export default function Newsletter() {
  return (
    <section
      className={`w-full py-20 flex flex-col items-center justify-center text-center px-4 ${rye.className}`}
    >
      {/* Heading */}
      <h1 className="text-6xl md:text-4xl font-bold text-black mb-6">
        News letter
      </h1>

      {/* Paragraph */}
      <p className="text-gray-700 max-w-xl mb-8">
        Sign-up to receive 10% off your next purchase. Plus hear about new
        arrivals and offers.
      </p>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Email Address"
          className="flex-1 px-4 py-3 border border-[#A29875] rounded-md focus:outline-none placeholder-[#A29875] text-[#A29875]"
        />
        <button className="px-6 py-3 bg-[#A29875] text-white rounded-md font-medium hover:bg-[#8b8260] transition">
          Subscribe
        </button>
      </div>
    </section>
  );
}
