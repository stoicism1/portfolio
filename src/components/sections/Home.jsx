import { RevealOnScroll } from "../RevealOnScroll";
import { TypeAnimation } from "react-type-animation";

const skills = [
  "Java", "Spring Boot", "Microservices", "AWS", "REST APIs"
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/laxmireddy-s/",
    label: "LinkedIn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin h-5 w-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    href: "mailto:srilakshmireddysanikommu@gmail.com",
    label: "Email",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail h-5 w-5">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    ),
  },
  {
    href: "https://calendly.com/srilakshmireddysanikommu/30min",
    label: "Schedule Meeting",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-5 w-5">
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
      </svg>
    ),
  },
];

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black-800">
      <RevealOnScroll>
        <header className="text-center z-10 px-4 pt-34">
          {/* Centered Badge */}
          <div className="mb-4 flex justify-center">
            <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-amber-500/20 px-3 py-1.5 text-sm bg-amber-600/20 border-amber-600/30 text-amber-600">
              Senior Java Full Stack Developer
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
            Lakshmi Reddy Sanikommu
          </h1>

          {/* Typing Paragraph */}
          <TypeAnimation
            sequence={[
              "Java Full Stack Developer with 10+ years of experience in enterprise apps, microservices, and cloud-native solutions—building high-performance systems with great user experiences.",
            ]}
            speed={65}
            wrapper="p"
            cursor={true}
            repeat={0}
            className="text-gray-300 text-xl mb-6 max-w-2xl mx-auto leading-relaxed"
          />

          {/* Left-Aligned Section */}
          <div className="text-left max-w-4xl mx-auto">
            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="inline-flex items-center rounded-full border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-2 py-1 sm:px-3 sm:py-1.5 backdrop-blur-sm border-amber-600/30 hover:bg-amber-600/10 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mb-8">
              <a
                href="#projects"
                className="bg-amber-600 text-white py-3 px-6 rounded-2xl font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,159,0,0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-amber-500/50 text-amber-500 py-3 px-6 rounded-2xl font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,159,0,0.2)] hover:bg-amber-500/10"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-start gap-6 px-4 mb-8">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:text-amber-500 h-10 w-10 rounded-full hover:bg-amber-600/10 transition-all duration-300 hover:scale-110"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </header>
      </RevealOnScroll>
    </section>
  );
};
