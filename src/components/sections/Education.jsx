import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { GraduationCap, MapPin, Calendar, Book } from "lucide-react";

export const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-4 md:px-12 bg-background text-white"
    >
      <RevealOnScroll>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold flex justify-center items-center gap-2 text-amber-400">
            <GraduationCap className="w-7 h-7" />
            Education
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            My academic background and qualifications in Computer Science and Engineering.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Master's Degree */}
          <div className="bg-secondary text-secondary-foreground rounded-2xl shadow-xl p-6 border border-white/40 hover:border-amber-400/40 transition">
            <h3 className="text-xl font-semibold text-amber-400 mb-1">
              Master of Science in Computer Science
            </h3>
            <p className="text-sm text-gray-300">Arizona State University</p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
              <MapPin className="w-4 h-4" />
              Phoenix, AZ
              <Calendar className="w-4 h-4 ml-4" />
              Aug 2011 - Dec 2012
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2 text-white mb-2 font-medium">
                <Book className="w-4 h-4" />
                Key Courses:
              </div>
              <div className="flex flex-wrap gap-2">
                {["Advanced Algorithms", "Distributed Systems", "Cloud Computing", "Operating Systems", "Computer Networks", "Databases"].map(
                  (course) => (
                    <span
                      key={course}
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border border-amber-400 bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    >
                      {course}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="bg-secondary text-secondary-foreground rounded-2xl shadow-xl p-6 border border-white/40 hover:border-amber-400/40 transition">
            <h3 className="text-xl font-semibold text-amber-400 mb-1">
              Bachelor of Technology in Computer Science
            </h3>
            <p className="text-sm text-gray-300">Jawaharlal Nehru Technological University</p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
              <MapPin className="w-4 h-4" />
              Kakinada, India
              <Calendar className="w-4 h-4 ml-4" />
              Jul 2007 - May 2011
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2 text-white mb-2 font-medium">
                <Book className="w-4 h-4" />
                Key Courses:
              </div>
              <div className="flex flex-wrap gap-2">
                {["Data Structures", "Operating Systems", "Database Management", "Web Development", "Computer Networks","Software Engineering","Object-Oriented Programming","Database Management System"].map(
                  (course) => (
                    <span
                      key={course}
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border border-amber-400 bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    >
                      {course}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
