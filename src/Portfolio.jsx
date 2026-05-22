import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Download,
  ExternalLink,
  BarChart3,
  Database,
  BrainCircuit,
  LineChart,
  Activity,
  Sparkles
} from "lucide-react";

const projects = [
  {
    title: "HR Attrition Analytics & Prediction",
    desc: "End-to-end HR analytics project to identify attrition patterns, predict high-risk employees, and generate business recommendations using ML explainability.",
    tags: ["Python", "SQL", "Power BI", "Tableau", "XGBoost", "SHAP"],
    metrics: ["AUC 0.96+", "1470 Employees", "Risk Scoring"],
  },
  {
    title: "Hospital Readmission Dashboard",
    desc: "Healthcare analytics dashboard to predict patient readmission risk, segment patients, and estimate cost impact using an interactive dashboard UI.",
    tags: ["Python", "ML", "Streamlit", "Healthcare KPIs", "EDA"],
    metrics: ["Risk Categories", "Cost Analysis", "Patient Segments"],
  },
];

const skills = [
  {
    icon: Database,
    title: "SQL",
    text: "Joins, CTEs, Window Functions, Data Modeling",
  },
  {
    icon: BarChart3,
    title: "BI Dashboards",
    text: "Power BI, Tableau, KPI Design, Storytelling",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    text: "Random Forest, XGBoost, SHAP, Prediction",
  },
  {
    icon: LineChart,
    title: "Python Analytics",
    text: "Pandas, NumPy, EDA, Automation",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,.25),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,.25),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(34,197,94,.18),transparent_35%)]" />

      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 py-8">
        
        <nav className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-cyan-400/20 border border-cyan-300/30 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,.35)]">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>

            <span className="font-bold tracking-wide">
              SHARATH P
            </span>
          </div>

          <div className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#projects" className="hover:text-cyan-300">
              Projects
            </a>

            <a href="#skills" className="hover:text-cyan-300">
              Skills
            </a>

            <a href="#contact" className="hover:text-cyan-300">
              Contact
            </a>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-cyan-200 mb-6 backdrop-blur-xl">
              <Activity className="h-4 w-4" />
              Data Analyst Portfolio
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Turning Data Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                Business Decisions
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
              MBA graduate transitioning into Data Analytics with
              hands-on projects in SQL, Python, Power BI,
              Tableau, Excel, and Machine Learning.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="rounded-2xl px-6 py-4 bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-[0_0_35px_rgba(34,211,238,.45)] font-semibold">
                <Download className="inline mr-2 h-4 w-4" />
                Download Resume
              </button>

              <button className="rounded-2xl px-6 py-4 border border-white/20 bg-white/5 hover:bg-white/10 font-semibold">
                <Github className="inline mr-2 h-4 w-4" />
                GitHub
              </button>

              <button className="rounded-2xl px-6 py-4 border border-white/20 bg-white/5 hover:bg-white/10 font-semibold">
                LinkedIn
              </button>

            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >

            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl p-6">

              <div className="grid grid-cols-2 gap-4">

                {["SQL", "Python", "Power BI", "Tableau", "Excel", "ML"].map(
                  (item, i) => (
                    <div
                      key={item}
                      className="rounded-3xl bg-slate-950/60 border border-white/10 p-5 min-h-28 flex flex-col justify-between hover:border-cyan-300/40 transition"
                    >

                      <span className="text-3xl font-black text-white/90">
                        0{i + 1}
                      </span>

                      <span className="text-cyan-200 font-semibold">
                        {item}
                      </span>

                    </div>
                  )
                )}

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="relative max-w-7xl mx-auto px-6 py-20"
      >

        <h2 className="text-4xl md:text-5xl font-black mb-10">
          Core Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          {skills.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl hover:bg-white/[.14] transition p-6"
            >

              <s.icon className="h-9 w-9 text-cyan-300 mb-5" />

              <h3 className="text-xl font-bold text-white mb-2">
                {s.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {s.text}
              </p>

            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="relative max-w-7xl mx-auto px-6 py-20"
      >

        <h2 className="text-4xl md:text-5xl font-black mb-10">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-7">

          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-2xl overflow-hidden hover:border-cyan-300/40 transition"
            >

              <div className="h-52 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-500/20 relative">

                <div className="absolute inset-6 rounded-3xl border border-white/10 bg-slate-950/50 flex items-center justify-center">
                  <BarChart3 className="h-20 w-20 text-cyan-300 opacity-90 group-hover:scale-110 transition" />
                </div>
              </div>

              <div className="p-7">

                <h3 className="text-2xl font-black mb-3 text-white">
                  {p.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-5">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">

                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-cyan-300/10 text-cyan-200 border border-cyan-300/20 text-xs"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">

                  {p.metrics.map((m) => (
                    <div
                      key={m}
                      className="rounded-2xl bg-slate-950/50 border border-white/10 p-3 text-xs text-slate-200 text-center"
                    >
                      {m}
                    </div>
                  ))}

                </div>

                <button className="rounded-2xl bg-white text-slate-950 hover:bg-cyan-200 px-5 py-3 font-semibold">
                  View Project
                  <ExternalLink className="inline ml-2 h-4 w-4" />
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative max-w-7xl mx-auto px-6 py-20"
      >

        <div className="rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-2xl p-8 md:p-12 text-center">

          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Let’s Build Data Stories
          </h2>

          <p className="text-slate-300 mb-8">
            Open to Data Analyst roles, dashboard projects,
            and analytics opportunities.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <button className="rounded-2xl bg-cyan-400 text-slate-950 hover:bg-cyan-300 px-5 py-3 font-semibold">
              <Mail className="inline mr-2 h-4 w-4" />
              Contact Me
            </button>

            <button className="rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 px-5 py-3 font-semibold">
              <Github className="inline mr-2 h-4 w-4" />
              GitHub
            </button>

          </div>
        </div>
      </section>
    </main>
  );
}
