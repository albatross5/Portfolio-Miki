import "./Home.scss";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import BadgeCard from "../../components/BadgeCard/BadgeCard";
import ExperienciaProfesional from "../../components/ExperienciaProfesional/ExperienciaProfesionnal";

const Home = () => {
    const { t } = useTranslation();
    const BadgeCards = [
        {
            icon: "/assets/code.svg",
            title: t("badgecard_title_lenguages"),
            skills: ["SQL", "Python", "HTML", "CSS", "JavaScript", "JSON", "Outsystems"]

        },
        {
            icon: "/assets/tool.svg",
            title: t("badgecard_title_herramientas"),
            skills: ["MySQL Workbench", "Windows Server", "Linux", "Microsoft SQL Server", "GitHub", "SAGE 200", "Microsoft 365"]

        },
    ];

    
    
    const experiencias = [
        {
            title: t("experience_titulo_1"),
            period: t("experience_period_1"),
            company: t("experience_enterprise_1"),
            description: t("experience_description_1")
        },
        {
            title: t("experience_titulo_2"),
            period: t("experience_period_2"),
            company: t("experience_enterprise_2"),
        },
        {
            title: t("experience_titulo_3"),
            period: t("experience_period_3"),
            company: t("experience_enterprise_3"),
            description: t("experience_description_3")
        },
        {
            title: t("experience_titulo_4"),
            period: t("experience_period_4"),
            company: t("experience_enterprise_4"),
            description: t("experience_description_4")
        }
    ];



    return (
        <div class="main-container">
            <Header></Header>

            <main class="main-content">
                <section class="container">
                    <section class="section">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">{t("sobre_mi")}</h2>
                            </div>
                            <p>
                                {t("sobre_mi_primero")}
                                <br />
                                {t("sobre_mi_segundo")}
                            </p>
                        </div>
                    </section>
                    
                    <section class="section"> {/* -----------------Seccion de SKILLS (array en array)----------------- */}
                        <div class="skills-grid">
                            <div className="skills-container">
                                {BadgeCards.map((i, index) => (
                                    <BadgeCard
                                        key={"BadgeCards-" + index}
                                        icon={i.icon}
                                        title={i.title}
                                        skills={i.skills}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                    <section class="section">

                        <ExperienciaProfesional experiencias={experiencias} />

                    </section>
                    <section class="section">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">
                                    <div class="icon-container icon-gradient-green">
                                        <i class="fas fa-globe"></i>
                                    </div>
                                    Proyectos Destacados
                                </h2>
                            </div>
                            <div class="projects-grid">
                                <div class="project-card">
                                    <h3 class="project-title">
                                        Sistema de Monitoreo de Seguridad
                                    </h3>
                                    <p class="project-description">
                                        Dashboard en tiempo real para monitoreo
                                        de eventos de seguridad usando Python,
                                        Flask y ELK Stack.
                                    </p>
                                    <div class="badges">
                                        <span class="badge badge-green">
                                            Python
                                        </span>
                                        <span class="badge badge-green">
                                            Flask
                                        </span>
                                        <span class="badge badge-green">
                                            Elasticsearch
                                        </span>
                                        <span class="badge badge-green">
                                            Kibana
                                        </span>
                                    </div>
                                </div>
                                <div class="project-card">
                                    <h3 class="project-title">
                                        Automatización de Auditorías
                                    </h3>
                                    <p class="project-description">
                                        Scripts automatizados para auditorías de
                                        seguridad y generación de reportes de
                                        cumplimiento.
                                    </p>
                                    <div class="badges">
                                        <span class="badge badge-green">
                                            Python
                                        </span>
                                        <span class="badge badge-green">
                                            Bash
                                        </span>
                                        <span class="badge badge-green">
                                            PowerShell
                                        </span>
                                        <span class="badge badge-green">
                                            Docker
                                        </span>
                                    </div>
                                </div>
                                <div class="project-card">
                                    <h3 class="project-title">
                                        Portal de Gestión IT
                                    </h3>
                                    <p class="project-description">
                                        Aplicación web para gestión de activos
                                        IT y tickets de soporte técnico.
                                    </p>
                                    <div class="badges">
                                        <span class="badge badge-green">
                                            React
                                        </span>
                                        <span class="badge badge-green">
                                            Node.js
                                        </span>
                                        <span class="badge badge-green">
                                            PostgreSQL
                                        </span>
                                        <span class="badge badge-green">
                                            Docker
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="section">
                        <div class="two-column">
                            <div class="card">
                                <div class="card-header">
                                    <h2 class="card-title">
                                        <div class="icon-container icon-gradient-yellow">
                                            <i class="fas fa-award"></i>
                                        </div>
                                        Certificaciones
                                    </h2>
                                </div>
                                <div class="cert-item">
                                    <div class="cert-info">
                                        <h3>CISSP</h3>
                                        <p>ISC²</p>
                                    </div>
                                    <span class="badge badge-yellow">2023</span>
                                </div>
                                <div class="cert-item">
                                    <div class="cert-info">
                                        <h3>CEH</h3>
                                        <p>EC-Council</p>
                                    </div>
                                    <span class="badge badge-yellow">2022</span>
                                </div>
                                <div class="cert-item">
                                    <div class="cert-info">
                                        <h3>CompTIA Security+</h3>
                                        <p>CompTIA</p>
                                    </div>
                                    <span class="badge badge-yellow">2021</span>
                                </div>
                                <div class="cert-item">
                                    <div class="cert-info">
                                        <h3>AWS Solutions Architect</h3>
                                        <p>Amazon</p>
                                    </div>
                                    <span class="badge badge-yellow">2023</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">
                                <div class="icon-container icon-gradient-indigo">
                                    <i class="fas fa-graduation-cap"></i>
                                </div>
                                Educación
                            </h2>
                        </div>
                        <div class="education-item">
                            <h3 class="education-title">
                                Grado en Ingeniería Informática
                            </h3>
                            <p class="education-school">
                                Universidad Politécnica de Madrid
                            </p>
                            <p class="education-period">2014 - 2018</p>
                        </div>
                        <div></div>
                        <div class="education-item">
                            <h3 class="education-title">
                                Máster en Ciberseguridad
                            </h3>
                            <p class="education-school">
                                Universidad Complutense de Madrid
                            </p>
                            <p class="education-period">2018 - 2020</p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <section class="section">
                        <div class="card contact-card">
                            <h2 class="contact-title">¡¡Contacta conmigo!!</h2>
                            <p class="contact-subtitle">
                                Estoy disponible para nuevos proyectos y
                                oportunidades profesionales
                            </p>
                            <div class="contact-buttons">
                                <a
                                    href="mailto:miguelramirezsanchezr6@ejemplo.com"
                                    class="btn btn-primary"
                                >
                                    Enviar Email
                                </a>
                                <a
                                    href="tel:+34654840946"
                                    class="btn btn-outline"
                                >
                                    Llamar
                                </a>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
            <footer class="footer">
                <div class="container">
                    <p>
                        &copy; <span id="current-year"></span>{" "}
                        {t("header_title")}. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;

{
    /* codigo de https://v0.dev/chat/personal-web-for-informatico-qHvPWwheP8g / https://v0.dev/chat/personal-web-for-informatico-qHvPWwheP8g */
}
