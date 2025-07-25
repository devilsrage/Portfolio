// @ts-ignore
"use client";
import {SectionHeader} from "@/components/SectionHeader"
import {Card} from "@/components/Card";
import BookImage from "@/assets/images/book-cover.png"
import Image from "next/image"
import JavascriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CSSIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import GithubIcon from "@/assets/icons/github.svg"
import PythonIcon from "@/assets/icons/python.svg"
import FigmaIcon from "@/assets/icons/figma.svg"
import BootstrapIcon from "@/assets/icons/bootstrap.svg"
import MapImage from "@/assets/images/map.jpg"
import smileMemoji from "@/assets/images/memoji-smile.png"
import {CardHeader} from "@/components/CardHeader";
import {ToolboxItems} from "@/components/ToolboxItems";
import {motion} from "framer-motion";
import {useRef} from "react";

const toolboxItems = [
  {
    title: "Javascript",
    iconType:JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType:HTMLIcon,
  },
  {
    title: "CSS3",
    iconType:CSSIcon,
  },
  {
    title: "React",
    iconType:ReactIcon,
  },
  {
    title: "Github",
    iconType:GithubIcon,
  },
  {
    title: "Python",
    iconType:PythonIcon,
  },
  {
    title: "Figma",
    iconType:FigmaIcon,
  },
  {
    title: "BootStrap",
    iconType:BootstrapIcon,
  },
]

const hobbies = [
  {
    title: "Gaming",
    emoji:'🎮',
    left:'5%',
    top:'5%',
  },
  {
    title: "Music",
    emoji:'🎵',
    left:'50%',
    top:'5%',
  },
  {
    title: "Traveling",
    emoji:'🧳',
    left:'10%',
    top:'35%',
  },
  {
    title: "Football",
    emoji:'⚽',
    left:'45%',
    top:'30%',
  },
  {
    title: "Anime",
    emoji:'☯',
    left:'65%',
    top:'60%',
  },
  {
    title: "Fitness",
    emoji:'🏋️‍♂️',
    left:'5%',
    top:'65%',
  },
]

export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
  <section id="about">
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me"
                       title="A Glimpse Into My World"
                       description="Learn more about who I am, what I do, and what inspires me" />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] w-[955px] md:col-span-3 lg:col-span-2 ">
              <CardHeader title="My Toolbox"
                          description="Explore the Technologies and tools I use to craft exceptional digital Experience."
                          className=""/>
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond digital realm." className="px-6 py-6"/>
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                    <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r
                    from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                         style={{
                      left:hobby.left,
                      top:hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                    >
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={MapImage} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              size-20 rounded-full
              after:content-[''] after:absolute after:inset-0 after:outline after:outline-2
              -outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400
                -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="smile memoji" className="size-20"/>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
)};
