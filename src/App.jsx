import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Globe2,
  Menu,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import logo from "../logo.jpeg";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Designing, developing, and maintaining web, mobile, and cloud-based applications for global markets.",
    icon: Code2,
  },
  {
    title: "IT Consultancy",
    description:
      "Providing expert technical support, system integration, and end-to-end digital solutions.",
    icon: BriefcaseBusiness,
  },
  {
    title: "SaaS & Enterprise Products",
    description:
      "Developing, licensing, and distributing cutting-edge software platforms and digital products.",
    icon: CloudCog,
  },
  {
    title: "AI & Emerging Tech R&D",
    description:
      "Pioneering research in artificial intelligence, data analytics, cybersecurity, and cloud computing.",
    icon: BrainCircuit,
  },
  {
    title: "Neuranest Academy",
    description:
      "Conducting industry-leading training programs, workshops, and seminars in modern programming and digital tech.",
    icon: GraduationCap,
  },
];

const valueProps = [
  {
    title: "Global Reach",
    description:
      "Products and engineering teams built to serve domestic and international markets with the same operational precision.",
    icon: Globe2,
  },
  {
    title: "End-to-End Solutions",
    description:
      "From architecture and integration through launch, optimization, and support, Neuranest covers the full delivery lifecycle.",
    icon: ShieldCheck,
  },
  {
    title: "Future-Proof Technology",
    description:
      "AI-ready software foundations, resilient cloud systems, and practical innovation programs designed for long-term adaptability.",
    icon: Rocket,
  },
];

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Innovation", href: "#innovation" },
];

function SectionEyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-400">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-neon backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:border-brand-400/45 hover:bg-white/10">
      <div className="inline-flex rounded-2xl border border-brand-400/20 bg-brand-400/10 p-3 text-brand-400 transition group-hover:scale-105 group-hover:bg-brand-400/15">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-display text-xl font-bold text-white">{service.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-400">{service.description}</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-400">
        Built for scale
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </article>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink font-body text-slate-100">
      <div className="absolute inset-x-0 top-0 -z-10 h-[780px] bg-[radial-gradient(circle_at_top_left,rgba(92,183,184,0.22),transparent_34%),radial-gradient(circle_at_top_right,rgba(124,58,237,0.18),transparent_26%),linear-gradient(180deg,#050816_0%,#081025_40%,#050816_100%)]" />
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:72px_72px] opacity-[0.08]" />
      <div className="absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1.5 shadow-neon">
              <img src={logo} alt="Neuranest.ai logo" className="h-10 w-10 rounded-xl object-cover" />
            </div>
            <div>
              <div className="font-display text-lg font-bold tracking-tight text-white">Neuranest.ai</div>
              <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Intelligent Software Hub</div>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-brand-400"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-glow px-5 py-3 text-sm font-semibold text-slate-950 shadow-pulse transition duration-300 hover:-translate-y-0.5 hover:shadow-neon"
            >
              Get a Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-slate-300 transition hover:text-brand-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-glow px-5 py-3 text-sm font-semibold text-slate-950"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <SectionEyebrow>AI-Tech Delivery Platform</SectionEyebrow>
              <h1 className="mt-8 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Empowering the Future with Intelligent Software.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                From custom enterprise applications to cutting-edge AI research and comprehensive IT
                consultancy, Neuranest is your hub for digital transformation.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
                Our operating charter spans software engineering, consultancy, SaaS, advanced R&D,
                and education, giving organizations one partner for strategy, delivery, and
                long-term capability building.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-glow px-6 py-3.5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-neon"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-100 transition duration-300 hover:border-brand-400/50 hover:bg-white/10 hover:text-brand-400"
                >
                  View Products
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {valueProps.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/10"
                    >
                      <Icon className="h-6 w-6 text-brand-400" />
                      <div className="mt-4 text-sm font-semibold text-white">{item.title}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-12 h-28 w-28 rounded-full bg-glow/25 blur-3xl" />
              <div className="absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-brand-400/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-neon backdrop-blur-xl">
                <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,27,57,.92),rgba(5,8,22,.92))] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-slate-400">Neuranest.ai Matrix</div>
                      <div className="mt-1 font-display text-2xl font-bold text-white">Digital Transformation Hub</div>
                    </div>
                    <div className="rounded-2xl bg-brand-400/15 p-3 text-brand-400">
                      <BrainCircuit className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4">
                    {[
                      ["Enterprise Apps", "Global-grade engineering across web, mobile, and cloud."],
                      ["AI Innovation", "Research-led delivery in analytics, cybersecurity, and automation."],
                      ["Capability Building", "Workshops, training, and advisory for modern technical teams."],
                    ].map(([title, copy]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 transition hover:border-brand-400/35 hover:bg-slate-900/70"
                      >
                        <div className="text-sm font-semibold text-white">{title}</div>
                        <p className="mt-1 text-sm leading-6 text-slate-400">{copy}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {[
                      ["Global", "Markets"],
                      ["AI", "R&D"],
                      ["Academy", "Programs"],
                    ].map(([top, bottom]) => (
                      <div
                        key={top}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center"
                      >
                        <div className="font-display text-lg font-bold text-brand-400">{top}</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                          {bottom}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
          <div className="overflow-hidden rounded-[32px] border border-brand-400/20 bg-[linear-gradient(135deg,rgba(39,95,132,.42),rgba(12,18,40,.95)_42%,rgba(124,58,237,.2))] p-8 shadow-neon lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <SectionEyebrow>Value Proposition</SectionEyebrow>
                <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  One partner for global delivery, product innovation, and resilient technology execution.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {valueProps.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/45 p-5">
                    <div className="text-sm font-semibold text-brand-400">{item.title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <SectionEyebrow>Core Offerings</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Services designed around the full Neuranest operating model.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              The company objectives define five operating pillars that move from software delivery
              to innovation and talent development. Each offering below directly reflects that
              charter.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}

            <div className="grid gap-6 md:col-span-2 md:grid-cols-2 xl:col-span-3 xl:mx-auto xl:w-full xl:max-w-[68%]">
              {services.slice(3).map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
              <SectionEyebrow>Company Objective</SectionEyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white">
                From charter to execution.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-400">
                Neuranest.ai exists to design, implement, maintain, and scale digital systems while
                simultaneously expanding product IP, applied research, and workforce capability.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-400">
                In practice, that means combining custom software development, IT consultancy,
                SaaS and enterprise platforms, AI and emerging-tech R&amp;D, and industry-focused
                training into one connected operating model for digital transformation.
              </p>
            </div>
          </div>
        </section>

        <section id="innovation" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,21,48,.95),rgba(8,16,37,.9))] p-8 shadow-neon lg:p-10">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <SectionEyebrow>Innovation Engine</SectionEyebrow>
                <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Research-backed product thinking with enterprise-grade execution.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-400">
                  Neuranest combines software engineering, cloud architecture, cybersecurity
                  awareness, AI experimentation, and market-facing product strategy in a single
                  operating system.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Applied AI Programs",
                    copy: "Translate research into operational tooling, intelligent workflows, and data-driven decisions.",
                    icon: BrainCircuit,
                  },
                  {
                    title: "Enterprise Productization",
                    copy: "Turn domain knowledge into platforms, subscriptions, and repeatable digital products.",
                    icon: CloudCog,
                  },
                  {
                    title: "Digital Transformation Advisory",
                    copy: "Align systems, teams, and delivery practices around measurable business outcomes.",
                    icon: BriefcaseBusiness,
                  },
                  {
                    title: "Academy-Led Upskilling",
                    copy: "Develop in-house capability through workshops, seminars, and technical curriculum.",
                    icon: BookOpen,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-brand-400/35 hover:bg-white/10"
                    >
                      <Icon className="h-6 w-6 text-brand-400" />
                      <h3 className="mt-5 font-display text-xl font-bold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-400">{item.copy}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <SectionEyebrow>Let’s Build</SectionEyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to build the next generation of software?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-400">
                Share your brief and Neuranest can shape the right mix of engineering,
                consulting, product, research, or academy support.
              </p>
            </div>

            <form
              className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-neon"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400/60 focus:bg-white/10"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">Email</span>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400/60 focus:bg-white/10"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-medium text-slate-300">Topic</span>
                <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400/60 focus:bg-white/10">
                  <option>Software</option>
                  <option>Consulting</option>
                  <option>SaaS</option>
                  <option>R&amp;D</option>
                  <option>Academy</option>
                </select>
              </label>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-medium text-slate-300">Message</span>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project, goals, or technical challenge."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400/60 focus:bg-white/10"
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-glow px-6 py-3.5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-neon"
              >
                Send Message
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <span className="font-semibold text-slate-200">Neuranest.ai</span> © {currentYear}. All
            rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="/" className="transition hover:text-brand-400">
              Privacy Policy
            </a>
            <a href="/" className="transition hover:text-brand-400">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
