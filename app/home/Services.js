"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Play,
  Sparkles,
  Camera,
  Clapperboard,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description:
      "Elegant and emotionally driven photography crafted with timeless storytelling and refined aesthetics.",
  },
  {
    icon: Play,
    title: "Cinematic Films",
    description:
      "Luxury wedding films with cinematic compositions, emotional pacing, and modern visual direction.",
  },
  {
    icon: Clapperboard,
    title: "Pre Wedding Shoots",
    description:
      "Editorial-style couple stories captured naturally with soft visuals and artistic framing.",
  },
  {
    icon: HeartHandshake,
    title: "Luxury Experience",
    description:
      "A premium production experience focused on comfort, creativity, storytelling, and detail.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f1ea] py-24 sm:py-28 lg:py-36">
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#ece2d6] blur-3xl opacity-60" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#f0e6db] blur-3xl opacity-50" />

      {/* CONTAINER */}
      <div className="relative z-10 w-full max-w-[1920px] 2xl:max-w-[2400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 2xl:px-24">
        <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-16 xl:gap-24 items-center">
          {/* LEFT SIDE */}
          <div>
            {/* LABEL */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[#ddd2c6] bg-white/70 backdrop-blur-xl px-5 py-2">
              <Sparkles size={14} className="text-[#b49378]" />

              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[#867b70]">
                The Experience
              </span>
            </div>

            {/* HEADING */}
            <h2 className="mt-7 font-light leading-[0.95] tracking-[-0.04em] text-[#1f1f1f] text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] 2xl:text-[120px]">
              Crafted With
              <br />

              <span className="text-[#b89c80]">Emotion</span>
              <br />
              & Elegance
            </h2>

            {/* TEXT */}
            <p className="mt-8 max-w-[620px] text-[15px] sm:text-[16px] lg:text-[17px] 2xl:text-[20px] leading-[1.9] text-[#6f665d]">
              At Sumit Productions, every story is approached with artistic
              intention and cinematic precision. From intimate emotions to grand
              celebrations, we focus on preserving moments in their most
              authentic and timeless form.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#1f1f1f] px-7 py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-white transition-all duration-500 hover:scale-[1.03]"
              >
                Book Your Story

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-[#d9cec2] bg-white/60 backdrop-blur-xl px-7 py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#1f1f1f] transition-all duration-300 hover:bg-white"
              >
                Explore Services
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-[#ddd2c6] pt-8">
              {[
                {
                  number: "250+",
                  label: "Projects",
                },
                {
                  number: "8+",
                  label: "Years",
                },
                {
                  number: "100%",
                  label: "Luxury Experience",
                },
              ].map((item) => (
                <div key={item.label}>
                  <h3 className="text-[26px] sm:text-[30px] lg:text-[36px] font-light text-[#1f1f1f]">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-[#867d74]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-[2.5rem] h-[700px] sm:h-[850px] lg:h-[980px] 2xl:h-[1100px]">
              <Image
                src="/experience.jpg"
                alt="Sumit Productions Experience"
                fill
                className="object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            {/* FLOATING CARD TOP */}
            <div className="absolute top-6 sm:top-10 left-6 sm:left-10 rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-2xl p-5 sm:p-6 shadow-[0_10px_50px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                  <Camera size={18} className="text-white" />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.28em] text-white/70">
                    Signature Style
                  </p>

                  <h4 className="mt-1 text-[16px] font-light text-white">
                    Cinematic & Editorial
                  </h4>
                </div>
              </div>
            </div>

            {/* FLOATING CARD BOTTOM */}
            <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 max-w-[320px] rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_10px_50px_rgba(0,0,0,0.15)]">
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/70">
                Our Vision
              </p>

              <h3 className="mt-4 text-[24px] sm:text-[30px] font-light leading-[1.2] text-white">
                Turning real emotions into timeless cinematic memories.
              </h3>
            </div>

            {/* SMALL FLOATING BADGE */}
            <div className="absolute -bottom-6 left-10 rounded-full border border-[#ddd2c6] bg-[#faf7f2] px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#6d655d]">
                Premium Production Studio
              </p>
            </div>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-[#e1d7cb] bg-white/60 backdrop-blur-xl p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f3ebe1]">
                  <Icon size={20} className="text-[#a88c72]" />
                </div>

                <h3 className="mt-8 text-[24px] sm:text-[28px] font-light leading-[1.2] text-[#1f1f1f]">
                  {service.title}
                </h3>

                <p className="mt-5 text-[14px] leading-[1.9] text-[#6e665e]">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#8d8175]">
                  Discover More

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}