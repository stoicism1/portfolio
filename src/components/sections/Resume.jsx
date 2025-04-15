import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FileText, Download } from "lucide-react";

export const Resume = () => {
  return (
    <section
      id="resume"
      className="py-16 px-4 md:px-12 bg-background text-white"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold flex justify-center items-center gap-2 text-amber-400">
              <FileText className="w-7 h-7" />
              Resume
            </h2>
            <p className="text-gray-400 mt-2 max-w-xl mx-auto">
              A snapshot of my experience and qualifications. Download my resume to learn more.
            </p>
          </div>

          {/* Profile Box */}
          <div className="bg-secondary text-secondary-foreground rounded-2xl shadow-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white">Lakshmi Reddy</h3>
            <p className="text-lg text-amber-400 mt-1 font-medium">
              Senior Java Fullstack Developer
            </p>
            <p className="text-gray-400 mt-2">
              10+ years of professional experience in designing and developing enterprise-grade web applications using Java, Spring Boot, Angular, React, and cloud technologies.
            </p>

            {/* Download Button */}
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1EGwDkGqajCoMzG_EISb_-LkeOdAjIvA7/view?usp=sharing"
                download="Lakshmi Reddy . Java Fullstack Developer_Resume.pdf"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-background font-semibold py-2 px-6 rounded-full transition shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
