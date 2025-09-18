"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#A29875] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <h2 className="font-bold text-lg mb-4">MY ACCOUNT</h2>
          <ul className="space-y-2">
            <li>Career at Eldy</li>
            <li>About Us</li>
            <li>Sustainability</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="font-bold text-lg mb-4">HELP</h2>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Order Status</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="font-bold text-lg mb-4">Follow Us On</h2>
          <ul className="space-y-2">
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Google Plus</li>
            <li>Instagram</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="font-bold text-lg mb-4">About Us</h2>
          <ul className="space-y-2">
            <li>Email: babarzaidi@gmail.com</li>
            <li>Phone: 0308-2735132</li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Eldy. All Rights Reserved.
      </div>
    </footer>
  );
}
