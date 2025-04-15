import React, { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import placeholderImage from "../../assets/placeholder.svg";
import { createPortal } from "react-dom";
import clsx from "clsx";

const Modal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen || !project) return null;

  return createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 z-40"
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        className={clsx(
          "fixed left-1/2 top-1/2 z-50 max-w-6xl w-[95vw] max-h-[90vh]",
          "translate-x-[-50%] translate-y-[-50%] overflow-auto",
          "bg-zinc-900 text-white shadow-xl border border-zinc-700 rounded-lg",
          "animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] p-6"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 text-white hover:text-amber-400 opacity-70 hover:opacity-100"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="grid grid-cols-[1fr_1.2fr] gap-6 h-full relative">
          {/* Left Side - narrower */}
          <div className="space-y-6">
            <div className="aspect-video overflow-hidden rounded-lg border border-zinc-700">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-4xl font-bold text-white">{project.title}</h2>
            <p className="text-base text-zinc-300">{project.description}</p>

            <div>
              <h4 className="font-semibold text-xl mb-2 text-amber-400">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-zinc-800 text-amber-300 rounded-full px-3 py-1 text-sm font-semibold border border-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-zinc-800 rounded-lg p-6 flex flex-col justify-between border border-zinc-700 space-y-6">
            <div className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-amber-400">Overview</h4>
                  <p className="text-base text-zinc-300">{project.overview}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-xl mb-2 text-amber-400">Key Achievements</h4>
                  <ul className="list-disc pl-5 text-zinc-300 text-base space-y-1">
                    {project.keyAchievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-zinc-700 pt-4 text-base space-y-1 text-zinc-400">
                  <p><strong>Completed:</strong> {project.year}</p>
                  <p><strong>Category:</strong> {project.category}</p>
                  <p><strong>Team Size:</strong> {project.teamSize}</p>
                </div>
              </div>
            </div>

            {/* Buttons moved here */}
            <div className="space-y-2">
  {project.liveDemo && (
    <a
      href={project.liveDemo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-600 transition"
    >
      <SquareArrowOutUpRight size={16} />
      View Live Demo
    </a>
  )}
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-zinc-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-600 transition"
    >
      <Github size={16} />
      GitHub Repo
    </a>
  )}
</div>

          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = 
  [
    {
      title: "Real-Time Data & Workflow Orchestration Platform",
      description:
        "A cloud-native, event-driven platform designed to streamline government workflows and deliver real-time data insights to internal and public stakeholders.",
      image: placeholderImage,
      year: "2024",
      category: "Government / Public Sector",
      tech: ["Java 17", "Spring Boot", "Angular", "Kafka", "GraphQL", "MongoDB", "Cosmos DB", "GCP", "Docker", "Kubernetes", "OAuth2", "JWT", "Hazelcast", "Power BI", "Camunda"],
      keyAchievements: [
        "Built Kafka-based event pipelines to enable real-time data flow across state systems",
        "Integrated Power BI for live dashboards and analytics across departments",
        "Orchestrated multi-step approval workflows using Camunda BPM engine",
        "Reduced latency of internal reporting systems by 45% through GraphQL and WebFlux",
        "Improved security posture with OAuth2/JWT-based API gateway authentication",
        "Enabled serverless compute for periodic jobs using AWS Lambda and GCP Cloud Functions"
      ],
      overview:
        "The State of Maine’s digital modernization project focused on building a resilient, data-driven platform for internal governance workflows and cross-departmental analytics. The solution enables reactive communication between systems via Kafka, real-time visualization through Power BI, and orchestrated automation of multi-actor workflows with Camunda. Built on a microservices architecture and deployed on GCP with full CI/CD pipelines and observability, it empowers state workers and decision-makers with actionable insights.",
      teamSize: "8",
      liveDemo: "#home",
      github: "#home"
    },    
    {
      title: "HIPAA-Compliant Claims Processing Platform",
      description:
        "Scalable, HIPAA-compliant real-time claims processing platform for healthcare insurance providers.",
      image: placeholderImage,
      year: "2022",
      category: "Enterprise",
      tech: ["Java 8", "Spring Boot", "Microservices", "Docker", "Kafka", "React", "Redux", "AWS", "Kafka", "Drool", "PostgreSQL"],
      keyAchievements: [
        "Implemented real-time claims processing system",
        "Decreased fraudulent payouts by 30% using Kafka-based detection",
        "Enhanced system observability with Prometheus, Grafana, and CloudWatch",
        "Integrated with external payment systems for seamless transactions",
      ],
      overview: "A modern claims processing platform built for NorthWinds Technology Solutions. The system modernized legacy systems, improved adjudication efficiency, reduced fraudulent claims, and streamlined provider interactions. It features a rules-based adjudication engine, provider portals, and comprehensive security measures for HIPAA compliance.",
      teamSize: "8",
      liveDemo: "https://www.northwindstech.com/",
      github: "#home",
    },
    {
      title: "Financial Trade Processing & Analytics Platform",
      description:
        "Enterprise-grade financial transaction system built for LPL Financial, for real-time trade processing, analytics, and secure customer-facing services.",
      image: placeholderImage,
      year: "2020",
      category: "Finance",
      tech: ["Java 11", "Spring Boot", "Angular 8", "NgRx", "Kafka", "Docker", "Kubernetes", "MariaDB", "MongoDB", "AWS", "OAuth2", "GraphQL", "SQS", "Jenkins", "WebFlux"],
      keyAchievements: [
        "Built microservices-based architecture for trade processing automation",
        "Enabled reactive, non-blocking APIs with Spring WebFlux for real-time updates",
        "Streamlined deployment using Docker & Kubernetes across multiple AWS environments",
        "Integrated GraphQL and WebSocket for real-time data exchange in Angular UI",
        "Utilized JEST, JUnit, and Selenium for full-stack test coverage",
        "Implemented secure authentication and role-based access control using OAuth2 and Spring Security"
      ],
      overview:
        "A robust platform supporting high-volume trade workflows including FX and fixed income products. This system enabled end-to-end automation of trading operations, enhanced with real-time analytics via Kibana and seamless DevOps practices using GitLab and Jenkins. Built to meet financial compliance and performance standards.",
      teamSize: "6",
      liveDemo: "#home",
      github: "#home"
    },
  ];

  const ProjectCard = (props) => {
    const { title, description, image, year, category, tech } = props;
    return (
      <div className="rounded-lg border border-zinc-700 bg-zinc-900 text-white overflow-hidden h-full flex flex-col shadow-md hover:shadow-lg transition-all duration-300 group">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-r from-amber-500 to-amber-600" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => setSelectedProject(props)}
              className="h-10 px-4 py-2 rounded-md text-sm font-medium bg-white/20 border border-white text-white hover:bg-white/30"
            >
              View Details
            </button>
          </div>
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div className="inline-flex items-center rounded-full bg-amber-800/20 text-amber-400 px-2.5 py-0.5 text-xs font-semibold">
              {category}
            </div>
            <div className="text-xs text-zinc-400">{year}</div>
          </div>
          <h3 className="font-bold mb-2 line-clamp-1 text-amber-300">{title}</h3>
          <p className="text-zinc-400 text-sm line-clamp-3 mb-4">{description}</p>
          <div className="flex flex-wrap gap-1 mb-4 mt-auto">
  {tech.slice(0, 3).map((t) => (
    <span
      key={t}
      className="inline-flex items-center rounded-full bg-zinc-800 text-amber-300 px-2.5 py-0.5 text-xs font-semibold"
    >
      {t}
    </span>
  ))}
  {tech.length > 3 && (
    <span className="inline-flex items-center rounded-full bg-zinc-700 text-amber-300 px-2.5 py-0.5 text-xs font-medium">
      +{tech.length - 3} more
    </span>
  )}
</div>
        </div>
      </div>
    );
  };

  return (
    <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
      <RevealOnScroll>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold flex justify-center items-center gap-2 text-amber-400">Project Portfolio</h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Explore my portfolio of enterprise applications, microservices architectures, and cloud-native solutions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
      </RevealOnScroll>
    </div>
  );
};
