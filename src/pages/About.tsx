import * as React from "react";
import { Link } from "react-router-dom";
import Card  from "../components/Card";
import Footer from "../components/Footer";
import Profil from "../assets/profil.png";
import {
  LaptopMinimalCheck,
  Lightbulb,
  Layers3,
  BookOpen,
  Handshake,
  Users,
} from "lucide-react";
import program1 from "../assets/programing/html.png";
import program2 from "../assets/programing/css.png";
import program3 from "../assets/programing/js.png";
import program4 from "../assets/programing/ts.png";
import program5 from "../assets/programing/php.png";
import program6 from "../assets/programing/java.png";
import program7 from "../assets/programing/phyton.png";
import program8 from "../assets/programing/react.png";
import program9 from "../assets/programing/tail.png";
import tool1 from "../assets/tools/vsc.png";
import tool2 from "../assets/tools/ps.png";
import tool3 from "../assets/tools/lr.png";
import tool4 from "../assets/tools/ai.png";
import tool5 from "../assets/tools/canva.png";
import tool6 from "../assets/tools/figma.png";



const services = [
  {
    icon: <Lightbulb className="w-16 h-16 text-primary" />,
    title: "UI & UX Design",
    description:
      "Designing intuitive and engaging interfaces to ensure an optimal user experience across applications or websites.",
  },
  {
    icon: <Layers3 className="w-16 h-16 text-primary" />,
    title: "Graphic Design",
    description:
      "Creating visually appealing designs for branding, promotions, and marketing needs.",
  },
  {
    icon: <LaptopMinimalCheck className="w-16 h-16 text-primary" />,
    title: "Web Development",
    description:
      "Building functional and responsive websites tailored to your business needs using the latest technologies.",
  },
];

const skills = [
  {
    icon: <Users className="w-16 h-16 text-primary" />,
    title: "Leadership Skills",
    description: "Able to lead teams effectively and self-lead.",
  },
  {
    icon: <Handshake className="w-16 h-16 text-primary" />,
    title: "Collaborative Teamwork",
    description: "Proven capability to work collaboratively with team members.",
  },
  {
    icon: <BookOpen className="w-16 h-16 text-primary" />,
    title: "Self-Discipline",
    description:
      "Consistently maintain self-discipline in executing tasks and responsibilities.",
  },
];


const About: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <section className="overflow-hidden px-4 md:px-20 py-4 md:py-0.5 w-full bg-secondary">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-12">
          <div className="flex flex-col w-full md:w-6/12">
            <div className="flex flex-col py-8 md:py-0">
              <h1 className="text-3xl md:text-5xl font-medium text-black leading-tight md:leading-[70px]">
                About Me
              </h1>
              <p className="mt-4 md:mt-6 text-lg md:text-xl leading-relaxed text-zinc-500">
                Hi, my name is Syarif Maulana. I am from Banjarbaru, Kalimantan
                Selatan. I am a second-year Computer Science student at Lambung
                Mangkurat University. I have a strong foundation in Graphic
                Designer and web development. I have a deep interest in
                technology and UI/UX design, which drives me to stay updated
                with the latest developments in the field.
              </p>
              <Link to="/contact">
                <button className="inline-flex justify-center px-8 md:px-14 py-3 mt-6 md:mt-8 text-lg font-bold text-white bg-sky-500 rounded-lg hover:bg-sky-600 transition-colors">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-6/12 md:ml-5">
            <img
              loading="lazy"
              src={Profil}
              className="object-contain w-full max-w-lg mx-auto"
              alt="Profile"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 md:px-8 mt-12 md:mt-20 max-w-[1006px] mx-auto w-full">
        <div className="p-4 md:p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">Skills</h2>

          {/* Programming Languages & Framework */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-600">
              Programming Languages & Framework:
            </h3>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              {/* Icons */}
              <img
                src={program1}
                alt="HTML"
                className="w-10 h-10 object-contain"
              />
              <img
                src={program2}
                alt="CSS"
                className="w-10 h-10 object-contain"
              />
              <img
                src={program3}
                alt="JavaScript"
                className="w-10 h-10 object-contain"
              />
              <img
                src={program4}
                alt="TypeScript"
                className="w-10 h-10 object-contain"
              />
              <img
                src={program5}
                alt="PHP"
                className="w-10 h-10 object-contain"
              />
              <img
                src={program6}
                alt="Java"
                className="w-10 h-10 object-contain"
              />
              <img
                src={program7}
                alt="Python"
                className="w-10 h-10 object-contain"
              />
              <img
                src={program8}
                alt="React"
                className="w-10 h-10 object-contain"
              />
              <img
                src={program9}
                alt="TailwindCSS"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>

          {/* Tools & Prototyping */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-600">
              Tools & Prototyping:
            </h3>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              {/* Icons */}
              <img
                src={tool1}
                alt="VS Code"
                className="w-10 h-10 object-contain"
              />
              <img
                src={tool2}
                alt="Photoshop"
                className="w-10 h-10 object-contain"
              />
              <img
                src={tool3}
                alt="Lightroom"
                className="w-10 h-10 object-contain"
              />
              <img
                src={tool4}
                alt="Illustrator"
                className="w-10 h-10 object-contain"
              />
              <img
                src={tool5}
                alt="Canva"
                className="w-10 h-10 object-contain"
              />
              <img
                src={tool6}
                alt="Figma"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="px-4 md:px-8 mt-12 md:mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
          Why Hire Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              variant="skill"
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 md:px-8 mt-16 md:mt-24">
        <div className="text-center">
          <h2 className="text-xl font-bold text-zinc-500">
            WHAT WILL I DO FOR YOU
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            SERVICE
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              variant="service"
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
