import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  BrainCircuit,
  Braces,
  Building2,
  ClipboardCheck,
  Code2,
  Cpu,
  Gamepad2,
  LaptopMinimalCheck,
  MapPin,
  MessageCircle,
  Phone,
  Smartphone,
  UsersRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const REGISTRATION_FORM_URL = "https://forms.gle/y4tVAwc8MxCHScDU9";

export const internshipPlans = [
  {
    durationDays: 15,
    summary: "Short-duration internship program",
    detail: "A focused introduction to practical, industry-oriented learning.",
    registrationUrl: REGISTRATION_FORM_URL,
  },
  {
    durationDays: 30,
    summary: "Extended internship program",
    detail: "More time to strengthen your skills through guided practice.",
    registrationUrl: REGISTRATION_FORM_URL,
  },
  {
    durationDays: 45,
    summary: "Extended learning experience",
    detail: "A longer path to build confidence with hands-on technical work.",
    registrationUrl: REGISTRATION_FORM_URL,
  },
] as const;

const learningAreas = [
  { label: "Software development", icon: Code2 },
  { label: "Web & full stack", icon: Braces },
  { label: "App development", icon: Smartphone },
  { label: "Game development", icon: Gamepad2 },
  { label: "AI & data science", icon: BrainCircuit },
  { label: "IoT & embedded systems", icon: Cpu },
  { label: "Emerging technologies", icon: LaptopMinimalCheck },
] as const;

const benefits = [
  {
    title: "Internship completion certificate",
    description:
      "Receive a completion certificate after successfully completing the internship program. Its format depends on your selected training mode.",
    image: "/images/certificate.webp",
    imageAlt: "A blank certificate document with a pen on a bright desk",
  },
  {
    title: "Attendance sheet",
    description:
      "Get an attendance sheet documenting your participation during the training period.",
    image: "/images/attendance-record.webp",
    imageAlt: "An attendance register and pen on a bright desk",
  },
  {
    title: "Hands-on practical training",
    description:
      "Learn through guided activities, practical sessions and technical training—not only theory.",
    image: "/images/classroom-training.webp",
    imageAlt: "Students working on computers during a practical training session",
  },
] as const;

const reasons = [
  { label: "Practical learning experience", icon: LaptopMinimalCheck },
  { label: "Industry-oriented training", icon: Building2 },
  { label: "Hands-on technical sessions", icon: Code2 },
  { label: "Flexible online & offline modes", icon: UsersRound },
  { label: "Attendance documentation", icon: ClipboardCheck },
  { label: "Internship completion certificate", icon: Award },
  { label: "Student-friendly learning support", icon: MessageCircle },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Internship Programs | LETS GAME TECH" },
      {
        name: "description",
        content:
          "Explore 15, 30 and 45 day online or offline internship programs with practical learning at LETS GAME TECH in Coimbatore.",
      },
      { property: "og:title", content: "Internship Programs | LETS GAME TECH" },
      {
        property: "og:description",
        content:
          "Build your skills and gain industry exposure through practical internship programs at LETS GAME TECH.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InternshipPage,
});

function InternshipPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="LETS GAME TECH home">
            <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground">
              <Code2 aria-hidden="true" className="size-5" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block text-sm font-semibold">LETS GAME TECH</span>
              <span className="block text-[0.65rem] font-medium">GLOBAL PRIVATE LIMITED</span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
            <a className="text-sm font-medium hover:text-primary" href="#about">
              About
            </a>
            <a className="text-sm font-medium hover:text-primary" href="#benefits">
              Benefits
            </a>
            <a className="text-sm font-medium hover:text-primary" href="#learning-modes">
              Learning modes
            </a>
            <a className="text-sm font-medium hover:text-primary" href="#contact">
              Contact
            </a>
            <Button asChild size="sm">
              <a href="#plans">Explore plans</a>
            </Button>
          </nav>

          <Button asChild size="sm" className="md:hidden">
            <a href="#plans">View plans</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-9 px-5 py-10 sm:px-8 sm:py-14 md:grid-cols-[0.92fr_1.08fr] md:gap-10 md:py-16">
          <div className="max-w-xl">
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Student internships · Coimbatore
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              Build your skills. Gain industry exposure.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Get practical learning experience through our internship programs at LETS GAME TECH
              GLOBAL PRIVATE LIMITED.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="min-h-12">
                <a href="#plans">
                  Register your internship!
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <a
                href="#about"
                className="inline-flex min-h-12 items-center gap-2 px-2 text-sm font-semibold text-foreground hover:text-primary"
              >
                About the company
                <ArrowDownRight aria-hidden="true" className="size-4" />
              </a>
            </div>
            <p className="mt-6 text-sm font-medium text-muted-foreground">
              15, 30 and 45 day programs <span aria-hidden="true">·</span> Online and offline
            </p>
          </div>

          <div className="relative">
            <img
              src="/images/students-in-tech-lab.webp"
              alt="Students collaborating at computers in a bright technology training lab"
              className="aspect-[4/3] w-full rounded-md object-cover"
              fetchPriority="high"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-sm border border-border bg-background/95 px-4 py-3 shadow-card sm:bottom-5 sm:left-5">
              <span className="grid size-10 place-items-center rounded-sm bg-secondary text-primary">
                <UsersRound aria-hidden="true" className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold">Learn by doing</span>
                <span className="block text-xs text-muted-foreground">Practical, guided sessions</span>
              </span>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-y border-border bg-secondary/35">
          <div className="mx-auto grid max-w-6xl items-center gap-9 px-5 py-14 sm:px-8 md:grid-cols-2 md:gap-14 md:py-20">
            <img
              src="/images/company-learning.webp"
              alt="A technology trainer guiding a student through a practical exercise"
              className="aspect-[4/3] w-full rounded-md object-cover"
              loading="lazy"
            />
            <div>
              <p className="text-xs font-semibold uppercase text-primary">About our company</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                About LETS GAME TECH
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                LETS GAME TECH GLOBAL PRIVATE LIMITED is a technology-driven company focused on
                skill development, practical learning, technical training and industry-oriented
                learning opportunities.
              </p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                We help students strengthen their technical knowledge through hands-on training,
                practical sessions and real-world learning experiences.
              </p>
              <div className="mt-6 border-t border-border pt-5">
                <h3 className="text-sm font-semibold">Focus areas</h3>
                <ul className="mt-4 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
                  {learningAreas.map(({ label, icon: Icon }) => (
                    <li key={label} className="flex items-center gap-2 text-sm text-foreground">
                      <Icon aria-hidden="true" className="size-4 shrink-0 text-primary" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase text-primary">Your internship</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                What you will get
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Practical support and clear documentation throughout your learning period.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="overflow-hidden rounded-md border border-border bg-card shadow-card"
                >
                  <img
                    src={benefit.image}
                    alt={benefit.imageAlt}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-semibold leading-snug">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="learning-modes" className="scroll-mt-24 border-y border-border bg-secondary/35">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase text-primary">Learn your way</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Choose your learning mode
              </h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="overflow-hidden rounded-md border border-border bg-card shadow-card">
                <img
                  src="/images/online-learning.webp"
                  alt="A student joining an online lesson from a laptop at home"
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-sm bg-secondary text-primary">
                      <LaptopMinimalCheck aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="text-xl font-semibold">Online internship</h3>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                    <li>Attend training sessions online.</li>
                    <li>Learn remotely from your location.</li>
                    <li>Receive a digital completion certificate after successful completion.</li>
                  </ul>
                </div>
              </article>
              <article className="overflow-hidden rounded-md border border-border bg-card shadow-card">
                <img
                  src="/images/classroom-training.webp"
                  alt="Students and an instructor working together in a training classroom"
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-sm bg-secondary text-primary">
                      <UsersRound aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="text-xl font-semibold">Offline internship</h3>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                    <li>Attend training sessions in person.</li>
                    <li>Participate in practical activities.</li>
                    <li>Receive a physical completion certificate after successful completion.</li>
                  </ul>
                </div>
              </article>
            </div>
            <p className="mt-6 border-l-2 border-primary px-4 py-2 text-sm leading-6 text-foreground">
              Certificate format depends on your selected mode: online participants receive a
              digital certificate, while offline participants receive a physical certificate.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase text-primary">A practical approach</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Why choose LETS GAME TECH?
              </h2>
            </div>
            <div>
              <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {reasons.map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-sm bg-secondary text-primary">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <span className="pt-1.5 text-sm font-medium leading-5">{label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-start gap-3 border-t border-border pt-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground">
                  <Building2 aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">Company identity</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    LETS GAME TECH GLOBAL PRIVATE LIMITED is a Private Limited Company.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="plans" className="scroll-mt-24 border-y border-border bg-secondary/35">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase text-primary">Registration plans</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Choose your internship duration
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Select the program length that fits your learning goals.
              </p>
            </div>
            <div className="mt-9 grid items-stretch gap-5 md:grid-cols-3">
              {internshipPlans.map((plan) => (
                <article
                  key={plan.durationDays}
                  className={`flex h-full flex-col rounded-md border bg-background p-5 sm:p-6 ${
                    plan.durationDays === 30
                      ? "border-primary shadow-featured"
                      : "border-border shadow-card"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase text-primary">
                    {plan.durationDays} days
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug">
                    {plan.durationDays} days internship
                  </h3>
                  <p className="mt-3 text-sm font-medium">{plan.summary}</p>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                    {plan.detail}
                  </p>
                  <ul className="mt-5 space-y-3 border-t border-border pt-5 text-sm leading-5">
                    <li className="flex items-start gap-2">
                      <ClipboardCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                      Practical learning and training
                    </li>
                    <li className="flex items-start gap-2">
                      <ClipboardCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                      Attendance documentation
                    </li>
                    <li className="flex items-start gap-2">
                      <Award aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                      Completion certificate
                    </li>
                  </ul>
                  <div className="mt-auto pt-6">
                    <Button asChild size="lg" className="min-h-12 w-full">
                      <a href={plan.registrationUrl} target="_blank" rel="noreferrer noopener">
                        Register now
                        <ArrowRight aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:items-center md:py-20">
            <div>
              <p className="text-xs font-semibold uppercase text-primary">Get in touch</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Questions about an internship?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                Contact LETS GAME TECH GLOBAL PRIVATE LIMITED in Coimbatore, Tamil Nadu.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <MapPin aria-hidden="true" className="size-4 shrink-0 text-primary" />
                  Coimbatore, Tamil Nadu, India
                </span>
                <a
                  className="flex items-center gap-2 text-sm font-medium hover:text-primary"
                  href="tel:+919003895472"
                >
                  <Phone aria-hidden="true" className="size-4 shrink-0 text-primary" />
                  +91 90038 95472
                </a>
              </div>
            </div>
            <Button asChild size="lg" className="min-h-12 w-full sm:w-auto">
              <a href="https://wa.me/919003895472" target="_blank" rel="noreferrer noopener">
                <MessageCircle aria-hidden="true" />
                WhatsApp us
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold">LETS GAME TECH GLOBAL PRIVATE LIMITED</p>
            <p className="mt-2 text-sm">Technology | Training | Innovation | Skill Development</p>
            <p className="mt-1 text-sm">Coimbatore, Tamil Nadu, India</p>
          </div>
          <p className="text-xs">© 2026 LETS GAME TECH GLOBAL PRIVATE LIMITED. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
