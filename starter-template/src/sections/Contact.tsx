"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg"

export const ContactSection = () => {
    const handleContactClick = () =>{
        window.location.href = "mailto:nikhildwivedi42794@gmail.com"
    }
  return (
      <section id="contact">
          <div className="py-16 pt-12 lg:py-24 lg:pt-20">
            <div className="container">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900
                py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
                  <div className="absolute inset-0 opacity-5 -z-10" style={{
                      backgroundImage: `url(${grainImage.src})`,
                  }}></div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                      <div className=" ">
                          <h2 className="font-serif text-2xl md:text-3xl">Let’s build the future together</h2>
                          <p className="text-sm mt-2 md:text-base">I’m a final year Computer Science student passionate
                              about technology and innovation. I’m actively seeking opportunities to contribute, grow, and
                              make an impact. Let’s connect and explore how I can add value to your team.</p>
                      </div>
                      <div>
                          <button onClick={handleContactClick} className="text-white bg-gray-900 inline-flex
                          items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900">
                            <span className="font-semibold ">Contact Me</span>
                            <ArrowUpRightIcon className="size-4" />
                          </button>
                      </div>
                    </div>
                </div>
            </div>
          </div>
      </section>
  );
};
