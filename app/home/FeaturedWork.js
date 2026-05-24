"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Play,
  Camera,
  Sparkles,
} from "lucide-react";

const works = [
  {
    title: "Luxury Weddings",
    category: "Wedding Films",
    image: "/hero1.jpg",
    description:
      "Emotionally crafted wedding films with timeless storytelling and cinematic elegance.",
    height: "h-[540px] sm:h-[650px] lg:h-[860px]",
  },
  {
    title: "Pre Wedding Stories",
    category: "Couple Shoots",
    image: "/sec2.jpg",
    description:
      "Natural moments captured through soft editorial compositions and artistic direction.",
    height: "h-[260px] sm:h-[320px] lg:h-[420px]",
  },
  {
    title: "Fashion & Editorial",
    category: "Studio Production",
    image: "/sec2-2.jpg",
    description:
      "Luxury portraiture and editorial visuals crafted with modern cinematic aesthetics.",
    height: "h-[260px] sm:h-[320px] lg:h-[420px]",
  },
];

export default function FeaturedWork() {
  return (
    <section className="relative overflow-hidden bg-[#faf7f2] py-24 sm:py-28 lg:py-36">
      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#f3ece3] blur-3xl opacity-60" />

      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#efe6da] blur-3xl opacity-40" />

      {/* CONTAINER */}
      <div className="relative z-10 w-full max-w-[1920px] 2xl:max-w-[2400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 2xl:px-24">
        {/* TOP SECTION */}
        <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-12">
          {/* LEFT */}
          <div className="max-w-[900px]">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#e3d8cb] bg-white/70 backdrop-blur-xl px-5 py-2">
              <Sparkles size={14} className="text-[#b89d81]" />

              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[#8f8377]">
                Featured Work
              </span>
            </div>

            <h2 className="mt-7 font-light leading-[0.95] tracking-[-0.04em] text-[#1f1f1f] text-[40px] sm:text-[56px] md:text-[74px] lg:text-[92px] xl:text-[105px] 2xl:text-[135px]">
              Cinematic
              <br />
              Showcase
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-[560px]">
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] 2xl:text-[20px] leading-[1.9] text-[#6f665d]">
              Every frame is thoughtfully composed to create emotional,
              cinematic, and visually timeless experiences. From intimate
              wedding moments to luxury editorial productions, each story is
              crafted with elegance and artistry.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-3 rounded-full bg-[#1f1f1f] px-7 py-4 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-white transition-all duration-500 hover:scale-[1.03]"
              >
                View Portfolio

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </Link>

              <div className="flex items-center gap-3 rounded-full border border-[#e3d8cb] bg-white/60 backdrop-blur-xl px-5 py-4">
                <Camera size={16} className="text-[#9d846b]" />

                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#746b62]">
                  Cinematic Storytelling
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8">
          {/* BIG LEFT CARD */}
          <div
            className={`group relative overflow-hidden rounded-[2.5rem] ${works[0].height}`}
          >
            {/* IMAGE */}
            <Image
              src={works[0].image}
              alt={works[0].title}
              fill
              className="object-cover transition-transform duration-[2500ms] group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* FLOATING CARD */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 rounded-[1.8rem] border border-white/20 bg-white/10 backdrop-blur-2xl px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                  <Play
                    size={16}
                    className="fill-white text-white ml-0.5"
                  />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.28em] text-white/70">
                    Featured Film
                  </p>

                  <h4 className="mt-1 text-white text-[14px] font-light">
                    Watch Story
                  </h4>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 w-full p-7 sm:p-10 lg:p-12">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-white/75">
                {works[0].category}
              </p>

              <h3 className="mt-4 text-white font-light leading-[0.95] text-[34px] sm:text-[44px] lg:text-[60px] 2xl:text-[78px]">
                {works[0].title}
              </h3>

              <p className="mt-5 max-w-[540px] text-[14px] sm:text-[15px] leading-[1.8] text-white/80">
                {works[0].description}
              </p>
            </div>
          </div>

          {/* RIGHT STACK */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {works.slice(1).map((item, index) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-[2.5rem] ${item.height}`}
              >
                {/* IMAGE */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[2500ms] group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                {/* FLOATING MINI CARD */}
                <div className="absolute top-5 right-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-2">
                  <span className="text-[9px] uppercase tracking-[0.28em] text-white">
                    0{index + 1}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/75">
                    {item.category}
                  </p>

                  <h3 className="mt-3 text-white font-light leading-[1] text-[26px] sm:text-[34px] lg:text-[42px] 2xl:text-[54px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[480px] text-[13px] sm:text-[14px] leading-[1.8] text-white/75">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-24 border-t border-[#e5dbcf] pt-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* LEFT */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#8a8075]">
                Capturing stories with elegance, emotion & cinematic artistry
              </p>

              <h3 className="mt-4 text-[24px] sm:text-[30px] lg:text-[38px] 2xl:text-[48px] font-light leading-[1.2] text-[#1f1f1f]">
                Every story deserves
                <br />
                a timeless visual experience.
              </h3>
            </div>

            {/* RIGHT TAGS */}
            <div className="flex flex-wrap gap-3">
              {[
                "Wedding Films",
                "Destination Weddings",
                "Pre Weddings",
                "Fashion Shoots",
                "Cinematic Reels",
                "Luxury Portraits",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-[#ddd2c6] bg-white/60 backdrop-blur-xl px-5 py-3 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#6f665d]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}