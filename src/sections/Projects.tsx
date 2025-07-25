import aibilling from "@/assets/images/AI-billing.png";
import medichat from "@/assets/images/medical-chatbot.png";
import weather from "@/assets/images/weather-dashboard.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import GrainImage from "@/assets/images/grain.jpg";
import {Card} from "@/components/Card";
import {SectionHeader} from "@/components/SectionHeader";

const portfolioProjects = [
  {
    number: "one",
    year: "2024-25",
    title: "AI Billing Dashboard",
    results: [
      { title: "Built using Roboflow, YOLOv8 and OpenCV" },
      { title: "Flask for Backened and SQL for Database" },
      { title: "reducing checkout time & enhanced shopping" },
    ],
    link: "https://github.com/devilsrage/AI_Billing_system",
    image: aibilling,
  },
  {
    number: "two",
    year: "2024-25",
    title: "Medical Chatbot",
    results: [
      { title: "Built using NLP and tensorflow" },
      { title: "Flask used for Web Backend" },
      { title: " It helps with symptom checking and guidance" },
    ],
    link: "https://github.com/devilsrage/Medical-Chatbot",
    image: medichat,
  },
  {
    number: "three",
    year: "2023-24",
    title: "Weather Dashboard",
    results: [
      { title: "Built using weather-api" },
      { title: "Search any Location" },
      { title: "Depoyed on Netify" },
    ],
    link: "https://github.com/devilsrage/Weather-Dashboard",
    image: weather,
  },
];

export const ProjectsSection = () => {
  // @ts-ignore
  return (
      <section className="pb-16 lg:py-24" id="projects">
        <div className="container">
          <SectionHeader
          eyebrow="Real World Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experinces."
          />
          <div className="flex flex-col mt-10 md:mt-20 gap-20">
            {portfolioProjects.map((project,projectIndex) => (
                <Card key={project.title}
                    className="sticky px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
                    style={{
                      top: `calc(64px + ${projectIndex * 40}px)`,
                    }}
                >
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="lg:pb-16">
                        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase
                        tracking-widest text-sm text-transparent bg-clip-text">
                          <span>{project.number}</span>
                          <span>&bull;</span>
                          <span>{project.year}</span>
                        </div>
                      <h3 className="font-serif text-2xl mt-2 md:text-3xl">{project.title}</h3>
                      <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                      <ul className="flex flex-col gap-4 mt-4">
                        {project.results.map((result) => (
                            // eslint-disable-next-line react/jsx-key
                            <li className="flex gap-2 text-sm md:text-base text-white/50">
                              <CheckCircleIcon className="size-5 md:size-6"/>
                              <span>{result.title}</span>
                            </li>
                        ))}
                      </ul>
                      <a href={project.link} target="_blank">
                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center
                         justify-center gap-2 mt-8">
                          <span>Visit GitHub</span>
                          <ArrowUpRightIcon className="size-4"/>
                        </button>
                      </a>
                    </div>
                    <div className="relative">
                      <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:mb-0 lg:mt-4 lg:absolute lg:h-full rounded-2xl
                      lg:w-auto lg:max-w-none"/>
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
};
