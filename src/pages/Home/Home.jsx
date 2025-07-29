import "./Home.scss";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import BadgeCard from "../../components/BadgeCard/BadgeCard";
import ExperienciaProfesional from "../../components/ExperienciaProfesional/ExperienciaProfesionnal";
import Certificates from "../../components/Certificates/Certificates";
// import Education from "../../components/Education/Education";
import EduLeng from "../../components/EduLeng/EduLeng";

const Home = () => {
    const { t } = useTranslation();
    const BadgeCards = [
        {
            icon: "/assets/code.svg",
            title: t("badgecard_title_lenguages"),
            skills: [
                "SQL",
                "Python",
                "HTML",
                "CSS",
                "JavaScript",
                "JSON",
                "Outsystems",
            ],
        },
        {
            icon: "/assets/tool.svg",
            title: t("badgecard_title_herramientas"),
            skills: [
                "MySQL Workbench",
                "Windows Server",
                "Linux",
                "Microsoft SQL Server",
                "GitHub",
                "SAGE 200",
                "Microsoft 365",
            ],
        },
    ];

    const experiencias = [
        {
            title: t("experience_titulo_1"),
            period: t("experience_period_1"),
            company: t("experience_enterprise_1"),
            description: t("experience_description_1"),
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
            description: t("experience_description_3"),
        },
        {
            title: t("experience_titulo_4"),
            period: t("experience_period_4"),
            company: t("experience_enterprise_4"),
            description: t("experience_description_4"),
        },
    ];

    const certificados = [
        {
            title: t("certificate_microsoft"),
            description: t("certificate_microsoft_description"),
            year: t("certificate_microsoft_year"),
        },
        {
            title: t("certificate_sage"),
            description: t("certificate_sage_description"),
            year: t("certificate_sage_year"),
        },
        {
            title: t("certificate_cisco"),
            description: t("certificate_cisco_description"),
            year: t("certificate_cisco_year"),
        },
    ];

    // const education = [
    //     {
    //         title: t("education_cfgs"),
    //         center: t("education_cfgs_center"),
    //     },
    //     {
    //         title: t("education_cfgm"),
    //         center: t("education_cfgm_center"),
    //     },
    // ];

    const eduleng = [
        {
            icon: "/assets/certificate.svg",
            title: t("education_title"),
            EduLeng: [
                {
                    course: t("education_cfgs"),
                    center: t("education_cfgs_center"),
                },
                {
                    course: t("education_cfgm"),
                    center: t("education_cfgm_center"),
                },
            ],
        },
        {
            icon: "/assets/language.svg",
            title: t("language_title"),
            EduLeng: [
                {
                    course: t("language_es"),
                },
                {
                    course: t("language_cat"),
                },
                {
                    course: t("language_rom"),
                },
                {
                    course: t("language_eng"),
                },
            ],
        },
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
                    {/* -----------------Seccion de SKILLS (array en array)----------------- */}
                    <section class="section">
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
                    {/* -----------------Seccion de Experiencia Profesional (array en array)----------------- */}
                    <section class="section">
                        <ExperienciaProfesional experiencias={experiencias} />
                    </section>
                    {/* -----------------Seccion de Certificaciones (array en array)----------------- */}
                    Para los certificados de Microsoft Learn, quiero añadir una
                    pagina mas y mostrar todos los que he hecho
                    <section class="section">
                        <div class="two-column">
                            <Certificates certificados={certificados} />
                        </div>
                    </section>
                    {/* -----------------Seccion de Educacion Y Idioma (array en array)----------------- */}
                    <section class="section">
                        <div class="skills-grid">
                            <div className="skills-container">
                                {eduleng.map((item, index) => (
                                    <EduLeng
                                        key={index}
                                        icon={item.icon}
                                        title={item.title}
                                        EduLeng={item.EduLeng}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* -----------------Seccion de Proyectos Destacados (array en array)----------------- */}
                    {/* <section class="section">
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
                    </section> */}
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
