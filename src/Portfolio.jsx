import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Download,
  ExternalLink,
  BarChart3,
  Database,
  BrainCircuit,
  LineChart,
  Sparkles,
  MessageCircle,
} from "lucide-react";

const profile = {
  github: "https://github.com/psharathdata",
  linkedin: "https://www.linkedin.com/in/psharathdata/",
  email: "p.sharath.data@gmail.com",
  phone: "+919562099088",
  whatsapp: "https://wa.me/919562099088",
  resume: "/resume.pdf",
  photo: "/profile.png",
};

const projects = [
  {
    title: "HR Attrition Analytics & Prediction",
    desc: "End-to-end HR analytics project to predict employee attrition, identify risk factors, and create HR business insights.",
    tags: ["Python", "SQL", "Power BI", "Tableau", "XGBoost", "SHAP"],
    link: "https://github.com/psharathdata/HR-Attrition-Analytics",
  },
  {
    title: "Hospital Readmission Dashboard",
    desc: "Healthcare analytics project to predict patient readmission risk, analyze KPIs, and support hospital decision-making.",
    tags: ["Python", "ML", "Streamlit", "Healthcare", "EDA"],
    link: "https://github.com/psharathdata",
  },
];

const skills = [
  ["SQL", "Joins • CTEs • Window Functions", "95"],
  ["Python", "Pandas • EDA • Automation", "90"],
  ["Power BI", "DAX • KPI • Dashboards", "88"],
  ["Tableau", "Visual Storytelling", "82"],
  ["Excel", "Pivot • Reports • Analysis", "90"],
  ["Machine Learning", "XGBoost • Random Forest", "80"],
];

const skillCards = [
  { icon: Database, title: "SQL", text: "Querying, joins, CTEs, window functions" },
  { icon: BarChart3, title: "BI Dashboards", text: "Power BI, Tableau, KPI reporting" },
  { icon: BrainCircuit, title: "Machine Learning", text: "Prediction, SHAP, model insights" },
  { icon: LineChart, title: "Python Analytics", text: "Pandas, NumPy, EDA, automation" },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen text-slate-900 overflow-hidden bg-[#eef7ff]">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(125,211,252,.7),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(196,181,253,.65),transparent_32%),radial-gradient(circle_at_50%_90%,rgba(167,243,208,.65),transparent_35%)]" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <section className="relative max-w-7xl mx-auto px-6 py-8">
        <nav className="flex items-center justify-between rounded-[2rem] border border-white/70 bg-white/35 backdrop-blur-3xl shadow-[0_20px_80px_rgba(14,165,233,.18)] px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src={profile.photo}
              alt="Sharath P"
              className="h-14 w-14 rounded-2xl object-cover border border-white/80 shadow-lg"
            />
            <div>
              <h1 className="font-black tracking-wide">SHARATH P</h1>
              <p className="text-sm text-slate-600">Data Analyst | MBA Graduate</p>
            </div>
          </div>

          <div className="hidden md:flex gap-3">
            {["projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="px-5 py-3 rounded-2xl bg-white/35 border border-white/60 backdrop-blur-2xl hover:bg-white/70 transition font-semibold capitalize"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[78vh]">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/45 px-5 py-3 text-sm text-sky-700 mb-7 backdrop-blur-3xl shadow-lg">
              <Sparkles className="h-4 w-4" /> Liquid Glass Portfolio
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Turning Data Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600">
                Business Decisions
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-700 max-w-xl leading-relaxed">
              MBA graduate transitioning into Data Analytics with hands-on projects in SQL, Python,
              Power BI, Tableau, Excel, and Machine Learning.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href={profile.resume} target="_blank" className="rounded-2xl px-6 py-4 bg-sky-400 text-slate-950 hover:bg-sky-300 shadow-[0_0_35px_rgba(14,165,233,.45)] font-bold">
                <Download className="inline mr-2 h-4 w-4" /> Resume
              </a>

              <a href={profile.github} target="_blank" className="rounded-2xl px-6 py-4 border border-white/70 bg-white/40 hover:bg-white/70 backdrop-blur-2xl font-bold">
                GitHub
              </a>

              <a href={profile.linkedin} target="_blank" className="rounded-2xl px-6 py-4 border border-white/70 bg-white/40 hover:bg-white/70 backdrop-blur-2xl font-bold">
                LinkedIn
              </a>

              <a href={profile.whatsapp} target="_blank" className="rounded-2xl px-6 py-4 border border-white/70 bg-white/40 hover:bg-white/70 backdrop-blur-2xl font-bold">
                <MessageCircle className="inline mr-2 h-4 w-4" /> WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="relative">
            <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-r from-sky-300/50 via-violet-300/50 to-emerald-300/50 blur-3xl animate-pulse" />

            <div className="relative rounded-[3rem] border border-white/70 bg-white/25 backdrop-blur-3xl shadow-[0_30px_100px_rgba(14,165,233,.25)] p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/20 to-transparent opacity-70" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-300/40 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet-400/30 rounded-full blur-3xl" />

              <div className="relative z-10 mb-8">
                <p className="text-sky-700 text-sm font-black tracking-widest uppercase">Analytics Toolkit</p>
                <h3 className="text-3xl font-black text-slate-900 mt-3">
                  Tools I Use to Build Insights
                </h3>
              </div>

              <div className="relative z-10 grid sm:grid-cols-2 gap-4">
                {skills.map(([tool, text, level]) => (
                  <div key={tool} className="group relative rounded-[2rem] border border-white/70 bg-white/35 backdrop-blur-2xl p-5 overflow-hidden hover:scale-[1.03] transition shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-sky-200/30" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-black">{tool}</h4>
                        <span className="text-xs text-sky-700 font-bold">{level}%</span>
                      </div>
                      <p className="text-slate-600 text-sm mb-4">{text}</p>
                      <div className="h-2 rounded-full bg-white/50 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 shadow-[0_0_18px_rgba(14,165,233,.8)]" style={{ width: `${level}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="relative max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black mb-10">Core Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCards.map((s) => (
            <div key={s.title} className="rounded-[2rem] border border-white/70 bg-white/35 backdrop-blur-3xl hover:bg-white/60 transition p-7 shadow-lg">
              <s.icon className="h-10 w-10 text-sky-600 mb-5" />
              <h3 className="text-xl font-black mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black mb-10">Featured Projects</h2>
        <div className="grid lg:grid-cols-2 gap-7">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-[3rem] border border-white/70 bg-white/30 backdrop-blur-3xl overflow-hidden hover:bg-white/55 transition shadow-[0_25px_80px_rgba(14,165,233,.16)]">
              <div className="h-56 bg-gradient-to-br from-sky-300/40 via-blue-300/30 to-violet-300/40 relative">
                <div className="absolute inset-8 rounded-[2rem] border border-white/70 bg-white/35 backdrop-blur-2xl flex items-center justify-center">
                  <BarChart3 className="h-24 w-24 text-sky-600 group-hover:scale-110 transition" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-black mb-3">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-5">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/55 text-sky-700 border border-white/70 text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={p.link} target="_blank" className="rounded-2xl bg-slate-900 text-white hover:bg-sky-600 px-5 py-3 font-bold inline-block">
                  View Project <ExternalLink className="inline ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-[3rem] border border-white/70 bg-white/35 backdrop-blur-3xl p-8 md:p-12 text-center shadow-[0_25px_80px_rgba(14,165,233,.16)]">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Let’s Build Data Stories</h2>
          <p className="text-slate-600 mb-8">Open to Data Analyst roles, dashboard projects, and analytics opportunities.</p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a href={`mailto:${profile.email}`} className="rounded-2xl bg-sky-400 text-slate-950 hover:bg-sky-300 px-5 py-3 font-bold">
              <Mail className="inline mr-2 h-4 w-4" /> Email
            </a>

            <a href={`tel:${profile.phone}`} className="rounded-2xl border border-white/70 bg-white/45 hover:bg-white/70 px-5 py-3 font-bold">
              <Phone className="inline mr-2 h-4 w-4" /> Call
            </a>

            <a href={profile.whatsapp} target="_blank" className="rounded-2xl border border-white/70 bg-white/45 hover:bg-white/70 px-5 py-3 font-bold">
              <MessageCircle className="inline mr-2 h-4 w-4" /> WhatsApp
            </a>

            <a href={profile.github} target="_blank" className="rounded-2xl border border-white/70 bg-white/45 hover:bg-white/70 px-5 py-3 font-bold">
              GitHub
            </a>

            <a href={profile.linkedin} target="_blank" className="rounded-2xl border border-white/70 bg-white/45 hover:bg-white/70 px-5 py-3 font-bold">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
