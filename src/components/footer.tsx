import React from "react";

function Footer() {
  return (
    <footer className="px-4 md:px-36 dark:bg-gray-900 text-gray-700 bg-zinc-200/30 backdrop-blur-sm py-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Description */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Interactive Smart Cook
          </h3>
          <p className="mt-2 text-sm leading-relaxed">
            Hands-free, automated gas stove assistant that manages flame, timing,
            and safety based on your recipe — just arrange the ingredients and let
            AI handle the rest.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Recipes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Safety
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-md font-semibold mb-2">Follow Us</h4>
          <ul className="flex gap-4">
            <li>
              <a href="#" className="hover:text-blue-600">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} Interactive Smart Cook. All rights reserved.  
        Making kitchens smarter, safer, and stress-free.
      </div>
    </footer>
  );
}

export default Footer;
