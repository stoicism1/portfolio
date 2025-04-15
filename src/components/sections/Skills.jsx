import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

import {
  Code,
  Monitor,
  Cloud,
  Database,
  MessageSquare,
  Shield,
  Layers,
  Bug,
} from "lucide-react";

const skillCategories = [
  {
    title: "Java & Backend",
    icon: <Code className="w-6 h-6 text-blue-400" />,
    skills: [
      { name: "Java 8/11/17", level: "Expert" },
      { name: "Spring Boot", level: "Expert" },
      { name: "Hibernate", level: "Expert" },
      { name: "J2EE", level: "Expert" },
      { name: "Spring Cloud", level: "Expert" },
      { name: "REST APIs", level: "Expert" },
      { name: "Microservices", level: "Expert" },
    ],
  },
  {
    title: "Frontend",
    icon: <Monitor className="w-6 h-6 text-pink-400" />,
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Angular", level: "Advanced" },
      { name: "Node.js", level: "Expert" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Bootstrap", level: "Advanced" },
      { name: "HTML & CSS", level: "Expert" },
      { name: "TailwindCSS", level: "Intermediate" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6 text-amber-400" />,
    skills: [
        { name: "AWS", level: "Advanced" },
        { name: "Azure", level: "Intermediate" },
        { name: "Docker", level: "Expert" },
        { name: "Kubernetes", level: "Advanced" },
        { name: "Jenkins", level: "Advanced" },
        { name: "Terraform", level: "Intermediate" },
        { name: "CI/CD", level: "Expert" },
        { name: "GitHub Actions", level: "Advanced" },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-purple-400" />,
    skills: [
        { name: "PostgreSQL", level: "Expert" },
        { name: "Oracle", level: "Advanced" },
        { name: "MySQL", level: "Expert" },
        { name: "MongoDB", level: "Expert" },
        { name: "DynamoDB", level: "Intermediate" },
        { name: "Redis", level: "Advanced" },
        { name: "Cassandra", level: "Intermediate" },
        { name: "SQL/PL-SQL", level: "Expert" },
    ],
  },
  {
    title: "Messaging & Integration",
    icon: <MessageSquare className="w-6 h-6 text-teal-400" />,
    skills: [
      { name: "Apache Kafka", level: "Expert" },
      { name: "RabbitMQ", level: "Advanced" },
      { name: "ActiveMQ", level: "Intermediate" },
      { name: "JMS", level: "Advanced" },
      { name: "GraphQL", level: "Intermediate" },
      { name: "SOAP", level: "Expert" },
      { name: "WebSockets", level: "Intermediate" },
    ],
  },
  {
    title: "Testing & Quality",
    icon: <Bug className="w-6 h-6 text-red-400" />,
    skills: [
        { name: "JUnit", level: "Expert" },
        { name: "Mockito", level: "Expert" },
        { name: "TestNG", level: "Advanced" },
        { name: "Selenium", level: "Advanced" },
        { name: "Cypress", level: "Intermediate" },
        { name: "SonarQube", level: "Advanced" },
        { name: "TDD", level: "Advanced" },
        { name: "Jasmine", level: "Intermediate" },
    ],
  },
  {
    title: "Architecture & Patterns",
    icon: <Layers className="w-6 h-6 text-cyan-400" />,
    skills: [
        { name: "Microservices", level: "Expert" },
        { name: "Event-Driven", level: "Expert" },
        { name: "CQRS", level: "Advanced" },
        { name: "Saga Pattern", level: "Advanced" },
        { name: "Domain-Driven", level: "Advanced" },
        { name: "API Gateway", level: "Expert" },
        { name: "Service Mesh", level: "Intermediate" },
        { name: "Circuit Breaker", level: "Intermediate" },
    ],
  },
  {
    title: "Security & Performance",
    icon: <Shield className="w-6 h-6 text-indigo-400" />,
    skills: [
        { name: "OAuth2", level: "Expert" },
        { name: "JWT", level: "Expert" },
        { name: "RBAC", level: "Advanced" },
        { name: "JVM Tuning", level: "Advanced" },
        { name: "GC Optimization", level: "Advanced" },
        { name: "SQL Tuning", level: "Expert" },
        { name: "Load Testing", level: "Advanced" },
        { name: "JMeter", level: "Advanced" },
    ],
  },
];

const levelColors = {
  Expert: "bg-green-600/20 text-green-400",
  Advanced: "bg-blue-600/20 text-blue-400",
  Intermediate: "bg-purple-600/20 text-purple-400",
};

export const Skills = () => {
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("");

  const filteredCategories = skillCategories
    .map((category) => ({
      ...category,
      skills: category.skills.filter((skill) => {
        const matchesSearch =
          skill.name.toLowerCase().includes(search.toLowerCase()) ||
          skill.level.toLowerCase().includes(search.toLowerCase());
        const matchesLevel = !levelFilter || skill.level === levelFilter;
        return matchesSearch && matchesLevel;
      }),
    }))
    .filter((category) => category.skills.length > 0);

  return (
    <section id="skills" className="py-16 bg-black text-white">
      <RevealOnScroll>
      <div className="max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-amber-400 to-yellow-300 text-transparent bg-clip-text">
          Technical Skills
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
      A comprehensive overview of my technical expertise across various domains, from Java development and microservices to cloud infrastructure and database optimization.
      </p>
      </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
          <input
            type="text"
            placeholder="Search by skill or level..."
            className="w-full md:w-96 px-4 py-3 text-base rounded-lg border border-slate-700 bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex gap-2">
            {["Expert", "Advanced", "Intermediate"].map((level) => (
              <button
                key={level}
                onClick={() => setLevelFilter(levelFilter === level ? "" : level)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition border ${
                  levelFilter === level
                    ? "bg-amber-500 text-black border-amber-400"
                    : "bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-amber-400/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 text-sm rounded-full font-medium ${levelColors[skill.level]} border border-white/10`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-sm flex flex-col md:flex-row justify-center items-center gap-4 text-white/70">
  <div className="flex items-center gap-2">
    <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
    <span className="text-white">Expert</span>
    <span>(8+ years)</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="w-3 h-3 rounded-full bg-blue-400 inline-block" />
    <span className="text-white">Advanced</span>
    <span>(4–8 years)</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="w-3 h-3 rounded-full bg-purple-400 inline-block" />
    <span className="text-white">Intermediate</span>
    <span>(1–4 years)</span>
  </div>
</div>


        {/* No Match */}
        {filteredCategories.length === 0 && (
          <p className="text-center text-gray-400 mt-8">
            No matching skills found.
          </p>
        )}
      </div>
      </RevealOnScroll>
    </section>
  );
};
