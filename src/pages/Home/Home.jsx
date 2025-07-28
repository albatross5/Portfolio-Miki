import "./Home.scss";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
// import BadgeCard from "../../components/BadgeCard/BadgeCard";

const Home = () => {
    const { t } = useTranslation();
    // const BadgeCards = [
    //     {
    //         title: t("programacion"),
    //     }
    // ];

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
                    <section class="section">
                    <div class="skills-grid">
                        <div class="card skill-card green">
                            <div class="card-header">
                                <h2 class="card-title">
                                    Lenguajes de Programación
                                </h2>
                            </div>
                            <div class="skills-container">
                                <div class="skill-box skill-box-green">
                                    <div class="skill-box-title">SQL</div>
                                </div>
                                <div class="skill-box skill-box-green">
                                    <div class="skill-box-title">JavaScript</div>
                                </div>
                                <div class="skill-box skill-box-green">
                                    <div class="skill-box-title">Python</div>
                                </div>
                                <div class="skill-box skill-box-green">
                                    <div class="skill-box-title">HTML - CSS</div>
                                </div>
                                <div class="skill-box skill-box-green">
                                    <div class="skill-box-title">JSON</div>
                                </div>
                                <div class="skill-box skill-box-green">
                                    <div class="skill-box-title">Outsystems</div>
                                </div>
                                
                            </div>
                        </div>

                        <div class="card skill-card purple">
                            <div class="card-header">
                                <h2 class="card-title">
                                    Herramientas
                                </h2>
                            </div>
                            <div class="skills-container">
                                <div class="skill-box skill-box-purple">
                                    <div class="skill-box-title">Linux</div>
                                </div>
                                <div class="skill-box skill-box-purple">
                                    <div class="skill-box-title">Windows Server</div>
                                </div> 
                                <div class="skill-box skill-box-purple">
                                    <div class="skill-box-title">VirtualBox</div>
                                </div>
                                <div class="skill-box skill-box-purple">
                                    <div class="skill-box-title">SAGE 200</div>
                                </div>
                                <div class="skill-box skill-box-purple">
                                    <div class="skill-box-title">Node.js</div>
                                </div>
                                <div class="skill-box skill-box-purple">
                                    <div class="skill-box-title">ReactJS</div>
                                </div>
                                <div class="skill-box skill-box-purple">
                                    <div class="skill-box-title">Azure</div>
                                </div>
                                <div class="skill-box skill-box-purple">
                                    <div class="skill-box-title">Git</div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                    </section>
                    <section class="section">
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">
                                <div class="icon-container icon-gradient-cyan">
                                    <i class="fas fa-briefcase"></i>
                                </div>
                                Experiencia Profesional
                            </h2>
                        </div>
                        <div class="experience-item">
                            <div class="experience-header">
                                <h3 class="experience-title">Senior Cybersecurity Analyst</h3>
                                <span class="experience-period">2022 - Presente</span>
                            </div>
                            <p class="experience-company">TechCorp Solutions</p>
                            <p class="experience-description">
                                Administración de sistemas de seguridad, análisis de vulnerabilidades y respuesta a incidentes. 
                                Implementación de políticas de seguridad y auditorías de cumplimiento.
                            </p>
                        </div>
                        <div class="experience-item">
                            <div class="experience-header">
                                <h3 class="experience-title">Administrador de Sistemas</h3>
                                <span class="experience-period">2020 - 2022</span>
                            </div>
                            <p class="experience-company">DataSecure Inc.</p>
                            <p class="experience-description">
                                Gestión de infraestructura IT, servidores Linux/Windows, virtualización con VMware y 
                                automatización con scripts Python y Bash.
                            </p>
                        </div>
                        <div class="experience-item">
                            <div class="experience-header">
                                <h3 class="experience-title">Desarrollador Full Stack</h3>
                                <span class="experience-period">2018 - 2020</span>
                            </div>
                            <p class="experience-company">WebDev Agency</p>
                            <p class="experience-description">
                                Desarrollo de aplicaciones web con React, Node.js y bases de datos SQL. 
                                Implementación de medidas de seguridad en aplicaciones web.
                            </p>
                        </div>
                    </div>
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
                                <h3 class="project-title">Sistema de Monitoreo de Seguridad</h3>
                                <p class="project-description">
                                    Dashboard en tiempo real para monitoreo de eventos de seguridad usando Python, Flask y ELK Stack.
                                </p>
                                <div class="badges">
                                    <span class="badge badge-green">Python</span>
                                    <span class="badge badge-green">Flask</span>
                                    <span class="badge badge-green">Elasticsearch</span>
                                    <span class="badge badge-green">Kibana</span>
                                </div>
                            </div>
                            <div class="project-card">
                                <h3 class="project-title">Automatización de Auditorías</h3>
                                <p class="project-description">
                                    Scripts automatizados para auditorías de seguridad y generación de reportes de cumplimiento.
                                </p>
                                <div class="badges">
                                    <span class="badge badge-green">Python</span>
                                    <span class="badge badge-green">Bash</span>
                                    <span class="badge badge-green">PowerShell</span>
                                    <span class="badge badge-green">Docker</span>
                                </div>
                            </div>
                            <div class="project-card">
                                <h3 class="project-title">Portal de Gestión IT</h3>
                                <p class="project-description">
                                    Aplicación web para gestión de activos IT y tickets de soporte técnico.
                                </p>
                                <div class="badges">
                                    <span class="badge badge-green">React</span>
                                    <span class="badge badge-green">Node.js</span>
                                    <span class="badge badge-green">PostgreSQL</span>
                                    <span class="badge badge-green">Docker</span>
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
                                <h3 class="education-title">Grado en Ingeniería Informática</h3>
                                <p class="education-school">Universidad Politécnica de Madrid</p>
                                <p class="education-period">2014 - 2018</p>
                            </div>
                            <div></div>
                            <div class="education-item">
                                <h3 class="education-title">Máster en Ciberseguridad</h3>
                                <p class="education-school">Universidad Complutense de Madrid</p>
                                <p class="education-period">2018 - 2020</p>
                            </div>
                        </div>
                        <br /><br />
                <section class="section">
                    <div class="card contact-card">
                        <h2 class="contact-title">¡¡Contacta conmigo!!</h2>
                        <p class="contact-subtitle">
                            Estoy disponible para nuevos proyectos y oportunidades profesionales
                        </p>
                        <div class="contact-buttons">
                            <a href="mailto:miguelramirezsanchezr6@ejemplo.com" class="btn btn-primary">
                                Enviar Email
                            </a>
                            <a href="tel:+34654840946" class="btn btn-outline">
                                Llamar
                            </a>
                        </div>
                    </div>
                </section>
                </section>

                
                      {/* pegar codigo de https://v0.dev/chat/personal-web-for-informatico-qHvPWwheP8g / https://v0.dev/chat/personal-web-for-informatico-qHvPWwheP8g */}



                        {/* Aqui va el BadgeCard */}
                        {/* <div className="destinations-grid">
                            {BadgeCards.map((i, index) => (
                                <BadgeCard
                                    key={"BadgeCards-" + index}
                                    title={i.title}
                                />
                            ))}
                        </div> */}
                
                
            </main>
            <footer class="footer">
            <div class="container">
                <p>&copy; <span id="current-year"></span> {t("header_title")}. Todos los derechos reservados.</p>
            </div>
        </footer>
        </div>
    );
};

export default Home;
