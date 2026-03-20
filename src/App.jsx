import { useState } from "react";
import {
  ArrowRight,
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
    title: "AI Product Engineering",
    description: "From concept to launch for intelligent web and SaaS products.",
    icon: BrainCircuit,
  },
  {
    title: "Custom Software",
    description: "Reliable systems built for internal teams, customers, and operations.",
    icon: Code2,
  },
  {
    title: "Technical Advisory",
    description: "Senior guidance on architecture, roadmaps, delivery, and scale.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Platform Buildouts",
    description: "Modern cloud and product foundations designed for growth.",
    icon: CloudCog,
  },
];

const highlights = [
  {
    title: "Dependable delivery",
    description: "Clear planning and disciplined execution from start to finish.",
    icon: Rocket,
  },
  {
    title: "Built for reliability",
    description: "Strong technical foundations designed for long-term use.",
    icon: ShieldCheck,
  },
  {
    title: "Cost-conscious approach",
    description: "Thoughtful solutions that balance quality, speed, and budget.",
    icon: Globe2,
  },
];

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "./products.html" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const focusCards = [
  {
    title: "Reliable outcomes",
    copy: "Solutions planned with clarity and delivered with a focus on long-term value.",
  },
  {
    title: "Professional presentation",
    copy: "Clean digital experiences that reflect credibility and operational maturity.",
  },
  {
    title: "Practical scalability",
    copy: "Technology decisions that remain efficient today and adaptable tomorrow.",
  },
];

const customers = [
  "J&S Power Solutions",
  "TATA Solar",
  "J&S Power Solutions",
  "TATA Solar",
];

const comparisonMetrics = [
  {
    label: "Development time",
    withoutLabel: "Conventional",
    withLabel: "With Threshold",
    withoutValue: "100%",
    withValue: "50%",
    badge: "50% faster",
  },
  {
    label: "Resource demand",
    withoutLabel: "Conventional",
    withLabel: "With Threshold",
    withoutValue: "100%",
    withValue: "60%",
    badge: "40% fewer resources",
  },
  {
    label: "Cost burden",
    withoutLabel: "Higher",
    withLabel: "Optimized",
    withoutValue: "100%",
    withValue: "58%",
    badge: "Lower total cost",
  },
];

function SectionEyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-600 shadow-sm">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:border-brand-400/40 hover:shadow-[0_28px_70px_rgba(39,95,132,0.18)]">
      <div className="inline-flex rounded-2xl bg-brand-400/12 p-3 text-brand-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-slate-950">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
        High-impact delivery
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </article>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f3ec] font-body text-slate-900">
      <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_top_left,rgba(92,183,184,0.16),transparent_36%),radial-gradient(circle_at_top_right,rgba(80,120,184,0.1),transparent_24%),linear-gradient(180deg,#fffdf8_0%,#f6f3ec_56%,#f2efe7_100%)]" />
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:64px_64px] opacity-[0.2]" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-400/10 blur-3xl" />

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f6f3ec]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
              <img
                src={logo}
                alt="Threshold AI Solutions logo"
                className="h-10 w-10 rounded-xl object-cover"
              />
            </div>
            <div>
              <div className="font-display text-base font-bold tracking-tight text-slate-950 sm:text-lg">
                Threshold AI Solutions
              </div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">
                AI Systems and Product Delivery
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex rounded-full border border-slate-200 bg-white p-2 text-slate-700 lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-[#f6f3ec] px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 transition hover:text-brand-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="mx-auto max-w-7xl px-6 pb-18 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="mx-auto max-w-5xl text-center">
            <SectionEyebrow>Trusted technology partner</SectionEyebrow>
            <div className="mt-8 flex justify-center">
              <h1 className="max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-[5.25rem] lg:leading-[0.95]">
                Trusted AI systems and software for dependable business growth.
              </h1>
            </div>
            <div className="mt-6 flex justify-center">
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                We help businesses modernize operations, launch digital products, and adopt AI
                through practical, reliable, and cost-aware delivery.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-600"
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition duration-300 hover:border-brand-400 hover:text-brand-600"
              >
                See What We Do
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-16 max-w-6xl">
            <div className="absolute left-12 top-0 h-24 w-24 rounded-full bg-brand-400/12 blur-3xl" />
            <div className="absolute right-12 top-10 h-24 w-24 rounded-full bg-[#d9cdbf] blur-3xl" />

            <div className="relative">
              <div className="text-center text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Trusted by teams such as
              </div>
              <div className="mt-5">
                <div className="marquee-shell">
                  <div className="marquee-track">
                    {[...customers, ...customers].map((customer, index) => (
                      <div
                        key={`${customer}-${index}`}
                        className="inline-flex min-w-max items-center rounded-full border border-slate-200/80 bg-white/55 px-5 py-3 text-sm font-semibold text-slate-700 backdrop-blur-[2px]"
                      >
                        {customer}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/80 bg-white/72 p-5 text-left shadow-[0_18px_40px_rgba(15,23,42,0.05)] backdrop-blur-[2px]"
                    >
                      <Icon className="h-6 w-6 text-brand-600" />
                      <div className="mt-4 text-sm font-semibold text-slate-950">{item.title}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="rounded-[36px] border border-[#e8dfd2] bg-[linear-gradient(135deg,#fffdf8_0%,#f3eee5_100%)] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <SectionEyebrow>Operational impact</SectionEyebrow>
                <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Measurable gains in speed, efficiency, and cost control.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Our delivery model reduces unnecessary effort while improving visibility and
                  execution quality across the build cycle.
                </p>
              </div>

              <div className="grid gap-4">
                {comparisonMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-slate-200 bg-white/90 p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-sm font-semibold text-slate-950">{metric.label}</div>
                      <div className="rounded-full bg-brand-400/12 px-3 py-1 text-xs font-semibold text-brand-600">
                        {metric.badge}
                      </div>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs font-medium text-slate-500">
                          <span>{metric.withoutLabel}</span>
                          <span>Baseline</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-slate-200">
                          <div
                            className="metric-fill h-full rounded-full bg-slate-900"
                            style={{ width: metric.withoutValue }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs font-medium text-slate-500">
                          <span>{metric.withLabel}</span>
                          <span>Optimized</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-[#dfeeea]">
                          <div
                            className="metric-fill h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
                            style={{ width: metric.withValue }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
          <div className="rounded-[36px] border border-[#e8dfd2] bg-[linear-gradient(135deg,#fffdf8_0%,#f3eee5_100%)] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionEyebrow>Why businesses choose us</SectionEyebrow>
                <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  A practical partner for trusted digital delivery.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Trust-led delivery", "A measured approach built around reliability and clarity."],
                  ["Practical budgets", "Solutions shaped to be effective and economically sensible."],
                  ["Clear communication", "Simple, direct engagement from first discussion to launch."],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-3xl border border-white bg-white/90 p-5">
                    <div className="text-sm font-semibold text-slate-950">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <SectionEyebrow>Core services</SectionEyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Focused services for modern business needs.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A concise set of capabilities designed to solve real operational and product challenges.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {focusCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.07)]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
                  {item.title}
                </div>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="rounded-[34px] bg-slate-950 p-8 text-white shadow-[0_28px_80px_rgba(15,23,42,0.24)]">
              <SectionEyebrow>Get in touch</SectionEyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Looking for a dependable technology partner?
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
                Share a short brief and we will respond with a practical recommendation and next step.
              </p>
            </div>

            <form
              className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-200 bg-[#fcfaf5] px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-2xl border border-slate-200 bg-[#fcfaf5] px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-medium text-slate-700">What do you need?</span>
                <select className="w-full rounded-2xl border border-slate-200 bg-[#fcfaf5] px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400">
                  <option>Product build</option>
                  <option>Website or app</option>
                  <option>AI workflow</option>
                  <option>Technical advisory</option>
                </select>
              </label>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Brief</span>
                <textarea
                  rows="5"
                  placeholder="A few lines about the problem, timeline, or goal."
                  className="w-full rounded-2xl border border-slate-200 bg-[#fcfaf5] px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400"
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-600"
              >
                Submit Enquiry
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <span className="font-semibold text-slate-900">Threshold AI Solutions</span> ©{" "}
            {currentYear}. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="/" className="transition hover:text-brand-600">
              Privacy Policy
            </a>
            <a href="/" className="transition hover:text-brand-600">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
