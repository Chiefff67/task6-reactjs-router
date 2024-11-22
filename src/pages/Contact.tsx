import * as React from "react";
import { InputField } from "../components/InputField";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"; 
import { Instagram, Linkedin, Github } from "lucide-react";


const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };


  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <header className="px-4 md:px-20 py-8 md:py-12 w-full bg-secondary text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          Contact Me
        </h1>
      </header>

      <section className="px-4 md:px-8 mt-12 md:mt-24 max-w-[1073px] mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <article className="w-full md:w-[54%]">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                  Get in touch
                </h2>
                <p className="mt-4 text-base text-zinc-500">
                  I'm very approachable and would love to speak to you. Feel
                  free to call and send me an email. Follow me on social media
                  or simply complete the enquiry form.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold">Connect</h2>
                <div className="flex space-x-6">
                  {/* Social Media Icons */}
                  <Link
                    to="https://www.instagram.com/fffeihc._/profilecard/?igsh=emNsa3BmdGIxN2h0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <Instagram className="w-8 h-8 text-black" />
                  </Link>

                  {/* LinkedIn Icon */}
                  <Link
                    to="https://www.linkedin.com/in/syarif-maulana67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <Linkedin className="w-8 h-8 text-black" />
                  </Link>

                  {/* GitHub Icon */}
                  <Link
                    to="https://github.com/Chiefff67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <Github className="w-8 h-8 text-black" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <article className="w-full md:w-[46%]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-black">Send me message</h2>
              <InputField label="Name" id="name" />
              <InputField label="Email" id="email" type="email" />
              <InputField label="Subject" id="subject" />
              <InputField label="Your Message" id="message" type="textarea" />
              <div className="text-right">
                <Button>Send Message</Button>
              </div>
            </form>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
