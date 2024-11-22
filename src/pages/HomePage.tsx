import * as React from "react";
import ProjectCard  from "../components/ProjectCard";
import Button  from "../components/Button";
import Footer from "../components/Footer";
import Profil from "../assets/profil.png"
import Poster1 from "../assets/poster/poster1.png";
import Poster2 from "../assets/poster/poster2.png";
import Poster3 from "../assets/poster/poster3.png";
import Poster4 from "../assets/poster/poster4.png";

const projects = [
  {
    imageSrc: Poster1 ,
    alt: "Portfolio project 1",
  },
  {
    imageSrc:  Poster2 ,
    alt: "Portfolio project 2",
  },
  {
    imageSrc:  Poster3 ,
    alt: "Portfolio project 3",
  },
  {
    imageSrc:  Poster4 ,
    alt: "Portfolio project 4",
  },
];


export const HomePage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      {/* Hero Section */}
      <section className="overflow-hidden px-4 md:px-20 py-4 md:py-0.5 w-full bg-secondary">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
          <article className="flex flex-col w-full md:w-6/12">
            <div className="flex flex-col justify-center h-full py-8 md:py-0">
              <h1 className="text-3xl md:text-5xl font-medium text-black leading-tight md:leading-[70px]">
                Hi, I am Syarif Maulana
                <br className="hidden md:block" />a Graphic Designer and
                Fullstack Developer
              </h1>
              <p className="mt-4 md:mt-6 text-lg md:text-xl leading-relaxed text-zinc-500">
                I'm a freelance Graphic Designer and FullStack Developer from
                Banjarbaru. I help businesses and company reach their ideas into
                high quality products
              </p>
            </div>
          </article>
          <div className="w-full md:w-6/12 md:ml-5">
            <img
              loading="lazy"
              src={Profil}
              alt="Profile"
              className="object-contain w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col px-4 md:px-0 mx-auto mt-8 md:mt-16 w-full max-w-[1053px]">
        <h2 className="text-xl font-bold text-zinc-500">My Projects</h2>
        <div className="mt-8 md:mt-14 py-4 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectCard
                  imageSrc={project.imageSrc}
                  imageAlt={project.alt}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button href="/projects">See More</Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};
