"use client";

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
      <section id="home">
        <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
          {/* Background overlays with pointer-events-none */}
          <div
              className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none"
          >
            <div
                className="absolute inset-0 -z-30 opacity-5 pointer-events-none"
                style={{ backgroundImage: `url(${grainImage.src})` }}
            ></div>
            <div className="size-[620px] hero-ring pointer-events-none"></div>
            <div className="size-[820px] hero-ring pointer-events-none"></div>
            <div className="size-[1020px] hero-ring pointer-events-none"></div>
            <div className="size-[1220px] hero-ring pointer-events-none"></div>

            <HeroOrbit size={430} rotate={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
              <StarIcon className="size-8 text-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={440} rotate={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
              <StarIcon className="size-5 text-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={520} rotate={-41} shouldOrbit orbitDuration="34s">
              <div className="size-2 rounded-full bg-emerald-300/20 pointer-events-none" />
            </HeroOrbit>
            <HeroOrbit size={530} rotate={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
              <StarIcon className="size-10 text-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={550} rotate={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
              <StarIcon className="size-12 text-emerald-300" />
            </HeroOrbit>
            <HeroOrbit size={590} rotate={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
              <StarIcon className="size-8 text-emerald-300" />
            </HeroOrbit>
            <HeroOrbit size={650} rotate={-5} shouldOrbit orbitDuration="42s">
              <div className="size-2 rounded-full bg-emerald-300/20 pointer-events-none" />
            </HeroOrbit>
            <HeroOrbit size={710} rotate={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
              <StarIcon className="size-14 text-emerald-300/20" />
            </HeroOrbit>
            <HeroOrbit size={720} rotate={85} shouldOrbit orbitDuration="46s">
              <div className="size-3 rounded-full bg-emerald-300/20 pointer-events-none" />
            </HeroOrbit>
            <HeroOrbit size={800} rotate={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
              <StarIcon className="size-28 text-emerald-300" />
            </HeroOrbit>
          </div>

          <div className="container relative z-10">
            <div className="flex flex-col items-center">
              <Image
                  src={memojiImage}
                  className="size-[100px]"
                  alt="person peeking from behind laptop"
              />
              <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
                <div className="bg-green-500 rounded-full size-2.5 relative">
                  <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
                </div>
                <div className="text-sm font-medium">Available for new projects</div>
              </div>
            </div>

            <div className="max-w-lg mx-auto">
              <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
                Hi! I'm Nikhil Dwivedi
              </h1>
              <p className="mt-4 text-center text-white/60 md:text-lg">
                I am confident that my enthusiasm, adaptability, and commitment to excellence make me a valuable
                asset to any organization ready to embrace innovation and drive technological advancements
                forward.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 relative z-20">
              <button
                  onClick={() => handleClick("projects")}
                  className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
              >
                <span className="font-semibold">Explore My Work</span>
                <ArrowDown className="size-4" />
              </button>
              <button onClick={()=>handleClick("contact")} className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
                <span>👋</span>
                <span className="font-semibold">Let's Connect</span>
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};
