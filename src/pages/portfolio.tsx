import { createSignal } from 'solid-js';
import showcase from '../img/2.png';
import profilephoto from '../img/Gambar WhatsApp 2025-05-02 pukul 06,02,14_80b1223a-photoaidcom-greyscale.jpg'
import theyywearr from '../img/Landing Page - User Login.png'
import uloreport from '../img/Desktop - 2.png'
import dashboard from '../img/Dashboard.png'
import grenify from '../img/dekstop - Home page.png'
import lms from '../img/User - Dashboard.png'
import pemerintahan from '../img/Pemerintah Daerah-User.png'
import railway from '../img/devicon--railway.svg'
import solid from '../img/devicon--solidjs.svg';
import react from '../img/devicon--reactnative.svg';
import typescriptIcon from '../img/devicon--typescript.svg';
import nodeIcon from '../img/material-icon-theme--nodejs-alt.svg';
import postgresqlIcon from '../img/devicon--postgresql-wordmark.svg';
import vercelIcon from '../img/vscode-icons--file-type-vercel.svg';
import rust from '../img/simple-icons--rust.svg';
import gitIcon from '../img/lineicons--git (1).svg';
import './portfolio.css';

const portfolio = () => {
    const [activeSection, setActiveSection] = createSignal('portfolio');
    const [activeYear, setActiveYear] = createSignal('all');
    const portfolioItems = [
        {
            id: '01',
            title: 'WEBSITE THEYYWEARR',
            category: 'FULLSTACK DEVELOPER',
            year: '2025',
            isNew: true,
            image: theyywearr
        },
        {
            id: '02',
            title: 'ULO REPORT',
            category: 'FULLSTACK DEVELOPER',
            year: '2024',
            image: uloreport
        },
        {
            id: '03',
            title: 'Dashboard Monitoring',
            category: 'FULLSTACK DEVELOPER',
            year: '2024',
            image: dashboard
        },
        {
            id: '04',
            title: 'Grenify',
            category: 'FRONTEND DEVELOPER',
            year: '2025',
            isNew: true,
            image: grenify
        },
        {
            id: '05',
            title: 'Website LMS Sekolah',
            category: 'FRONTEND DEVELOPER',
            year: '2024',
            image: lms
        },
        {
            id: '06',
            title: 'Website Pemerintahan',
            category: 'FRONTEND DEVELOPER',
            year: '2024',
            image: pemerintahan
        }
    ];


    const skills = [
        { name: 'Solid.js', level: 95 },
        { name: 'React Native', level: 85 },
        { name: 'Rust', level: 90 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'TypeScript', level: 95 },
        { name: 'Node.js', level: 85 },
        { name: 'Vercel', level: 90 },
        { name: 'Railway', level: 85 },
    ];
    const filteredItems = () => {
        if (activeYear() === 'all') return portfolioItems;
        return portfolioItems.filter(item => item.year === activeYear());
    };

    // Get unique years for filter
    const years = ['all', ...new Set(portfolioItems.map(item => item.year))];

    const scrollToSocial = (e) => {
        e.preventDefault();
        setActiveSection('portfolio');
        const socialSection = document.querySelector('.social-section');
        if (socialSection) {
            socialSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    const tools = [
        { name: 'Solid.js', icon: solid },
        { name: 'Rust', icon: rust },
        { name: 'React', icon: react },
        { name: 'TypeScript', icon: typescriptIcon },
        { name: 'Node.js', icon: nodeIcon },
        { name: 'PostgreSQL', icon: postgresqlIcon },
        { name: 'Vercel', icon: vercelIcon },
        { name: 'Railway', icon: railway },
        { name: 'Git', icon: gitIcon }
    ];
    return (
        <div class="app">
            <header>
                <nav>
                    <div class="nav-left">
                        <a href="#" class="logo">PORTFOLIO</a>
                        <a href="#about" onClick={() => setActiveSection('about')}>ABOUT ME</a>
                        <a href="#portfolio" onClick={() => setActiveSection('portfolio')}>PORTFOLIO</a>
                        <a href="#skills" onClick={() => setActiveSection('skills')}>MY SKILLS</a>
                    </div>
                    <div class="nav-right">
                        <a href="https://github.com/eridaylm" target="_blank" rel="noopener noreferrer">GITHUB</a>
                        <a href="https://www.instagram.com/eridaylm/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                    </div>
                </nav>
            </header>

            <main>
                <section class="hero-section">
                    <div class="hero-content">
                        <h1>MY<br />PORTOFOLIO</h1>
                        <p>
                            A curated collection of my creative works showcasing the fusion of design,
                            innovation and ideas at the forefront of the digital creative space.
                        </p>
                        <p>
                            Each project represents my dedication to aesthetic excellence and functional
                            innovation while focusing on the intersection of the digital sphere.
                        </p>
                    </div>
                    <div class="hero-image">
                        <img src={showcase} alt="Portfolio Showcase" />
                        {/* <div class="caption">02/12</div> */}
                    </div>
                </section>

                <section id="about" class={activeSection() === 'about' ? 'active' : ''}>
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
                                                    '--x': `${x}px`,
                                                    '--y': `${y}px`,
                                                    '--delay': `${index * 0.1}s`
                                                }}
                                            >
                                                <div class="tool-bubble">
                                                    <img src={tool.icon} alt={tool.name} class="tool-icon" />
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
                                    Hi, I'm <strong>Eridayalma Zahra Yohar</strong>, a passionate <strong>Fullstack Developer</strong> specializing in modern web technologies.
                                    I build performant, scalable applications using <strong>Solid.js</strong> for reactive UIs and <strong>Rust</strong> for high-performance backend systems.
                                </p>
                                <p>My expertise includes:</p>
                                <ul>
                                    <li><strong>Fullstack Development</strong> with Solid.js + Rust/Node.js stacks</li>
                                    <li>Building type-safe applications with <strong>TypeScript</strong> and Rust</li>
                                    <li>Deployment automation on <strong>Vercel</strong> (frontend) and <strong>Railway</strong> (backend)</li>
                                    <li>Creating seamless integrations between frontend and PostgreSQL databases</li>
                                </ul>
                                <p>
                                    I focus on delivering clean, efficient code and exceptional user experiences while leveraging cutting-edge technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="portfolio" class={activeSection() === 'portfolio' ? 'active' : ''}>
                    <div class="filters">
                        <div class="filter-group">
                            <button class="active">PORTFOLIO</button>
                        </div>
                        <div class="filter-tags">
                            {years.map(year => (
                                <span
                                    class={`tag ${activeYear() === year ? 'active' : ''}`}
                                    onClick={() => setActiveYear(year)}
                                >
                                    {year === 'all' ? 'ALL' : year}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div class="portfolio-grid">
                        {filteredItems().map(item => (
                            <div class="portfolio-item">
                                <div class="portfolio-image" style={`background-image: url(${item.image})`}>
                                    {item.isNew && <span class="new-badge"></span>}
                                </div>
                                <div class="portfolio-info">
                                    <div class="item-number">{item.id}.</div>
                                    <div class="item-title">
                                        <h3>{item.title}</h3>
                                        <p>{item.category}</p>
                                    </div>
                                    {/* <a href="#" class="see-more">See More Details</a> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="skills" class="social-section">
                    <div class="social-header">
                        <h2>MY<br />SKILLS</h2>
                        <p>
                            HERE ARE THE TECHNOLOGIES AND TOOLS I WORK WITH TO CREATE
                            AMAZING DIGITAL EXPERIENCES.
                        </p>
                    </div>

                    <div class="skills-container">
                        <div class="skills-grid">
                            {skills.map(skill => (
                                <div class="skill-item">
                                    <div class="skill-header">
                                        <h3>{skill.name}</h3>
                                        <span class="skill-percent">{skill.level}%</span>
                                    </div>
                                    <div class="skill-bar">
                                        <div class="skill-level" style={`width: ${skill.level}%`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div class="footer-content">
                    <div class="footer-links">
                        <div class="footer-column">
                            <h4>NAVIGATION</h4>
                            <a href="#aboutme">About Me</a>
                            <a href="#myskills">My Skills</a>
                            <a href="#contact">Contact</a>
                        </div>
                        <div class="footer-column">
                            <h4>SOCIAL</h4>
                            <a href="https://github.com/eridaylm" target="_blank">Github</a>
                            <a href="https://www.instagram.com/eridaylm/" target="_blank">Instagram</a>
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
        </div>
    );
};

export default portfolio;