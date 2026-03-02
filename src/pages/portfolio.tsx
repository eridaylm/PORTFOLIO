import { Component, createSignal, onMount, onCleanup, For } from "solid-js";
import TheyyWearr from "../img/theyywearr.webp";
import OmniLearn from "../img/omnilearn.webp";
import LMS from "../img/LMS.webp";
import Pemerintah from "../img/PEMERINTAH.webp";
import ULOReport from "../img/Desktop - 2.webp";
import Greenify from "../img/dekstop - Home page.webp";
import Erida from "../img/eyi.webp";
import "./portfolio.css";

const NAV_LINKS = [
  "About",
  "Experience",
  "Education",
  "Projects",
  "Skills",
  "Certificates",
  "Contact",
];

const EXPERIENCES = [
  {
    company: "PT. Special Skill Indonesia",
    role: "Web Developer Intern",
    period: "Mar 2026 — Present",
    location: "Pekuncen, Banyumas, Jawa Tengah, ID - Remote",
    desc: "Assisting in the development and maintenance of company websites using WordPress. Customizing themes, managing plugins, optimizing website performance, and ensuring responsive design across devices. Collaborating with the development team to implement new features and improve overall user experience.",
    tech: ["WordPress", "PHP", "Laravel"],
    current: true,
  },
  {
    company: "Freelancer",
    role: "Web Developer",
    period: "Jan 2026 — Present",
    location: "Sydney, Australia - Remote",
    desc: "Developed and scaled a web-based product using Lovable with Supabase as the backend infrastructure. Implemented authentication, database architecture, and integrated Stripe payment gateway for subscription management. Currently serving as COO, overseeing product operations, feature planning, and strategic growth initiatives.",
    tech: [
      "Lovable",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Authentication & RBAC",
      "Product Operations",
    ],
    current: false,
  },
  {
    company: "PT. Arkavia Cipta Nusantara",
    role: "Fullstack Developer & Web Administrator",
    period: "Jun 2025 — Dec 2025",
    location: "Remote",
    desc: "Developed and deployed a web-based e-learning platform using WordPress, customizing themes and plugins to support course management, user roles, and interactive learning features. Also served as Web Administrator, managing hosting environments, performance optimization, security configurations, and ongoing site maintenance.",
    tech: [
      "WordPress",
      "PHP",
      "cPanel",
      "Security Hardening",
      "SEO Optimization",
    ],
    current: false,
  },
  {
    company: "PT. Braincode Solutions",
    role: "Fullstack Developer Intern",
    period: "Jul 2024 — Nov 2024",
    location: "Sokaraja, Banyumas, Jawa Tengah, ID",
    desc: "Contributed to the end-to-end development of various client projects including LMS platforms, government systems, monitoring dashboards, admin reporting tools, and streaming-style web applications. Transformed functional requirements into scalable, maintainable, and production-ready solutions.",
    tech: [
      "Solid JS",
      "Rust",
      "PostgreSQL",
      "Typescript",
      "Github",
      "Vercel",
      "Railway",
    ],
    current: false,
  },
];

const EDUCATIONS = [
  {
    school: "SMK Telkom Purwokerto",
    degree: "Vocational High School",
    field: "Software & Game Development (Rekayasa Perangkat Lunak dan Game)",
    period: "2022 — 2025",
    gpa: null,
    desc: "Built a strong foundation in software engineering through object-oriented programming, Android development, full-stack web technologies (HTML, CSS, JavaScript, PHP, Laravel), UI/UX design using Figma and Adobe Illustrator, and introductory machine learning projects.",
    highlights: [
      "Object-Oriented Programming (OOP)",
      "Web Development (HTML, CSS, JavaScript, PHP, Laravel)",
      "Mobile Development (Android)",
      "UI/UX Design (Figma & Adobe Illustrator)",
      "Machine Learning Fundamentals (SOC)",
    ],
  },
  {
    school: "Telkom University Purwokerto",
    degree: "Bachelor of Informatics Engineering",
    field: "Informatics Engineering (Teknik Informatika)",
    period: "2025 — Present",
    gpa: null,
    desc: "Studying programming fundamentals including Go, algorithms, mathematical logic, computer organization & architecture, database systems, and ethical AI principles while building real-world software projects.",
    highlights: [
      "Go Programming Language",
      "Algorithms & Mathematical Logic",
      "Computer Organization & Architecture",
      "Database Systems",
      "Ethics in AI & Project Development",
    ],
  },
];

const PROJECTS = [
  {
    title: "TheyyWearr - E Commerce Website",
    desc: "Modern monitoring dashboard built with Solid.js and TypeScript.",
    tech: ["TypeScript", "Solid JS", "Rust", "PostgreSQL", "Railway", "Vercel"],
    github: "https://github.com/PSAJ-WEB/Front-End",
    demo: "https://theyywearr.vercel.app/",
    image: TheyyWearr,
    featured: true,
    align: "left",
  },
  {
    featured: true,
    align: "right",
    label: "Featured Project",
    title: "OmniLearn - E Learning Website",
    desc: "A full-stack platform connecting job seekers with opportunities. Features an intelligent matching algorithm, real-time notifications, and a sleek dashboard for tracking applications.",
    tech: ["WordPress"],
    image: OmniLearn,
    demo: "https://omnilearn.id/",
  },
  {
    featured: true,
    align: "left",
    title: "Learning Management System (LMS)",
    desc: "A full-stack platform connecting job seekers with opportunities. Features an intelligent matching algorithm, real-time notifications, and a sleek dashboard for tracking applications.",
    tech: ["TypeScript", "Solid JS", "Rust", "PostgreSQL", "Railway", "Vercel"],
    image: LMS,
  },
  {
    featured: true,
    align: "right",
    title: "ULO Report - Dashboard Admin",
    desc: "A full-stack platform connecting job seekers with opportunities. Features an intelligent matching algorithm, real-time notifications, and a sleek dashboard for tracking applications.",
    tech: ["TypeScript", "Solid JS", "Rust", "PostgreSQL", "Railway", "Vercel"],
    image: ULOReport,
    github: "https://github.com/eridaylm/fe-report-ulo",
    demo: "https://fe-report-ulo.vercel.app/",
  },
  {
    featured: true,
    align: "left",
    title: "Goverment Website - Bandung",
    desc: "A full-stack platform connecting job seekers with opportunities. Features an intelligent matching algorithm, real-time notifications, and a sleek dashboard for tracking applications.",
    tech: ["TypeScript", "Solid JS", "Rust", "PostgreSQL", "Railway", "Vercel"],
    image: Pemerintah,
    github:
      "https://github.com/PKL-BC-30/WEB_SEKOLAHAN/tree/main/src/WB_Pemerintahan",
  },
  {
    featured: true,
    align: "right",
    title: "Greenify",
    desc: "A full-stack platform connecting job seekers with opportunities. Features an intelligent matching algorithm, real-time notifications, and a sleek dashboard for tracking applications.",
    tech: ["HTML", "CSS", "Java Script"],
    image: Greenify,
    github: "https://github.com/satrio-telkom/Fusion-Tech",
  },
  {
    featured: false,
    align: "left",
    label: "Project",
    title: "Design System Kit",
    desc: "A comprehensive UI component library and design system built for enterprise-scale applications.",
    tech: ["Figma", "Storybook", "React", "CSS"],
    github: "#",
    demo: null,
  },
];

const TOOL_TAGS = [
  "React",
  "SolidJS",
  "Rust",
  "WordPress",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Figma",
  "CSS",
  "Next.js",
  "Git",
];

const CERTIFICATES = [
  {
    title: "Backend Development with Rust",
    issuer: "Dicoding Indonesia",
    date: "Jan 2026",
    credential: "https://credential-link.com",
    desc: "Completed comprehensive backend development training covering REST APIs, database integration, authentication, and production deployment using Rust.",
  },
  {
    title: "Fullstack Web Development",
    issuer: "Special Skill Indonesia",
    date: "Oct 2025",
    credential: null,
    desc: "Intensive fullstack training focused on modern frontend frameworks, backend systems, and scalable application architecture.",
  },
];

const IconGitHub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const IconLink = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const IconMail = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const Navbar: Component = () => {
  const [scrolled, setScrolled] = createSignal(false);
  const [menuOpen, setMenuOpen] = createSignal(false);
  const [active, setActive] = createSignal("about");

  const onScroll = () => {
    setScrolled(window.scrollY > 50);
    const ids = NAV_LINKS.map((n) => n.toLowerCase());
    const pos = window.scrollY + 130;
    for (let i = ids.length - 1; i >= 0; i--) {
      const el = document.getElementById(ids[i]);
      if (el && el.offsetTop <= pos) {
        setActive(ids[i]);
        break;
      }
    }
  };

  onMount(() => window.addEventListener("scroll", onScroll));
  onCleanup(() => window.removeEventListener("scroll", onScroll));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav class={`pf-nav ${scrolled() ? "pf-nav--blur" : ""}`}>
      <div class="pf-nav__inner">
        <button class="pf-nav__logo" onClick={() => scrollTo("about")}>
          <span class="pf-nav__bracket">&lt;</span>
          <span class="pf-nav__name"></span>
          <span class="pf-nav__bracket">/&gt;</span>
        </button>

        <ul class={`pf-nav__links ${menuOpen() ? "pf-nav__links--open" : ""}`}>
          <For each={NAV_LINKS}>
            {(link) => (
              <li>
                <button
                  class={`pf-nav__link ${active() === link.toLowerCase() ? "pf-nav__link--active" : ""}`}
                  onClick={() => scrollTo(link.toLowerCase())}
                >
                  {link}
                </button>
              </li>
            )}
          </For>
        </ul>

        <button
          class={`pf-nav__burger ${menuOpen() ? "pf-nav__burger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen())}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

const Hero: Component = () => (
  <section class="pf-hero" id="hero">
    <div class="pf-hero__bg">
      <div class="pf-orb pf-orb--1" />
      <div class="pf-orb pf-orb--2" />
      <div class="pf-orb pf-orb--3" />
      <div class="pf-grid" />
    </div>
    <div class="pf-hero__content">
      <p class="pf-hero__greeting">Hello, I Am</p>
      <h1 class="pf-hero__name">
        Eridayalma
        <br />
        <span class="pf-hero__name-grad">Yohar</span>
      </h1>
      <div class="pf-hero__roles">
        <span class="pf-hero__role">Software Engineer</span>
        <span class="pf-hero__dot">·</span>
        <span class="pf-hero__subrole">Fullstack Developer</span>
      </div>
      <p class="pf-hero__desc">
        Fullstack Web Developer specializing in Solid.js, Rust, and Node.js. I
        build scalable, high-performance web applications and custom WordPress
        solutions with clean architecture, type-safe systems, and seamless
        PostgreSQL integration.
      </p>

      <div class="pf-hero__cta">
        <a href="#projects" class="pf-btn pf-btn--primary">
          View Projects
        </a>
        <a href="#contact" class="pf-btn pf-btn--ghost">
          Let's Collaborate
        </a>
      </div>
    </div>
    <div class="pf-hero__avatar">
      <div class="pf-hero__ring"></div>
      <div class="pf-hero__ring pf-hero__ring--2"></div>

      <div class="pf-hero__avatar-inner">
        <img src={Erida} alt="Erida" />
      </div>
    </div>
  </section>
);

const About: Component = () => (
  <section class="pf-about pf-section" id="about">
    <p class="pf-label">Get To Know Me</p>
    <h2 class="pf-title">About Me</h2>
    <div class="pf-about__grid">
      <div class="pf-about__text">
        <p>
          Hello! I'm <strong>Eridayalma Zahra Yohar</strong>, an Informatics
          Engineering student at
          <a href="https://telkomuniversity.ac.id/" class="pf-link">
            {" "}
            Telkom University
          </a>{" "}
          and Web Developer Intern at
          <a href="https://specialskill.id/" class="pf-link">
            {" "}
            Special Skill Indonesia
          </a>
          .
        </p>

        <p>
          I build scalable and performant web applications using modern
          technologies like <span class="pf-accent">Solid.js</span>,{" "}
          <span class="pf-accent">Rust</span>, and{" "}
          <span class="pf-accent">Node.js</span>. Passionate about clean
          architecture, type-safe systems, and seamless database integrations, I
          focus on delivering efficient solutions with exceptional user
          experiences.
        </p>
      </div>
      <div class="pf-about__stats">
        {[
          { val: "3+", label: "Years Experience" },
          { val: "8+", label: "Projects Done" },
          { val: "10+", label: "Skills" },
          { val: "14+", label: "Certifications" },
        ].map((s) => (
          <div class="pf-stat">
            <span class="pf-stat__val">{s.val}</span>
            <span class="pf-stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Experience: Component = () => {
  const [active, setActive] = createSignal(0);
  return (
    <section class="pf-section" id="experience">
      <p class="pf-label">Where I've Worked</p>
      <h2 class="pf-title">Work Experience</h2>
      <div class="pf-exp__layout">
        <div class="pf-exp__tabs">
          <For each={EXPERIENCES}>
            {(exp, i) => (
              <button
                class={`pf-exp__tab ${active() === i() ? "pf-exp__tab--active" : ""}`}
                onClick={() => setActive(i())}
              >
                <span class="pf-exp__tab-co">{exp.company}</span>
                <span class="pf-exp__tab-period">{exp.period}</span>
              </button>
            )}
          </For>
        </div>
        <div class="pf-exp__card">
          <div class="pf-exp__header">
            <div>
              <h3 class="pf-exp__role">{EXPERIENCES[active()].role}</h3>
              <div class="pf-exp__meta">
                <span class="pf-accent">@ {EXPERIENCES[active()].company}</span>
                {EXPERIENCES[active()].current && (
                  <span class="pf-badge">Current</span>
                )}
              </div>
            </div>
            <div class="pf-exp__right">
              <span class="pf-exp__period">{EXPERIENCES[active()].period}</span>
              <span class="pf-exp__loc">{EXPERIENCES[active()].location}</span>
            </div>
          </div>
          <p class="pf-exp__desc">{EXPERIENCES[active()].desc}</p>
          <div class="pf-tags">
            <For each={EXPERIENCES[active()].tech}>
              {(t) => <span class="pf-tag pf-tag--blue">{t}</span>}
            </For>
          </div>
        </div>
      </div>
    </section>
  );
};

const Education: Component = () => (
  <section class="pf-section" id="education">
    <p class="pf-label">Academic Background</p>
    <h2 class="pf-title">Education</h2>
    <div class="pf-edu__timeline">
      <For each={EDUCATIONS}>
        {(edu, i) => (
          <div class="pf-edu__item">
            <div class="pf-edu__dot" />
            {i() < EDUCATIONS.length - 1 && <div class="pf-edu__line" />}
            <div class="pf-card pf-edu__card">
              <div class="pf-edu__top">
                <div>
                  <span class="pf-label pf-edu__field">{edu.field}</span>
                  <h3 class="pf-edu__degree">{edu.degree}</h3>
                  <p class="pf-edu__school">{edu.school}</p>
                </div>
                <div class="pf-edu__right">
                  <span class="pf-edu__period">{edu.period}</span>
                  {edu.gpa && <span class="pf-edu__gpa">GPA: {edu.gpa}</span>}
                </div>
              </div>
              <p class="pf-edu__desc">{edu.desc}</p>
              <div class="pf-tags">
                <For each={edu.highlights}>
                  {(h) => (
                    <span class="pf-tag pf-tag--outline">
                      <span class="pf-tag__dot" />
                      {h}
                    </span>
                  )}
                </For>
              </div>
            </div>
          </div>
        )}
      </For>
    </div>
  </section>
);

const Projects: Component = () => (
  <section class="pf-section" id="projects">
    <p class="pf-label">Things I've Built</p>
    <h2 class="pf-title">Projects</h2>

    <div class="pf-proj__featured-list">
      <For each={PROJECTS.filter((p) => p.featured)}>
        {(p) => (
          <div class={`pf-proj__featured pf-proj__featured--${p.align}`}>
            <div class="pf-proj__mockup">
              <div class="pf-proj__mockup-bar">
                <span />
                <span />
                <span />
              </div>
              <div
                class="pf-proj__mockup-body"
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <img src={p.image} alt={p.title} class="pf-proj__image" />
              </div>
            </div>
            <div class="pf-proj__info">
              <span class="pf-label">{p.label}</span>
              <h3 class="pf-proj__title">{p.title}</h3>
              <div class="pf-card pf-proj__desc-card">
                <p>{p.desc}</p>
              </div>
              <div class="pf-tags">
                <For each={p.tech}>
                  {(t) => <span class="pf-tag pf-tag--mono">{t}</span>}
                </For>
              </div>
              <div class="pf-proj__links">
                {p.github && (
                  <a href={p.github} class="pf-icon-link" aria-label="GitHub">
                    <IconGitHub />
                  </a>
                )}

                {p.demo && (
                  <a href={p.demo} class="pf-icon-link" aria-label="Demo">
                    <IconLink />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </For>
    </div>
  </section>
);

const Skills: Component = () => (
  <section>
    <p class="pf-skills__tag-label">Technologies I work with</p>
    <div class="pf-skills__tags">
      <For each={TOOL_TAGS}>
        {(t) => <span class="pf-skills__tag">{t}</span>}
      </For>
    </div>
  </section>
);
const Certificates: Component = () => (
  <section class="pf-section" id="certificates">
    <p class="pf-label">Professional Achievements</p>
    <h2 class="pf-title">Certificates</h2>

    <div class="pf-cert__list">
      <For each={CERTIFICATES}>
        {(cert) => (
          <div class="pf-cert__card pf-card">
            <div class="pf-cert__header">
              <div>
                <h3 class="pf-cert__title">{cert.title}</h3>
                <p class="pf-cert__issuer">{cert.issuer}</p>
              </div>

              <div class="pf-cert__right">
                <span class="pf-cert__date">{cert.date}</span>
              </div>
            </div>

            <p class="pf-cert__desc">{cert.desc}</p>

            {cert.credential && (
              <a
                href={cert.credential}
                target="_blank"
                class="pf-cert__link-combo"
                aria-label="Show Credential"
              >
                <span>Show Credential</span>
                <IconLink />
              </a>
            )}
          </div>
        )}
      </For>
    </div>
  </section>
);
const Contact: Component = () => {
  return (
    <section class="pf-section pf-contact" id="contact">
      <div class="pf-contact__wrap">
        <div class="pf-contact__info">
          <p class="pf-label">Get In Touch</p>
          <h2 class="pf-title" style="margin-bottom:1.2rem">
            Contact
          </h2>
          <p class="pf-contact__intro">
            I'm currently looking to join a{" "}
            <span class="pf-accent">cross-functional team</span> that values
            improving people's lives through accessible design. Have a project?
            Let's connect!
          </p>
          <a href="" class="pf-contact__email">
            <div class="pf-contact__email-icon">
              <IconMail />
            </div>
            <span>eridayalma999@gmail.com</span>
          </a>
          <div class="pf-contact__socials">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/eridaylm"
              class="pf-social"
              aria-label="Instagram"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/eridaylm"
              class="pf-social"
              aria-label="GitHub"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/eridayalma-zahra-yohar-832ab6292/"
              class="pf-social"
              aria-label="LinkedIn"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <footer class="pf-footer">
        <p>
          Designed &amp; Built by{" "}
          <span class="pf-accent">Eridayalma Zahra Yohar</span>
        </p>
        <p>{new Date().getFullYear()}</p>
      </footer>
    </section>
  );
};

const Portfolio: Component = () => (
  <div class="pf-root">
    <Navbar />
    <main class="pf-main">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
    </main>
  </div>
);

export default Portfolio;
