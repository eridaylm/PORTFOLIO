import { createSignal } from "solid-js";
import showcase from "../img/2.png";
import profilephoto from "../img/pas foto eyi-photoaidcom-greyscale.jpg";
import theyywearr from "../img/Landing Page - User Login.png";
import uloreport from "../img/Desktop - 2.png";
import dashboard from "../img/Dashboard.png";
import grenify from "../img/dekstop - Home page.png";
import lms from "../img/User - Dashboard.png";
import pemerintahan from "../img/Pemerintah Daerah-User.png";
import railway from "../img/devicon--railway.svg";
import solid from "../img/devicon--solidjs.svg";
import react from "../img/devicon--reactnative.svg";
import typescriptIcon from "../img/devicon--typescript.svg";
import nodeIcon from "../img/material-icon-theme--nodejs-alt.svg";
import postgresqlIcon from "../img/devicon--postgresql-wordmark.svg";
import vercelIcon from "../img/vscode-icons--file-type-vercel.svg";
import rust from "../img/simple-icons--rust.svg";
import gitIcon from "../img/lineicons--git (1).svg";
import wp from "../img/wp.svg";
import notesapp from "../img/notesapp.png";
import waliswap from "../img/waliswap.png";
import omnilearn from "../img/omnilearn.png";
import "./portfolio.css";

const portfolio = () => {
  const [activeSection, setActiveSection] = createSignal("portfolio");
  const [activeYear, setActiveYear] = createSignal("all");
  const portfolioItems = [
    {
      id: "01",
      title: "WEBSITE THEYYWEARR",
      category: "FULLSTACK DEVELOPER",
      year: "2025",
      isNew: true,
      image: theyywearr,
      tech: [solid, rust],
    },
    {
      id: "02",
      title: "ULO REPORT",
      category: "FULLSTACK DEVELOPER",
      year: "2024",
      image: uloreport,
    },
    {
      id: "03",
      title: "Dashboard Monitoring",
      category: "FULLSTACK DEVELOPER",
      year: "2024",
      image: dashboard,
    },
    {
      id: "04",
      title: "Grenify",
      category: "FRONTEND DEVELOPER",
      year: "2025",
      isNew: true,
      image: grenify,
    },
    {
      id: "05",
      title: "Website LMS Sekolah",
      category: "FRONTEND DEVELOPER",
      year: "2024",
      image: lms,
    },
    {
      id: "06",
      title: "Website Pemerintahan",
      category: "FRONTEND DEVELOPER",
      year: "2024",
      image: pemerintahan,
    },
    {
      id: "07",
      title: "Notes Management App (Project Dicoding Intermediate)",
      category: "FULLSTACK DEVELOPER",
      year: "2026",
      image: notesapp,
    },
    {
      id: "08",
      title: "OmniLearn — E-Learning Platform",
      category: "FULLSTACK DEVELOPER",
      year: "2025",
      image: omnilearn,
    },
    {
      id: "09",
      title: "WaliSwap — Islamic Marriage Platform",
      category: "FULLSTACK DEVELOPER",
      year: "2025",
      image: waliswap,
    },
  ];

  const skills = [
    { name: "Solid.js", icon: solid },
    { name: "React Native", icon: react },
    { name: "Rust", icon: rust },
    { name: "PostgreSQL", icon: postgresqlIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "Vercel", icon: vercelIcon },
    { name: "Railway", icon: railway },
    { name: "Git", icon: gitIcon },
    { name: "WordPress", icon: wp },
  ];

  const filteredItems = () => {
    if (activeYear() === "all") return portfolioItems;
    return portfolioItems.filter((item) => item.year === activeYear());
  };

  const years = [
    "all",
    ...[...new Set(portfolioItems.map((item) => item.year))].sort(
      (a, b) => Number(a) - Number(b),
    ),
  ];


  const tools = [
    { name: "Solid.js", icon: solid },
    { name: "Rust", icon: rust },
    { name: "React", icon: react },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "PostgreSQL", icon: postgresqlIcon },
    { name: "Vercel", icon: vercelIcon },
    { name: "Railway", icon: railway },
    { name: "Git", icon: gitIcon },
    { name: "WordPress", icon: wp },
  ];
  return (
    <div class="app">
      <header>
        <nav>
          <div class="nav-left">
            <a href="#" class="logo">
              PORTFOLIO
            </a>
            <a href="#about" onClick={() => setActiveSection("about")}>
              ABOUT ME
            </a>
          </div>
          <div class="nav-right">
            <a
              href="https://github.com/eridaylm"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/eridayalma-zahra-yohar-832ab6292/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section class="hero-section">
          <div class="hero-content">
            <h1>
              MY
              <br />
              PORTOFOLIO
            </h1>
            <p>
              A curated collection of my creative works showcasing the fusion of
              design, innovation and ideas at the forefront of the digital
              creative space.
            </p>
            <p>
              Each project represents my dedication to aesthetic excellence and
              functional innovation while focusing on the intersection of the
              digital sphere.
            </p>
          </div>
          <div class="hero-image">
            <img src={showcase} alt="Portfolio Showcase" />
            {/* <div class="caption">02/12</div> */}
          </div>
        </section>

        <section id="about" class={activeSection() === "about" ? "active" : ""}>
          <div class="about-container">
            <div class="about-content">
              <div class="about-image-container">
                <div class="profile-image-wrapper">
                  <img src={profilephoto} alt="Profile" class="profile-image" />
                  {tools.map((tool, index) => {
                    const angle = (360 / tools.length) * index;
                    const radius = 150; // Jarak dari pusat
                    const x = radius * Math.cos((angle * Math.PI) / 180);
                    const y = radius * Math.sin((angle * Math.PI) / 180);

                    return (
                      <div
                        class="tool-item"
                        style={{
                          "--x": `${x}px`,
                          "--y": `${y}px`,
                          "--delay": `${index * 0.1}s`,
                        }}
                      >
                        <div class="tool-bubble">
                          <img
                            src={tool.icon}
                            alt={tool.name}
                            class="tool-icon"
                          />
                        </div>
                        <span class="tool-name">{tool.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div class="about-text">
                <h2>ABOUT ME</h2>
                <p>
                  Hi, I'm <strong>Eridayalma Zahra Yohar</strong>, a passionate{" "}
                  <strong>Fullstack Web Developer</strong> specializing in
                  modern web technologies. I build performant and scalable web
                  applications using <strong>Solid.js</strong> for reactive user
                  interfaces,
                  <strong> Rust</strong> and <strong>Node.js</strong> for
                  backend systems, and also develop dynamic websites using{" "}
                  <strong>WordPress</strong>.
                </p>
                <p>My expertise includes:</p>
                <ul>
                  <li>
                    <strong>Fullstack Web Development</strong> with Solid.js +
                    Rust/Node.js stacks
                  </li>
                  <li>
                    Building custom CMS solutions and business websites using{" "}
                    <strong>WordPress</strong>
                  </li>
                  <li>
                    Building type-safe applications with{" "}
                    <strong>TypeScript</strong> and Rust
                  </li>
                  <li>
                    Deployment automation on <strong>Vercel</strong> (frontend)
                    and <strong>Railway</strong> (backend)
                  </li>
                  <li>
                    Creating seamless integrations between frontend and
                    PostgreSQL databases
                  </li>
                </ul>
                <p>
                  I focus on delivering clean, efficient code and exceptional
                  user experiences while leveraging cutting-edge technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          class={activeSection() === "portfolio" ? "active" : ""}
        >
          <div class="filters">
            <div class="filter-group">
              <button class="active">PORTFOLIO</button>
            </div>
            <div class="filter-tags">
              {years.map((year) => (
                <span
                  class={`tag ${activeYear() === year ? "active" : ""}`}
                  onClick={() => setActiveYear(year)}
                >
                  {year === "all" ? "ALL" : year}
                </span>
              ))}
            </div>
          </div>

          <div class="portfolio-grid">
            {filteredItems().map((item) => (
              <div class="portfolio-item">
                <div class="portfolio-image">
                  <div class="portfolio-image-scroll">
                    <img src={item.image} alt={item.title} />
                  </div>
                  {item.isNew && <span class="new-badge"></span>}
                </div>
                <div class="portfolio-info">
                  <div class="item-number">{item.id}.</div>
                  <div class="item-title">
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div class="footer-content">
          <div class="footer-links">
            <div class="footer-column">
              <h4>NAVIGATION</h4>
              <a href="#aboutme">About Me</a>
              <a href="#portfolio">Portfolio</a>
            </div>
            <div class="footer-column">
              <h4>SOCIAL</h4>
              <a href="https://github.com/eridaylm" target="_blank">
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/eridayalma-zahra-yohar-832ab6292/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            <div class="footer-column">
              <h4>DEVTOOLS</h4>
              <a href="https://vercel.com/eridaylms-projects">Vercel</a>
              <a href="https://railway.com/">Railway</a>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© 2025 Eridayalma Zahra Yohar. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <div class="floating-email">
        <span class="icon">📩</span>
        <span class="email-text">eridayalma999@gmail.com</span>
      </div>
    </div>
  );
};

export default portfolio;
