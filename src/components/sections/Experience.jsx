import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import {
  ChevronUp,
  Calendar,
  MapPin,
  Building,
  Award,
  Users,
  Target,
  FileText,
  CircleCheckBig,
} from "lucide-react";

export const Experience = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [openIndex, setOpenIndex] = useState(0); // Initially open the first item
  const industries = ["All", "State Client", "Financial", "Health", "Retail"];

  const experienceItems = 
  [
    {
      role: "Sr. Java Full Stack Developer",
      company: "State of Maine",
      location: "Augusta, ME",
      period: "Oct 2022 - Present",
      industry: "State Client",
      description:
        "Developed and maintained enterprise applications for state services using modern full stack technologies.",
      responsibilities: [
        "Developed and maintained a web-based case management system using Java 17, Spring Boot, and Angular.",
        "Designed and implemented a microservices architecture with Spring Boot, Spring Cloud, and Docker.",
        "Built and deployed scalable RDS instances with PostgreSQL, AWS CDK, and Oracle 12c.",
        "Developed a real-time data pipeline using Apache Kafka.",
        "Enhanced application security using OAuth2 and JWT-based authentication.",
      ],
      skills: [
        "Java",
        "Spring Boot",
        "TypeScript",
        "Angular",
        "PostgreSQL",
        "OAuth2",
        "Jenkins",
        "Docker",
        "GitHub Actions",
      ],
      achievements: [
        { label: "Citizen Satisfaction", value: "95%" },
        { label: "Faster Data Retrieval", value: "35%" },
        { label: "Service Uptime", value: "99.9%" },
        { label: "Manual Work Reduction", value: "50%" },
      ],
      themeColor: "from-[#006747] to-[#A2AAAD]",
    },
    {
      role: "Java Full Stack Developer",
      company: "NorthWinds Technology Solutions",
      location: "Roanoke, VA",
      period: "Jan 2021 - Sep 2022",
      industry: "Financial, Health",
      description:
        "Contributed to the development of innovative insurance technology solutions for dental claims processing.",
      responsibilities: [
        "Developed and maintained web applications to streamline dental insurance claim workflows.",
        "Collaborated with cross-functional teams to design scalable software solutions.",
        "Implemented user-friendly interfaces to enhance client experience.",
        "Optimized backend services for improved performance and reliability.",
        "Ensured compliance with industry standards and data security protocols.",
      ],
      skills: [
        "Java",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "AWS",
        "Docker",
        "Jenkins",
        "Git",
        "Agile Methodologies",
      ],
      achievements: [
        { label: "Claims Processed", value: "1M+" },
        { label: "System Uptime", value: "99.9%" },
        { label: "Claim Processing Speed", value: "50%" },
        { label: "HIPPA Violations", value: "0" },
      ],
      themeColor: "from-[#1E3A8A] to-[#3B82F6]", // Blue gradient
    },
    {
      role: "Java Full Stack Developer",
      company: "LPL Financial",
      location: "San Diego, CA",
      period: "Oct 2018 - Dec 2020",
      industry: "Financial",
      description:
        "Built secure investment platforms and tools for financial advisors and clients.",
      responsibilities: [
        "Designed and developed secure RESTful services for financial transactions and portfolio management.",
        "Implemented fine-grained access control using Spring Security and OAuth2.",
        "Performed DB design and optimization for high-volume transactions.",
        "Collaborated with front-end teams to build responsive dashboards using React",
        "MEnsured compliance with SEC/FINRA regulations through proper logging and audit trails",
      ],
      skills: [
        "Java",
        "Spring Security",
        "Oracle",
        "REST APIs",
        "OAuth2",
        "Finance Compliance",
        "GitLab",
      ],
      achievements: [
        { label: "Advisor Onboarding", value: "3x Faster" },
        { label: "API Response Time", value: "<200ms" },
        { label: "Trade Alert System", value: "<1s delay" },
        { label: "Onboarding Automation", value: "80%" },
      ],
      themeColor: "from-[#002E5D] to-[#6AB1E6]",
    },
    {
      role: "Java Developer",
      company: "Polaris",
      location: "Minneapolis, MN",
      period: "Jun 2016 - Sep 2018",
      industry: "Retail",
      description:
        "Worked on dealer management systems and vehicle telemetry solutions.",
      responsibilities: [
        "Developed RESTful APIs for parts inventory management and service scheduling using Spring Boot",
        "Built and optimized real-time telemetry data processors leveraging Apache Kafka and Apache Spark.",
        "Enhanced front-end experience by implementing responsive UI components using React.js and Tailwind CSS.",
        "Optimized API performance, reducing response time by up to 40% through efficient query handling and caching strategies.",
        "Spearheaded the migration of monolithic services to microservices architecture, improving scalability and maintainability.",
      ],
      skills: [
        "Java",
        "Spring Boot",
        "Kafka",
        "Apache Spark",
        "React",
        "REST",
        "Tableau",
        "PostgreSQL",
      ],
      achievements: [
        { label: "Telemetry Accuracy", value: "98%" },
        { label: "Dealer Platform Adoption", value: "500+ dealers" },
        { label: "Performance Uptime", value: "99.9%" },
        { label: "Code Quality", value: "85%" },
      ],
      themeColor: "from-[#00205B] to-[#0072CE]",
    },
    {
      role: "Java Developer",
      company: "Kaiser Permanente",
      location: "Seattle, WA",
      period: "Mar 2013 - May 2016",
      industry: "Health",
      description:
        "Supported health care web platforms and patient data integrations.",
      responsibilities: [
        "Developed and maintained Java Spring Boot microservices for healthcare enrollment, claims, and appointment scheduling systems.",
        "IBuilt RESTful APIs to integrate internal systems with external providers and insurance platforms.",
        "Worked with FHIR/HL7 standards to ensure secure patient data exchange and regulatory compliance (HIPAA)",
        "Optimized EHR database performance and reporting.",
        "Worked in a cross-functional agile environment.",
      ],
      skills: [
        "Java",
        "JSF",
        "HL7",
        "FHIR",
        "Oracle",
        "HIPAA",
        "OAuth2",
        "Agile",
      ],
      achievements: [
        { label: "HIPAA Security Compliance", value: "100%" },
        { label: "EMR Sync Time", value: "Instant" },
        { label: "Code Coverage", value: "90%" },
        { label: "Deployment Speed", value: "2x"},
      ],
      themeColor: "from-[#005B7F] to-[#81C6E8]",
    },
  ];

  const filteredItems =
    selectedIndustry === "All"
      ? experienceItems
      : experienceItems.filter((item) =>
          item.industry.includes(selectedIndustry)
        );

  return (
    <section id="experience" className="min-h-screen py-20 px-2 sm:px-4">
      <RevealOnScroll>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            My professional journey building enterprise applications, microservices architectures, and cloud-native solutions.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => {
                setSelectedIndustry(industry);
                setOpenIndex(0); // Reset openIndex on filter change
              }}
              className={`px-4 py-2 text-sm rounded-full border transition-all ${
                selectedIndustry === industry
                  ? "border-amber-400 text-white"
                  : "border-gray-300 text-gray-500 hover:bg-yellow-100"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        <div className="max-w-7xl mx-auto space-y-4">
          {filteredItems.map((exp, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-lg border bg-card text-card-foreground overflow-hidden border-none shadow-lg bg-gradient-to-br ${exp.themeColor}/20`}
              >
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-4 sm:p-5 cursor-pointer transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
                        {exp.role}
                        <ChevronUp
                          className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </button>

                {/* Panel */}
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                          <Award className="h-5 w-5 text-amber-400" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((res, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-amber-400/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <CircleCheckBig className="h-3 w-3 text-amber-400" />
                              </div>
                              <span className="text-sm sm:text-base text-gray-300">
                                {res}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills */}
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                            <Users className="h-5 w-5 text-amber-400" />
                            Skills Applied
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <div
                                key={i}
                                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border border-amber-400 bg-secondary text-secondary-foreground hover:bg-secondary/80"
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Metrics & Reference */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                          <Target className="h-5 w-5 text-amber-400" />
                          Key Metrics & Achievements
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {exp.achievements.map((metric, i) => (
                            <div
                              key={i}
                              className="bg-amber-400/10 rounded-xl p-4 text-center shadow-sm"
                            >
                              <div className="text-xl font-bold text-white">
                                {metric.value}
                              </div>
                              <div className="text-xs text-gray-400">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Reference Button */}
                        <div className="mt-6 flex justify-center">
                          <button className="cursor-wait border border-amber-500 bg-black text-white hover:bg-amber-400 hover:text-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out text-sm font-medium h-10 px-4 py-2 rounded-lg flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            View Reference Letter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </RevealOnScroll>
    </section>
  );
};