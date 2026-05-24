"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b
        ${
          scrolled
            ? "bg-[#faf7f2]/90 backdrop-blur-2xl border-[#e6ddd2] shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="w-full max-w-[1800px] 2xl:max-w-[2200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-20">
          <div className="h-[78px] sm:h-[88px] md:h-[92px] 2xl:h-[110px] flex items-center justify-between">
            {/* LEFT */}
            <Link
              href="/"
              className="flex items-center gap-3 sm:gap-4 shrink-0"
            >
              {/* LOGO */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 2xl:w-28 2xl:h-28 shrink-0">
  <Image
    src="/logo.png"
    alt="Sumit Productions"
    fill
    priority
    className="object-contain scale-125"
  />
</div>

              {/* BRAND */}
              
            </Link>

            {/* CENTER NAV */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10 2xl:gap-14">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative overflow-hidden text-[12px] xl:text-[13px] 2xl:text-[15px] uppercase tracking-[0.2em] text-[#5f5a54] transition-all duration-300"
                >
                  <span className="relative">
                    {item.name}

                    <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-[#1f1f1f] transition-all duration-500 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </nav>

            {/* RIGHT */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/book"
                className="group relative overflow-hidden rounded-full border border-[#ddd2c6] bg-[#efe7dc] px-5 xl:px-6 2xl:px-8 py-3 2xl:py-4 text-[11px] xl:text-[12px] 2xl:text-[14px] uppercase tracking-[0.2em] text-[#1f1f1f] transition-all duration-500 hover:border-[#d4c5b7] hover:bg-[#e4d7c8]"
              >
                <span className="relative z-10">Book Session</span>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full border border-[#e5dbcf] bg-[#f7f2eb]/80 backdrop-blur-md text-[#1f1f1f]"
            >
              {mobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-[#e8ddd1] bg-[#faf7f2]/95 backdrop-blur-2xl">
            <div className="flex flex-col px-6 py-8">
              {navLinks.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="py-4 border-b border-[#eee5da] text-[13px] uppercase tracking-[0.2em] text-[#4f4a44]"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/book"
                onClick={() => setMobileMenu(false)}
                className="mt-8 flex items-center justify-center rounded-full bg-[#ebe3d8] px-6 py-4 text-[12px] uppercase tracking-[0.18em] text-[#1f1f1f]"
              >
                Book Session
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* HEADER SPACER */}
      <div className="h-[78px] sm:h-[88px] md:h-[92px] 2xl:h-[110px]" />
    </>
  );
}