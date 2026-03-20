import { useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  CloudCog,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import logo from "../logo.jpeg";

const navItems = [
  { label: "Services", href: "./index.html#services" },
  { label: "Products", href: "./products.html" },
  { label: "Why Us", href: "./index.html#why-us" },
  { label: "Contact", href: "./index.html#contact" },
];

const productFeatures = [
  {
    title: "Memory visibility",
    description: "Observe how agent memory behaves across workflows and interactions.",
    icon: BrainCircuit,
  },
  {
    title: "Operational confidence",
    description: "Improve traceability and oversight for AI systems used in production.",
    icon: ShieldCheck,
  },
  {
    title: "Practical integration",
    description: "Applied where reliability and observability matter to real business use cases.",
    icon: CloudCog,
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

function ProductsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f3ec] font-body text-slate-900">
      <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_top_left,rgba(92,183,184,0.16),transparent_36%),radial-gradient(circle_at_top_right,rgba(80,120,184,0.1),transparent_24%),linear-gradient(180deg,#fffdf8_0%,#f6f3ec_56%,#f2efe7_100%)]" />
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:64px_64px] opacity-[0.2]" />

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f6f3ec]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="./index.html" className="flex items-center gap-3">
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
              href="./index.html#contact"
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
                href="./index.html#contact"
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
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-2xl">
              <SectionEyebrow>Featured product</SectionEyebrow>
              <h1 className="mt-8 font-display text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                Cortexa
              </h1>
              <p className="mt-5 text-xl leading-8 text-slate-600">
                Memory observability for AI agents.
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                We use Cortexa where agent reliability, memory visibility, and operational control
                are critical to successful AI deployment.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://cortexa.ink"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-600"
                >
                  Visit Cortexa
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="./index.html#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition duration-300 hover:border-brand-400 hover:text-brand-600"
                >
                  Discuss Implementation
                </a>
              </div>
            </div>

            <div className="rounded-[36px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,243,235,0.94))] p-7 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
              <div className="text-sm font-medium text-slate-500">Where it adds value</div>
              <div className="mt-2 font-display text-2xl font-bold text-slate-950">
                Better oversight for production-grade AI systems.
              </div>

              <div className="mt-8 grid gap-4">
                {productFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="rounded-2xl border border-slate-200 bg-white/90 p-5"
                    >
                      <div className="inline-flex rounded-2xl bg-brand-400/12 p-3 text-brand-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-4 text-sm font-semibold text-slate-950">
                        {feature.title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="rounded-[36px] border border-[#e8dfd2] bg-[linear-gradient(135deg,#fffdf8_0%,#f3eee5_100%)] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <SectionEyebrow>Why we use it</SectionEyebrow>
                <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Product choices that strengthen trust in AI delivery.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Greater visibility", "Clearer insight into how agents store and use memory."],
                  ["Stronger reliability", "Better control over behavior in real operational settings."],
                  ["Practical deployment", "Useful for teams moving beyond prototypes into production."],
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
      </main>
    </div>
  );
}

export default ProductsPage;
