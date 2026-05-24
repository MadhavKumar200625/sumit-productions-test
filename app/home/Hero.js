"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f5f1]">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero1.jpg')",
        }}
      >
        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-white/25" />

        {/* SOFT LEFT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2]/85 via-[#faf7f2]/35 to-transparent" />

        {/* SOFT BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 h-64 w-full bg-gradient-to-t from-[#faf7f2] to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[1920px] 2xl:max-w-[2400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 2xl:px-24">
        <div className="min-h-screen flex items-center">
          <div className="w-full max-w-[850px] pt-20 pb-20">
            {/* LABEL */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[#ddd2c7]/70 bg-white/40 backdrop-blur-md px-4 sm:px-5 py-2">
              <div className="h-2 w-2 rounded-full bg-[#c6ab8f]" />

              <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-[#746c64]">
                Luxury Wedding Films & Photography
              </span>
            </div>

            {/* HEADING */}
            <div className="mt-7">
              <h1 className="font-light leading-[0.95] tracking-[-0.04em] text-[#1a1a1a] text-[42px] sm:text-[58px] md:text-[72px] lg:text-[92px] xl:text-[110px] 2xl:text-[145px]">
                Timeless
                <br />

                <span className="text-[#b5987d]">Moments</span>

                <br />
                Beautifully Told
              </h1>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[650px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] 2xl:text-[20px] leading-[1.9] text-[#655e57]">
              Creating elegant cinematic experiences through wedding films,
              emotional storytelling, and luxury photography crafted with a
              refined artistic vision.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#1f1f1f] px-7 sm:px-8 py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-white transition-all duration-500 hover:scale-[1.03]"
              >
                Explore Portfolio

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#d9cec2]/80 bg-white/40 backdrop-blur-md px-7 sm:px-8 py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#1f1f1f] transition-all duration-300 hover:bg-white/70"
              >
                Book Your Story
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-14 flex flex-wrap items-center gap-x-8 sm:gap-x-12 gap-y-6 border-t border-[#ddd2c7]/70 pt-7">
              {[
                {
                  number: "250+",
                  label: "Wedding Stories",
                },
                {
                  number: "8+",
                  label: "Years Experience",
                },
                {
                  number: "Pan India",
                  label: "Destination Coverage",
                },
              ].map((item) => (
                <div key={item.label}>
                  <h3 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] 2xl:text-[42px] font-light text-[#1f1f1f]">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#857c73]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}