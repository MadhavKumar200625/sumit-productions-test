"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Quote,
  Star,
  PlayCircle,
} from "lucide-react";

const testimonials = [
  {
    name: "Aarav & Mehak",
    role: "Destination Wedding",
    image: "/test.jpg",
    review:
      "The entire experience felt effortless and luxurious. Every frame carried emotion, elegance, and cinematic beauty beyond what we imagined.",
  },
  {
    name: "Riya Kapoor",
    role: "Editorial Shoot",
    image: "/test.jpg",
    review:
      "The visuals looked straight out of a luxury magazine. The direction, styling, and storytelling were absolutely exceptional.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf7f2] py-24 sm:py-28 lg:py-36">
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#efe5d9] blur-3xl opacity-50" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#f3ebe1] blur-3xl opacity-60" />

      {/* CONTAINER */}
      <div className="relative z-10 w-full max-w-[1920px] 2xl:max-w-[2400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 2xl:px-24">
        {/* TOP */}
        <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-10">
          {/* LEFT */}
          <div className="max-w-[900px]">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#998d82]">
              Client Stories
            </p>

            <h2 className="mt-5 font-light leading-[0.95] tracking-[-0.04em] text-[#1f1f1f] text-[40px] sm:text-[56px] md:text-[72px] lg:text-[92px] xl:text-[105px] 2xl:text-[135px]">
              Memories
              <br />

              <span className="text-[#b89c80]">That Stay</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-[520px]">
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] 2xl:text-[20px] leading-[1.9] text-[#6f665d]">
              Every project is built around genuine emotions, elegant visuals,
              and unforgettable storytelling. Here’s what our clients say about
              their experience with Sumit Productions.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[#1f1f1f]"
            >
              Start Your Story

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="mt-20 grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8">
          {/* LEFT LARGE REVIEW */}
          <div className="relative overflow-hidden rounded-[2.8rem] bg-[#f3ebe1] p-8 sm:p-12 lg:p-16">
            {/* QUOTE */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/70 backdrop-blur-xl">
              <Quote size={28} className="text-[#a88d73]" />
            </div>

            {/* TEXT */}
            <h3 className="mt-10 max-w-[900px] text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] 2xl:text-[82px] font-light leading-[1.15] tracking-[-0.03em] text-[#1f1f1f]">
              “They transformed our emotions into timeless cinematic art.”
            </h3>

            <p className="mt-8 max-w-[700px] text-[15px] sm:text-[16px] lg:text-[17px] 2xl:text-[20px] leading-[1.9] text-[#6e665e]">
              From the smallest candid moments to the grand cinematic sequences,
              every frame felt personal, emotional, and beautifully curated.
              Their storytelling approach made our memories feel alive forever.
            </p>

            {/* CLIENT */}
            <div className="mt-12 flex items-center gap-5">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/test.jpg"
                  alt="Client"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-[18px] font-light text-[#1f1f1f]">
                  Karan & Aisha
                </h4>

                <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-[#8c8175]">
                  Luxury Destination Wedding
                </p>
              </div>
            </div>

            {/* FLOATING STARS */}
            <div className="absolute top-10 right-10 flex items-center gap-1 rounded-full border border-[#dfd2c4] bg-white/70 px-5 py-3 backdrop-blur-xl">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={14}
                  className="fill-[#c4a486] text-[#c4a486]"
                />
              ))}

              <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-[#7a7067]">
                5.0 Experience
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8">
            {/* VIDEO CARD */}
            <div className="group relative overflow-hidden rounded-[2.5rem] h-[340px] sm:h-[420px] lg:h-[480px]">
              <Image
                src="/test.jpg"
                alt="Video Story"
                fill
                className="object-cover transition-transform duration-[2500ms] group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl transition-transform duration-500 group-hover:scale-110">
                  <PlayCircle size={42} className="text-white" />
                </div>
              </div>

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/75">
                  Client Film
                </p>

                <h3 className="mt-3 text-[28px] sm:text-[34px] lg:text-[42px] font-light leading-[1.1] text-white">
                  Watch Their Story
                </h3>
              </div>
            </div>

            {/* SMALL REVIEWS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[2rem] border border-[#e2d7cb] bg-white/60 backdrop-blur-xl p-6 sm:p-7"
                >
                  {/* TOP */}
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="text-[18px] font-light text-[#1f1f1f]">
                        {item.name}
                      </h4>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-[#8a8075]">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* REVIEW */}
                  <p className="mt-6 text-[14px] leading-[1.9] text-[#6f665d]">
                    {item.review}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-24 border-t border-[#e4d8cc] pt-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8a8075]">
              Trusted by couples, creators & luxury brands across India
            </p>

            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              {[
                "Destination Weddings",
                "Editorial Shoots",
                "Luxury Films",
                "Brand Stories",
              ].map((item) => (
                <span
                  key={item}
                  className="text-[11px] uppercase tracking-[0.22em] text-[#6f665d]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}