"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, ArrowRight, ExternalLink, GraduationCap, Cpu, BarChart2, MapPin } from "lucide-react";

const NAME = "Wataru Ishihara";
const TAGLINE = "Physics → Data → Product";
const SUMMARY = `Data analyst intern with a passion for product analytics and machine learning.
Currently completing a summer internship in Tokyo; returning to the U.S. Sept 21.`;

const CONTACT = {
  email: "mailto:wataruishihara203@gmail.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/wataru-ishihara-13632128a/",
  resume: "/RESUME.pdf"
};

const EXPERIENCES = [
  {
    org: "Reazon Holdings (menu)",
    role: "Data Analyst/Project Manager Intern — User-side Development",
    when: "Summer 2025 · Tokyo, JP",
    points: [
        "Used Neural Networks to create behavioral embeddings for 10M+ users, clustering them into personas.",
      "Analyzed large-scale event logs with DuckDB + Pandas to build repeatable pipelines.",
      "Translated metrics into actionable product stories (e.g., deals page ↑ order likelihood).",
      "Drove first-time retention analyses by mapping screens/modals to return behavior."
    ],
    tags: ["SQL", "BigQuery", "DuckDB", "Pandas", "Python", "Cohorts", "gensim", "PyTorch", "A/B Testing", "Product Analytics"],
  },
  {
    org: "UC Davis · Research",
    role: "Monte Carlo / Ising Model (Computational Physics)",
    when: "2023–2025 · Davis, CA",
    points: [
      "Built simulation & analysis tooling for statistical mechanics coursework/research.",
      "Explored random processes, convergence behavior, and visualization pipelines."
    ],
    tags: ["C,", "Python", "NumPy", "Matplotlib", "Physics"],
  },
  {
    org: "Formula SAE · Vehicle Dynamics",
    role: "Simulation & Optimization",
    when: "2024–2025 · UC Davis",
    points: [
      "Ran suspensions/vehicle dynamics sims to inform design trade-offs.",
      "Collaborated across subteams; translated metrics into design choices."
    ],
    tags: ["MATLAB", "Simulation", "Optimization"],
  },
  {
        org: "UC Davis Contuing & Professional Education",
        role: "Bilingual Interpreter (Japanese/English)",
        when: "2023–2025 · Davis, CA",
        points: [
            "Facilitated communication between Japanese-speaking students and English-speaking instructors in mini MBA courses.",
            "Translated technical terms and concepts in business, finance, and marketing."
        ],
        tags: ["Japanese", "English", "Communication", "Business", "Finance"],
    },
];

const PROJECTS = [
    {
        title: "Transformer Language Models in PyTorch",
        blurb: "Built mini-transformer models to teach attention and generation.",
        tags: ["PyTorch", "NLP", "Education"],
        link: "#"
    },
  {
    title: "Deals Page Impact Story",
    blurb: "Showed activation via campaign page doubled order likelihood; proposed UX entry points.",
    tags: ["Product Analytics", "Experiment Design"],
    link: "#"
  },
  {
    title: "First-session → Retention Mapping",
    blurb: "Linked first-session screens/modals to return rates; informed onboarding tweaks.",
    tags: ["Cohorts", "Funnel", "DuckDB"],
    link: "#"
  },
  {
    title: "Bigram → Mini-Transformer",
    blurb: "Built teaching models in PyTorch to internalize attention and generation.",
    tags: ["PyTorch", "NLP", "Education"],
    link: "#"
  },
  {
    title: "DBD Electrode Notes",
    blurb: "Materials/processing notes for gas diffusion electrodes and testing workflows.",
    tags: ["Materials", "Notes"],
    link: "#"
  },
];

const SKILLS = [
  { group: "Data & ML", items: ["Python", "Pandas", "DuckDB", "SQL", "PyTorch", "Matplotlib"] },
  { group: "Product & Viz", items: ["Storytelling", "Cohorts", "Funnels", "A/B Basics", "Dashboards"] },
  { group: "Eng Tools", items: ["Git", "Jupyter", "MATLAB", "React/Tailwind"] },
  { group: "Languages", items: ["English", "日本語"] },
];

const fade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{NAME}</a>
          <div className="hidden sm:flex gap-6 text-sm">
            <a className="hover:opacity-80" href="#about">About</a>
            <a className="hover:opacity-80" href="#experience">Experience</a>
            <a className="hover:opacity-80" href="#projects">Projects</a>
            <a className="hover:opacity-80" href="#skills">Skills</a>
            <a className="hover:opacity-80" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 pt-12 sm:pt-16 pb-10">
        <motion.div {...fade} className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {NAME}
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">{TAGLINE}</p>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-muted-foreground whitespace-pre-line">{SUMMARY}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild>
                <a href={CONTACT.resume}>
                  View Résumé
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href={CONTACT.email}><Mail className="mr-2 h-4 w-4"/>Email</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href={CONTACT.github}>
                  <Github className="mr-2 h-4 w-4"/>GitHub
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href={CONTACT.linkedin}>
                  <Linkedin className="mr-2 h-4 w-4"/>LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Card className="rounded-2xl shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><BarChart2 className="h-4 w-4"/>Product Analytics</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Deals page activation, onboarding cohorts, funnels.
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><Cpu className="h-4 w-4"/>PyTorch Mini LMs</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Bigram → transformer to teach attention.
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><GraduationCap className="h-4 w-4"/>UC Davis</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                BS Computational Physics · Class of 2025.
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2"><MapPin className="h-4 w-4"/>Based in California</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Bilingual (EN/JP), cross-cultural teamwork.
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-8">
        <motion.div {...fade}>
          <h2 className="text-xl font-semibold tracking-tight">About</h2>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            I like finding simple, actionable narratives in messy data. My recent work focuses on
            first-session behavior, retention cohorts, and UX entry points that move the needle.
          </p>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {EXPERIENCES.map((exp, i) => (
            <motion.div key={i} {...fade} transition={{ duration: 0.35 + i * 0.05 }}>
              <Card className="rounded-2xl shadow-sm h-full">
                <CardHeader>
                  <CardTitle className="text-base">{exp.org}</CardTitle>
                  <p className="text-sm text-muted-foreground">{exp.role}</p>
                  <p className="text-xs text-muted-foreground">{exp.when}</p>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <ul className="list-disc pl-5 text-sm text-muted-foreground">
                    {exp.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {exp.tags.map((t, j) => (
                      <Badge key={j} variant="secondary">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((proj, i) => (
            <motion.div key={i} {...fade} transition={{ duration: 0.35 + i * 0.04 }}>
              <Card className="rounded-2xl shadow-sm h-full">
                <CardHeader>
                  <CardTitle className="text-base flex items-center justify-between">
                    <span>{proj.title}</span>
                    <a href={proj.link} className="text-xs inline-flex items-center gap-1 hover:opacity-80">
                      View <ExternalLink className="h-3.5 w-3.5"/>
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{proj.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {proj.tags.map((t, j) => (
                      <Badge key={j} variant="outline">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {SKILLS.map((g, i) => (
            <motion.div key={i} {...fade}>
              <Card className="rounded-2xl shadow-sm h-full">
                <CardHeader>
                  <CardTitle className="text-base">{g.group}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {g.items.map((s, j) => (
                    <Badge key={j} variant="secondary">{s}</Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-10">
        <motion.div {...fade} className="rounded-2xl border p-6 sm:p-8 bg-card text-card-foreground">
          <h2 className="text-xl font-semibold tracking-tight">Let’s connect</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl text-sm">
            I’m returning to the U.S. on Sept 21 and open to research / product analytics roles.
            Reach out for my full project write-ups or to chat hoops & data.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button asChild>
              <a href={CONTACT.email}><Mail className="mr-2 h-4 w-4"/>Email me</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={CONTACT.linkedin}><Linkedin className="mr-2 h-4 w-4"/>LinkedIn</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href={CONTACT.github}><Github className="mr-2 h-4 w-4"/>GitHub</a>
            </Button>
          </div>
        </motion.div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 pb-12 pt-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {NAME}. Built with React, Tailwind, shadcn/ui, and framer-motion.
      </footer>
    </div>
  );
}
