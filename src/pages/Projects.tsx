import * as React from "react";
import ImageSlider from "../components/ImageSlider";
import  Footer  from "../components/Footer";
import Img from "../assets/3d.png";
import Logo1 from "../assets/logo/logo1.png";
import Banner1 from "../assets/banner/banner1.png";
import Banner2 from "../assets/banner/banner2.png";
import Poster1 from "../assets/poster/poster1.png";
import Poster2 from "../assets/poster/poster2.png";
import Poster3 from "../assets/poster/poster3.png";
import Poster4 from "../assets/poster/poster4.png";
import Ui1 from "../assets/ui/1.png";
import Ui2 from "../assets/ui/2.png";
import Ui3 from "../assets/ui/3.png";
import Ui4 from "../assets/ui/4.png";
import Ui5 from "../assets/ui/5.png";
import Ui6 from "../assets/ui/6.png";
import Ui7 from "../assets/ui/7.png";


const Projects: React.FC = () => {

  return (
    <main className="flex flex-col bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary w-full py-8 md:py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-medium text-black leading-tight">
                Hi, Let's see all <br /> my project
              </h1>
              <p className="text-lg md:text-xl text-zinc-500">
                Here's all my works, include design{" "}
                <br className="hidden md:block" />
                Poster, Banner, UI/UX, and Logo
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={Img}
                alt="Project showcase preview"
                className="w-full max-w-md md:max-w-full object-contain transform md:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="px-4 md:px-20 py-12 md:py-20 space-y-16">
        {/* Logo Section */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-500 ml-4 md:ml-28">
            Logo
          </h2>
          <div className="flex justify-center">
            <img
              src={Logo1}
              alt="Logo design showcase"
              className="w-full max-w-3xl object-contain"
            />
          </div>
        </div>

        {/* Banner Section */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-500 ml-4 md:ml-28">
            Banner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7 justify-center">
            <img
              src={Banner1}
              alt="Banner design 1"
              className="w-full object-contain"
            />
            <img
              src={Banner2}
              alt="Banner design 2"
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Poster Design Section */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-500 ml-4 md:ml-28">
            Poster Design
          </h2>
          <div className="w-full">
            <ImageSlider
              images={[Poster1, Poster2, Poster3, Poster4]}
              variant="poster"
            />
          </div>
        </div>

        {/* UI/UX Section */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-500 ml-4 md:ml-28">
            UI/UX
          </h2>
          <div className="w-full">
            <ImageSlider
              images={[Ui1, Ui2, Ui3, Ui4, Ui5, Ui6, Ui7]}
              variant="ui"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
