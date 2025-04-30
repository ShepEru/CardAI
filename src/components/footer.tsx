import Link from "next/link";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f8f7f4] border-t border-[#e6e4de]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-[#1a365d] mb-4">Card Designer</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-gray-600 hover:text-[#1a365d]"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-gray-600 hover:text-[#1a365d]"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-[#1a365d]"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1a365d]">
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Occasions Column */}
          <div>
            <h3 className="font-semibold text-[#1a365d] mb-4">Occasions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1a365d]">
                  Birthdays
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1a365d]">
                  Weddings
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1a365d]">
                  Holidays
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1a365d]">
                  Anniversaries
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-[#1a365d] mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1a365d]">
                  Design Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1a365d]">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1a365d]">
                  Inspiration Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1a365d]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-[#1a365d] mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1a365d]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1a365d]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1a365d]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1a365d]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative border with pattern */}
        <div className="relative py-6 my-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#e6e4de]"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-[#f8f7f4] px-4">
              <div className="w-8 h-8 rounded-full border border-[#e6e4de] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#1a365d]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} Card Designer. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-[#1a365d] transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#1a365d] transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#1a365d] transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#1a365d] transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
