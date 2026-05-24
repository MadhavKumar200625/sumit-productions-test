"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f3ebe1]">
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#e9ddd0] blur-3xl opacity-50" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#efe5d8] blur-3xl opacity-60" />

      {/* TOP CTA */}
      <div className="relative z-10 border-b border-[#ddd1c4]">
        <div className="w-full max-w-[1920px] 2xl:max-w-[2400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 2xl:px-24 py-20 sm:py-24 lg:py-28">
          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-10">
            {/* LEFT */}
            <div className="max-w-[950px]">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#988c80]">
                Let’s Create Something Timeless
              </p>

              <h2 className="mt-5 font-light leading-[0.95] tracking-[-0.04em] text-[#1f1f1f] text-[40px] sm:text-[56px] md:text-[72px] lg:text-[92px] xl:text-[110px] 2xl:text-[140px]">
                Your Story
                <br />

                <span className="text-[#b39377]">Deserves</span>
                <br />
                Cinema
              </h2>
            </div>

            {/* RIGHT */}
            <div className="max-w-[520px]">
              <p className="text-[15px] sm:text-[16px] lg:text-[17px] 2xl:text-[20px] leading-[1.9] text-[#6e665d]">
                From intimate moments to grand celebrations, we craft cinematic
                experiences that feel emotional, elegant, and timeless.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#1f1f1f] px-8 py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-white transition-all duration-500 hover:scale-[1.03]"
              >
                Book Your Story

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="relative z-10">
        <div className="w-full max-w-[1920px] 2xl:max-w-[2400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 2xl:px-24 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] gap-14 lg:gap-10">
            {/* BRAND */}
            <div>
              {/* LOGO */}
              <Link href="/" className="inline-flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <Image
                    src="/logo.png"
                    alt="Sumit Productions"
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-[18px] sm:text-[22px] tracking-[0.22em] uppercase font-light text-[#1f1f1f]">
                    Sumit Productions
                  </h3>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.35em] text-[#8a8075]">
                    stimulus to still
                  </p>
                </div>
              </Link>

              {/* DESCRIPTION */}
              <p className="mt-8 max-w-[420px] text-[14px] sm:text-[15px] leading-[1.9] text-[#6e665d]">
                A luxury cinematic production studio creating timeless wedding
                films, editorial visuals, and emotionally driven storytelling
                experiences across India.
              </p>

              {/* SOCIALS */}
              <div className="mt-8 flex items-center gap-4">
                {[
                  {
                    icon: FaInstagram,
                    href: "#",
                  },
                  {
                    icon: FaYoutube,
                    href: "#",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ddd1c4] bg-white/60 backdrop-blur-xl text-[#1f1f1f] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                    >
                      <Icon size={18} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-[12px] uppercase tracking-[0.3em] text-[#8a8075]">
                Quick Links
              </h4>

              <div className="mt-8 flex flex-col gap-5">
                {[
                  "Home",
                  "About",
                  "Portfolio",
                  "Services",
                  "Contact",
                ].map((item) => (
                  <Link
                    key={item}
                    href="/"
                    className="group inline-flex items-center gap-2 text-[16px] sm:text-[18px] font-light text-[#1f1f1f]"
                  >
                    <span>{item}</span>

                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-45"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-[12px] uppercase tracking-[0.3em] text-[#8a8075]">
                Services
              </h4>

              <div className="mt-8 flex flex-col gap-5">
                {[
                  "Wedding Films",
                  "Wedding Photography",
                  "Pre Wedding Shoots",
                  "Destination Weddings",
                  "Editorial Shoots",
                ].map((item) => (
                  <div
                    key={item}
                    className="text-[16px] sm:text-[18px] font-light text-[#1f1f1f]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-[12px] uppercase tracking-[0.3em] text-[#8a8075]">
                Contact
              </h4>

              <div className="mt-8 flex flex-col gap-6">
                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/60 border border-[#ddd1c4]">
                    <Mail size={16} className="text-[#9f8469]" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#8a8075]">
                      Email
                    </p>

                    <a
                      href="mailto:hello@sumitproductions.com"
                      className="mt-2 block text-[16px] sm:text-[18px] font-light text-[#1f1f1f]"
                    >
                      hello@sumitproductions.com
                    </a>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/60 border border-[#ddd1c4]">
                    <Phone size={16} className="text-[#9f8469]" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#8a8075]">
                      Phone
                    </p>

                    <a
                      href="tel:+919999999999"
                      className="mt-2 block text-[16px] sm:text-[18px] font-light text-[#1f1f1f]"
                    >
                      +91 99999 99999
                    </a>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/60 border border-[#ddd1c4]">
                    <MapPin size={16} className="text-[#9f8469]" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#8a8075]">
                      Location
                    </p>

                    <p className="mt-2 text-[16px] sm:text-[18px] font-light leading-[1.6] text-[#1f1f1f]">
                      Delhi NCR, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-20 border-t border-[#ddd1c4] pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#8a8075]">
              © 2026 Sumit Productions. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              {[
                "Luxury Wedding Films",
                "Editorial Production",
                "Destination Weddings",
              ].map((item) => (
                <span
                  key={item}
                  className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#6e665d]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}