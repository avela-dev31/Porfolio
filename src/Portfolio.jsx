import { useState, useEffect } from "react";

/* ────────────────────────────────────────────────────────────
   CONTENIDO EDITABLE — cambia solo estos datos
   ──────────────────────────────────────────────────────────── */

const profile = {
    name: "avela-dev31",
    email: "velagarciaantonioluis@gmail.com",
    location: "Sevilla / España",
    available: true,
};

const stack = [
    { layer: "Interfaz", side: "frontend", tools: "JavaScript · React · React Native" },
    { layer: "Lógica", side: "backend", tools: "Node.js · Python · Spring Boot" },
    { layer: "Datos", side: "infra", tools: "PostgreSQL · Supabase · Docker · Vercel" },
];

const projects = [
    {
        id: "P-01",
        title: "E-Commerce Full-Stack a medida (TFG)",
        description:
            "Migración integral de la plataforma de una marca de ropa desde un modelo SaaS (Shopify) hacia una infraestructura completamente propia y personalizada.",
        tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
        demo: "https://pvrezaclub.com/",
        code: "https://github.com/avela-dev31/TFG-PVREZA",
    },
    {
        id: "P-02",
        title: "PijamaPizza App",
        description:
            "Futuro proyecto sobre una aplicacion para facilitar a los usuarios el hacer pedidos a una pizzeria local. Actualmente se encuentra en desarrollo. Pronto tendreís maas noticias",
        tags: ["React Native + Expo", "JavaScript", "Java + SpringBoot", "PostgresSQL"],
        demo: "",
        code: "https://github.com/avela-dev31/pijamapizza-app.git",
        code1: "https://github.com/avela-dev31/PijamaPizza.git"
    },
];

const experience = [
    {
        period: "Febrero 2025 — Mayo 2025",
        role: "Appian Software Developer",
        company: "Plexus Tech",
        description:
            "Progamador Appian para la creación y mantenimiento de soluciones de software, aplicando conocimientos de desarrollo backend/frontend en un entorno corporativo",
    },
    {
        period: "2024 — 2026",
        role: "Grado Superior en DAM",
        company: "IES Hermanos Machado",
        description:
            "Formación en desarrollo de aplicaciones multiplataforma: lenguajes, bases de datos, despliegue...",
    },
];

const skills = {
    Frontend: ["React", "TypeScript", "Next.js", "HTML / CSS"],
    Backend: ["Node.js", "Python", "Express", "FastAPI", "REST / GraphQL", "SpringBoot"],
    "Datos & Herramientas": ["PostgreSQL", "MongoDB", "Docker", "Git", "AWS", "MySQL","Supabase","Vercel","Render"],
};

const socials = [
    { label: "GitHub", href: "https://github.com/avela-dev31" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/antonio-luis-vela-garc%C3%ADa-1800a1267/" },
    { label: "CV (PDF)", href: "/CV-Antonio-Vela.pdf" },
];

const navItems = [
    { n: "01", label: "Inicio", href: "#inicio" },
    { n: "02", label: "Proyectos", href: "#proyectos" },
    { n: "03", label: "Sobre mí", href: "#sobre-mi" },
    { n: "04", label: "Contacto", href: "#contacto" },
];

/* ────────────────────────────────────────────────────────────
   ESTILOS — tema oscuro morado
   ──────────────────────────────────────────────────────────── */

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

.pf{
  --bg:#0C0A12; --panel:#15121F; --panel-2:#1B1726;
  --ink:#F4F2FA; --ink-soft:#A6A0B8;
  --line:rgba(255,255,255,0.09); --line-strong:rgba(255,255,255,0.2);
  --accent:#8B5CF6; --accent-ink:#A78BFA; --accent-tint:rgba(139,92,246,0.14);
  --display:'Space Grotesk',sans-serif; --body:'Inter',sans-serif; --mono:'JetBrains Mono',monospace;
  --maxw:1120px;
  background:var(--bg); color:var(--ink); font-family:var(--body);
  font-size:17px; line-height:1.6; -webkit-font-smoothing:antialiased;
}
.pf *{box-sizing:border-box;margin:0;padding:0}
.pf a{color:inherit;text-decoration:none}
.pf ::selection{background:var(--accent);color:#fff}
.pf :focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:2px}
.pf-wrap{max-width:var(--maxw);margin:0 auto;padding:0 28px}
.pf-eyebrow{font-family:var(--mono);font-size:12.5px;letter-spacing:.04em;color:var(--accent-ink);margin-bottom:18px}
.pf-eyebrow::before{content:"// "}

.pf-header{position:sticky;top:0;z-index:50;background:rgba(12,10,18,.72);
  backdrop-filter:saturate(180%) blur(12px);border-bottom:1px solid transparent;transition:border-color .3s}
.pf-header.scrolled{border-bottom:1px solid var(--line)}
.pf-nav{display:flex;align-items:center;justify-content:space-between;height:70px}
.pf-brand{font-family:var(--display);font-weight:700;font-size:17px;letter-spacing:-.01em;display:flex;align-items:center;gap:9px}
.pf-brand .dot{width:9px;height:9px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent)}
.pf-menu{display:flex;gap:32px;align-items:center}
.pf-menu a{font-family:var(--mono);font-size:13.5px;color:var(--ink-soft);position:relative;padding:4px 0;transition:color .2s}
.pf-menu a .num{color:var(--accent-ink);margin-right:5px}
.pf-menu a::after{content:"";position:absolute;left:0;bottom:-2px;width:0;height:1.5px;background:var(--accent);transition:width .25s}
.pf-menu a:hover,.pf-menu a.active{color:var(--ink)}
.pf-menu a:hover::after,.pf-menu a.active::after{width:100%}
.pf-burger{display:none;background:none;border:0;cursor:pointer;padding:8px;flex-direction:column;gap:5px}
.pf-burger span{display:block;width:24px;height:2px;background:var(--ink);transition:.3s}
.pf-burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.pf-burger.open span:nth-child(2){opacity:0}
.pf-burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}

.pf-hero{padding:96px 0 104px;position:relative;overflow:hidden}
.pf-glow{position:absolute;top:-140px;left:50%;transform:translateX(-25%);width:720px;height:560px;
  background:radial-gradient(circle at center,rgba(139,92,246,.38),transparent 62%);filter:blur(46px);
  pointer-events:none;z-index:0}
.pf-hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:64px;align-items:center;position:relative;z-index:1}
.pf-hero h1{font-family:var(--display);font-weight:700;font-size:clamp(40px,6.2vw,72px);line-height:1.02;letter-spacing:-.03em;margin-bottom:22px}
.pf-hero h1 .accent{color:var(--accent-ink)}
.pf-lead{font-size:19px;color:var(--ink-soft);max-width:30ch;margin-bottom:14px}
.pf-status{font-family:var(--mono);font-size:13px;color:var(--ink-soft);display:inline-flex;align-items:center;gap:9px;margin-bottom:34px}
.pf-status .pulse{width:8px;height:8px;border-radius:50%;background:#34d27b;box-shadow:0 0 0 0 rgba(52,210,123,.5);animation:pfpulse 2.2s infinite}
@keyframes pfpulse{0%{box-shadow:0 0 0 0 rgba(52,210,123,.5)}70%{box-shadow:0 0 0 8px rgba(52,210,123,0)}100%{box-shadow:0 0 0 0 rgba(52,210,123,0)}}
.pf-cta{display:flex;gap:14px;flex-wrap:wrap}
.pf-btn{font-family:var(--mono);font-size:14px;padding:13px 22px;border-radius:8px;border:1px solid transparent;transition:all .2s;cursor:pointer;display:inline-block}
.pf-btn-primary{background:var(--accent);color:#fff;border-color:var(--accent)}
.pf-btn-primary:hover{background:var(--accent-ink);border-color:var(--accent-ink);box-shadow:0 10px 34px -10px rgba(139,92,246,.7)}
.pf-btn-ghost{background:transparent;color:var(--ink);border-color:var(--line-strong)}
.pf-btn-ghost:hover{border-color:var(--accent);color:var(--accent-ink)}

.pf-stack{display:flex;flex-direction:column;gap:14px}
.pf-layer{border:1px solid var(--line);background:var(--panel);border-radius:12px;padding:20px 22px;transition:transform .3s,border-color .3s,box-shadow .3s}
.pf-layer:hover{transform:translateX(8px);border-color:var(--accent);box-shadow:-6px 6px 30px -8px rgba(139,92,246,.45)}
.pf-layer .lbl{font-family:var(--mono);font-size:11.5px;color:var(--accent-ink);display:flex;justify-content:space-between;margin-bottom:9px}
.pf-layer .lbl .n{color:var(--ink-soft)}
.pf-layer .tools{font-family:var(--mono);font-size:13.5px;color:var(--ink);line-height:1.5}

.pf-section{padding:92px 0;border-top:1px solid var(--line)}
.pf-sec-head{margin-bottom:54px;max-width:60ch}
.pf-sec-head h2{font-family:var(--display);font-weight:600;font-size:clamp(28px,3.6vw,40px);letter-spacing:-.02em;line-height:1.1}
.pf-sec-head p{color:var(--ink-soft);margin-top:14px;max-width:52ch}

.pf-projects{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
.pf-card{border:1px solid var(--line);border-radius:14px;padding:30px;background:var(--panel);display:flex;flex-direction:column;transition:transform .3s,box-shadow .3s,border-color .3s}
.pf-card:hover{transform:translateY(-5px);border-color:var(--accent);box-shadow:0 18px 50px -20px rgba(139,92,246,.4)}
.pf-card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px}
.pf-card-num{font-family:var(--mono);font-size:13px;color:var(--ink-soft)}
.pf-card-links{display:flex;gap:14px}
.pf-card-links a{font-family:var(--mono);font-size:12.5px;color:var(--ink-soft);border-bottom:1px solid transparent;transition:.2s}
.pf-card-links a:hover{color:var(--accent-ink);border-color:var(--accent)}
.pf-card h3{font-family:var(--display);font-weight:600;font-size:22px;letter-spacing:-.01em;margin-bottom:10px}
.pf-card p{color:var(--ink-soft);font-size:15.5px;flex-grow:1}
.pf-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:22px}
.pf-tag{font-family:var(--mono);font-size:11.5px;background:var(--accent-tint);color:var(--accent-ink);padding:5px 11px;border-radius:6px}

.pf-about-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}
.pf-bio p{color:var(--ink-soft);margin-bottom:18px;font-size:16.5px}
.pf-bio p strong{color:var(--ink);font-weight:600}
.pf-skills-block{margin-bottom:26px}
.pf-skills-block .k{font-family:var(--mono);font-size:12px;color:var(--accent-ink);margin-bottom:12px;display:block}
.pf-chips{display:flex;flex-wrap:wrap;gap:9px}
.pf-chip{font-size:14px;border:1px solid var(--line);padding:7px 14px;border-radius:20px;transition:.2s;color:var(--ink)}
.pf-chip:hover{border-color:var(--accent);color:var(--accent-ink)}

.pf-timeline{max-width:720px}
.pf-exp{position:relative;padding:0 0 40px 36px;border-left:1px solid var(--line)}
.pf-exp:last-child{padding-bottom:0}
.pf-exp::before{content:"";position:absolute;left:-5px;top:5px;width:9px;height:9px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent)}
.pf-exp .when{font-family:var(--mono);font-size:12.5px;color:var(--accent-ink);display:block;margin-bottom:8px}
.pf-exp h3{font-family:var(--display);font-weight:600;font-size:20px;letter-spacing:-.01em;margin-bottom:4px}
.pf-exp .where{font-family:var(--mono);font-size:13px;color:var(--ink-soft);display:block;margin-bottom:12px}
.pf-exp p{color:var(--ink-soft);font-size:15.5px}

.pf-contact{text-align:center}
.pf-contact .pf-sec-head{margin:0 auto 40px}
.pf-contact h2{font-size:clamp(32px,5vw,52px)}
.pf-contact .pf-sec-head p{margin-left:auto;margin-right:auto}
.pf-mail{font-family:var(--display);font-weight:600;font-size:clamp(22px,4vw,34px);color:var(--accent-ink);letter-spacing:-.01em;border-bottom:2px solid transparent;transition:.2s}
.pf-mail:hover{border-color:var(--accent)}
.pf-socials{display:flex;gap:28px;justify-content:center;margin-top:40px;flex-wrap:wrap}
.pf-socials a{font-family:var(--mono);font-size:14px;color:var(--ink-soft);transition:.2s;border-bottom:1px solid transparent;padding-bottom:2px}
.pf-socials a:hover{color:var(--ink);border-color:var(--accent)}

.pf-footer{border-top:1px solid var(--line);padding:34px 0}
.pf-foot{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.pf-foot span{font-family:var(--mono);font-size:12.5px;color:var(--ink-soft)}

.pf-reveal{opacity:0;transform:translateY(22px);transition:opacity .7s,transform .7s}
.pf-reveal.in{opacity:1;transform:none}

@media (prefers-reduced-motion:reduce){
  .pf{scroll-behavior:auto}
  .pf-status .pulse{animation:none}
  .pf-reveal{opacity:1;transform:none;transition:none}
}

@media (max-width:880px){
  .pf-hero-grid{grid-template-columns:1fr;gap:48px}
  .pf-projects{grid-template-columns:1fr}
  .pf-about-grid{grid-template-columns:1fr;gap:40px}
  .pf-burger{display:flex}
  .pf-menu{position:fixed;inset:70px 0 auto 0;flex-direction:column;gap:0;background:var(--bg);
    border-bottom:1px solid var(--line);padding:8px 0;transform:translateY(-130%);transition:transform .35s;
    box-shadow:0 20px 40px -28px rgba(0,0,0,.6)}
  .pf-menu.open{transform:translateY(0)}
  .pf-menu a{padding:15px 28px;width:100%;font-size:16px}
  .pf-menu a::after{display:none}
}
`;

/* ────────────────────────────────────────────────────────────
   COMPONENTE
   ──────────────────────────────────────────────────────────── */

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("inicio");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 8);
            const y = window.scrollY + 120;
            const sections = navItems.map((i) => i.href.slice(1));
            let current = sections[0];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= y) current = id;
            }
            setActive(current);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const els = document.querySelectorAll(".pf-reveal");
        if (reduce || !("IntersectionObserver" in window)) {
            els.forEach((el) => el.classList.add("in"));
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("in");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="pf">
            <style>{styles}</style>

            <header className={`pf-header${scrolled ? " scrolled" : ""}`} id="top">
                <div className="pf-wrap pf-nav">
                    <a href="#top" className="pf-brand">
                        <span className="dot" />
                        {profile.name}
                    </a>
                    <button
                        className={`pf-burger${menuOpen ? " open" : ""}`}
                        aria-label="Abrir menú"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((o) => !o)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                    <nav className={`pf-menu${menuOpen ? " open" : ""}`}>
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={active === item.href.slice(1) ? "active" : ""}
                                onClick={closeMenu}
                            >
                                <span className="num">{item.n}</span>
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            <main>
                {/* HERO */}
                <section className="pf-hero" id="inicio">
                    <div className="pf-glow" aria-hidden="true" />
                    <div className="pf-wrap pf-hero-grid">
                        <div className="pf-reveal">
                            <p className="pf-eyebrow">Full Stack Developer</p>
                            <h1>
                                Antonio Luis Vela Garcia.
                            </h1>
                            <p className="pf-lead">
                                Desarrollador full stack, capaz de construir y soluciones probelemas digitales de alta calidad.
                            </p>
                            <p className="pf-status">
                                {profile.available && <span className="pulse" />}
                                {profile.available
                                    ? "Disponible para nuevos proyectos"
                                    : "Trabajando en proyectos actuales"}{" "}
                                · {profile.location}
                            </p>
                            <div className="pf-cta">
                                <a href="#proyectos" className="pf-btn pf-btn-primary">
                                    Ver proyectos
                                </a>
                                <a href="#contacto" className="pf-btn pf-btn-ghost">
                                    Contacto →
                                </a>
                            </div>
                        </div>

                        <div className="pf-stack pf-reveal" aria-hidden="true">
                            {stack.map((s) => (
                                <div className="pf-layer" key={s.layer}>
                                    <div className="lbl">
                                        <span>{s.layer}</span>
                                        <span className="n">{s.side}</span>
                                    </div>
                                    <div className="tools">{s.tools}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROYECTOS */}
                <section className="pf-section" id="proyectos">
                    <div className="pf-wrap">
                        <div className="pf-sec-head pf-reveal">
                            <p className="pf-eyebrow">Proyectos</p>
                            <h2>Proyectos que he realizado</h2>
                            <p>Una selección de los proyectos en los que estoy trabajando.</p>
                        </div>
                        <div className="pf-projects">
                            {projects.map((p) => (
                                <article className="pf-card pf-reveal" key={p.id}>
                                    <div className="pf-card-top">
                                        <span className="pf-card-num">{p.id}</span>
                                        <div className="pf-card-links">
                                            {p.demo && (
                                                <a href={p.demo} target="_blank" rel="noopener noreferrer">
                                                    demo ↗
                                                </a>
                                            )}
                                            {p.code && (
                                                <a href={p.code} target="_blank" rel="noopener noreferrer">
                                                    código ↗
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <h3>{p.title}</h3>
                                    <p>{p.description}</p>
                                    <div className="pf-tags">
                                        {p.tags.map((t) => (
                                            <span className="pf-tag" key={t}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SOBRE MÍ */}
                <section className="pf-section" id="sobre-mi">
                    <div className="pf-wrap">
                        <div className="pf-sec-head pf-reveal">
                            <p className="pf-eyebrow">Sobre mí</p>
                            <h2>Quién hay detrás del código</h2>
                        </div>
                        <div className="pf-about-grid">
                            <div className="pf-bio pf-reveal">
                                <p>
                                    Soy <strong>desarrollador full stack</strong> con objetivos de construir productos
                                    completos, desde la interfaz hasta la base de datos. Me gusta el código limpio, las
                                    decisiones bien argumentadas y entregar cosas que la gente usa de verdad.
                                </p>
                                <p>
                                    Desde muy pequeño me ha interaso el mundo de la tecnología, ya sea videjuegos, consolas,
                                    ordenadores o dispositivos moviles hasta el punto que decidi cursar el Grado Medio de SMR
                                    el cual me ayudo a como funcionan las redes que nos ayudan a navegar por internet, pero
                                    como persona ambiciosa que soy necesitaba nutrirme mas sobre este mundo de la tecnología y
                                    siempre me preguntaba; ¿Como se ha diseñado esta aplicacion?, ¿Como funciona este
                                    software?, ¿Como se lanzan paginas wweb al publico?. Entoces emprendi mi camino hacia el
                                    Grado Superior de DAM, en este aprendizaje he aprendido mucho gracias a las buenisimos
                                    profesionales que me han guiado ha responder las preguntas que me hacia en el pasado. Por
                                    eso me gustaria seguir aprendiendo y he decidido crear este portfolio para poder mostras
                                    mis futuros proyectos. Busco un trabajo que me ayude a mejorar mis habilidades,
                                    conocimientos, me ponga aprueba como desarrollador y sobre todo ayudar a los demas.
                                </p>
                                <p>
                                    Cuando no estoy programando, me gusta el deporte, pienso que mantener una vida saludable
                                    nos ayuda a liberar la mente y nos permite ser mas productivos en nuestros proyectos o en
                                    los de la empresa.
                                </p>
                            </div>
                            <div className="pf-reveal">
                                {Object.entries(skills).map(([category, items]) => (
                                    <div className="pf-skills-block" key={category}>
                                        <span className="k">{category}</span>
                                        <div className="pf-chips">
                                            {items.map((s) => (
                                                <span className="pf-chip" key={s}>
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPERIENCIA */}
                <section className="pf-section" id="experiencia">
                    <div className="pf-wrap">
                        <div className="pf-sec-head pf-reveal">
                            <p className="pf-eyebrow">Experiencia</p>
                            <h2>Mi trayectoria</h2>
                        </div>
                        <div className="pf-timeline">
                            {experience.map((e, i) => (
                                <article className="pf-exp pf-reveal" key={i}>
                                    <span className="when">{e.period}</span>
                                    <h3>{e.role}</h3>
                                    <span className="where">{e.company}</span>
                                    <p>{e.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACTO */}
                <section className="pf-section pf-contact" id="contacto">
                    <div className="pf-wrap">
                        <div className="pf-sec-head pf-reveal">
                            <p className="pf-eyebrow" style={{ display: "inline-block" }}>
                                Contacto
                            </p>
                            <h2>¿Construimos algo juntos?</h2>
                            <p>Estoy abierto a oportunidades, colaboraciones y buenas conversaciones técnicas.</p>
                        </div>
                        <a href={`mailto:${profile.email}`} className="pf-mail pf-reveal">
                            {profile.email}
                        </a>
                        <div className="pf-socials pf-reveal">
                            {socials.map((s) => (
                                <a href={s.href} key={s.label} target="_blank" rel="noopener noreferrer">
                                    {s.label} ↗
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="pf-footer">
                <div className="pf-wrap pf-foot">
                    <span>
                        © {new Date().getFullYear()} {profile.name}
                    </span>
                    <span>Diseñado y construido por mí</span>
                </div>
            </footer>
        </div>
    );
}