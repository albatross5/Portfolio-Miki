import "./Home.scss";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import BadgeCard from "../../components/BadgeCard/BadgeCard";
import ExperienciaProfesional from "../../components/ExperienciaProfesional/ExperienciaProfesionnal";
import Certificates from "../../components/Certificates/Certificates";
import EduLeng from "../../components/EduLeng/EduLeng";
import InfoCert from "../../components/InfoCert/InfoCert";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import LogoSlider from '../../components/LogoSlider/LogoSlider';
// import LanguageSelector from "../../components/LanguageSelector/LanguageSelector"; //ESTO ES EL SELECTOR DE IDIOMA

const Home = () => {
    const { t } = useTranslation();
    const BadgeCards = [ // APARTADO DE LENGUAJES Y HERRAMIENTAS, AQUI SE LE PASA EL ARRAY DE LOS BADGECARDS PARA QUE SE MUESTREN EN PANTALLA
        {   // ARRAY DE LENGUAJES
            icon: "/assets/code.svg",
            title: t("badgecard_title_lenguages"),
            skills: [
                { name: "SQL", icon: "/assets/database.svg" },
                { name: "HTML", icon: "/assets/html.svg" },
                { name: "CSS", icon: "/assets/css.svg" },
                { name: "JavaScript", icon: "/assets/js.svg" },
                { name: "Python", icon: "/assets/python.svg" },
                { name: "JSON", icon: "/assets/braces.svg" }
                
            ],
        },
        {   // ARRAY DE HERRAMIENTAS
            icon: "/assets/tool.svg",
            title: t("badgecard_title_herramientas"),
            skills: [
                { name: "Microsoft 365", icon: "/assets/windows.svg" },
                { name: "SharePoint", icon: "/assets/sharepoint.svg" },
                { name: "GitHub", icon: "/assets/github.svg" },
                { name: "Linux - Ubuntu / Kali", icon: "/assets/linux.svg" },
                { name: "Windows Server", icon: "/assets/server.svg" },
                { name: "SAGE 200", icon: "/assets/sage.svg" },
                { name: "WordPress", icon: "/assets/wordpress.svg" },  
                { name: "React", icon: "/assets/react.svg" },
            ],
        },
        {   // ARRAY DE BASE DE DATOS
            icon: "/assets/database.svg",
            title: "Base de Datos",
            skills: [
                { name: "MySQL Workbench", icon: "/assets/mysql.svg" },
                { name: "Microsoft SQL Server", icon: "/assets/server2.svg" },
                { name: "SSMS", icon: "/assets/database.svg" },
                { name: "Azure", icon: "/assets/azure.svg" },
            ],
        },
    ];

    const experiencias = [ // APARTADO DE EXPERIENCIA PROFESIONAL, AQUI SE LE PASA EL ARRAY DE EXPERIENCIAS PARA QUE SE MUESTREN EN PANTALLA
        {   // EXPERIENCIA CUINA JUSTA
            title: t("experience_titulo_1"),
            period: t("experience_period_1"),
            company: t("experience_enterprise_1"),
            description: t("experience_description_1"),
        },

        // {
        //     title: t("experience_titulo_2"),
        //     period: t("experience_period_2"),
        //     company: t("experience_enterprise_2"),
        // },

        {  // EXPERIENCIA ALCAMPO IT
            title: t("experience_titulo_3"),
            period: t("experience_period_3"),
            company: t("experience_enterprise_3"),
            description: t("experience_description_3"),
        },
        {   // EXPERIENCIA HIGHLANDS SCHOOL BARCELONA
            title: t("experience_titulo_4"),
            period: t("experience_period_4"),
            company: t("experience_enterprise_4"),
            description: t("experience_description_4"),
        },
    ];

    const certificados = [ // APARTADO DE CERTIFICACIONES, AQUI SE LE PASA EL ARRAY DE CERTIFICADOS PARA QUE SE MUESTREN EN PANTALLA
        {   // CERTIFICADO MICROSOFT LEARN
            title: t("certificate_microsoft"),
            description: t("certificate_microsoft_description"),
            year: t("certificate_microsoft_year"),
        },
        {   // CERTIFICADO SAGE UNIVERSITY - SAGE 200 - TALLER DE EXPERTOS EN GESTION
            title: t("certificate_sage_1"),
            description: t("certificate_sage_1_description"),
            year: t("certificate_sage_1_year"),
        },
        {   // CERTIFICADO BIG SCHOOL - DESARROLLO CON IA
            title: t("certificate_ia"),
            description: t("certificate_ia_description"),
            year: t("certificate_ia_year"),
        },
        {   // CERTIFICADO PCAP: PROGRAMMING ESSENTIALS IN PYTHON
            title: t("certificate_cisco"),
            description: t("certificate_cisco_description"),
            year: t("certificate_cisco_year"),
        },
        {   // CERTIFICADO SAGE 200 - 70H
            title: t("certificate_sage"),
            description: t("certificate_sage_description"),
            year: t("certificate_sage_year"),
        },
        
    ];

    const infocert = [ // APARTADO DE INFORMACION DE CERTIFICADOS, AQUI SE LE PASA EL ARRAY DE INFORMACION DE CERTIFICADOS PARA QUE SE MUESTREN EN PANTALLA
        {   // INFORMACION CERTIFICADO SAGE 200 - TALLER DE EXPERTOS EN GESTION
            image: "/assets/sage.svg",
            text: t("certificate_sage_info"),
            pdf: "https://drive.google.com/file/d/1v7zHIvZkgrFBqaHSKlwigf1NEeMp2Tbp/view?usp=drive_link",
        },
        {   // INFORMACION CERTIFICADO PCAP: PROGRAMMING ESSENTIALS IN PYTHON
            image: "/assets/python.svg",
            text: t("certificate_cisco_info"),
            pdf: "https://drive.google.com/file/d/1zod6OykcCjYzaklrv7fHAAwjdVwNuzC-/view?usp=drive_link",
        },
        {   // INFORMACION CERTIFICADO BIG SCHOOL - DESARROLLO CON IA
            image: "/assets/ai.svg",
            text: t("certificate_ia_info"),
            pdf: "https://drive.google.com/file/d/1CenofL0VetnHL2ac-VWZ2CgMm0g0kCUk/view?usp=drive_link",
        },
        {   // INFORMACION CERTIFICADO INTRODUCCION A GITHUB
            image: "/assets/windows.svg",
            text: t("certificate_github_info_1"),
            pdf: "https://drive.google.com/file/d/1NhrGrzvYhR48gMuVMtmANAn1KtCWoWXV/view?usp=sharing",
        },
        {   // INFORMACION CERTIFICADO ADMINISTRACION GITHUB
            image: "/assets/windows.svg",
            text: t("certificate_github_info_2"),
            pdf: "https://drive.google.com/file/d/147ShQCx7jZ-9lDwil5iapk08A34ISRVG/view?usp=sharing",
        },
        {   // INFORMACION CERTIFICADO INTRODUCCION AL ANALISIS DE DATOS
            image: "/assets/windows.svg",
            text: t("certification_sql_1"),
            pdf: "https://drive.google.com/file/d/1Rk9YmX6fgT17h5ugcb4W6sjy5bGMg2xW/view?usp=drive_link",
        },
        {   // INFORMACION CERTIFICADO ORDENACION Y FILTRADO EN T-SQL
            image: "/assets/windows.svg",
            text: t("certification_sql_2"),
            pdf: "https://drive.google.com/file/d/1mI5NdEC638eQ80dukp1f4UrroIVlNzKl/view?usp=drive_link",
        },
        {   // INFORMACION CERTIFICADO JOIN EN T-SQL
            image: "/assets/windows.svg",
            text: t("certification_sql_3"),
            pdf: "https://drive.google.com/file/d/1gL9xec3Mz3cr5IvB2u5l44av-rirAR5R/view?usp=drive_link",
        },
        {   // INFORMACION CERTIFICADO ESCRITURA DE SUBCONSULTAS EN T-SQL
            image: "/assets/windows.svg",
            text: t("certification_sql_4"),
            pdf: "https://drive.google.com/file/d/18PWIACt1tAOBcso5k8St0JdrFXmZK46w/view?usp=drive_link",
        },
        {   // INFORMACION CERTIFICADO MODIFICACION DE DATOS CON T-SQL
            image: "/assets/windows.svg",
            text: t("certification_sql_5"),
            pdf: "https://drive.google.com/file/d/17hclBBHM0vYt3bIBLJbffJW4orUdtA2k/view?usp=drive_link",
        },
        {   // INFORMACION CERTIFICADO FUNCIONES INTEGRADAS EN T-SQL
            image: "/assets/windows.svg",
            text: t("certification_sql_6"),
            pdf: "https://drive.google.com/file/d/10VLAh99w79EEWOINR9bSlaTQFIk09vFa/view?usp=drive_link",
        },
        {   // INFORMACION CERTIFICADO CONCEPTOS DE DATOS
            image: "/assets/windows.svg",
            text: t("certification_sql_7"),
            pdf: "https://drive.google.com/file/d/108mw3cLl4S5KlNxO0GS9JMJN5G-EmcqW/view?usp=drive_link",
        },
        {   // INFORMACION CERTIFICADO PROGRAMACION CON T-SQL
            image: "/assets/windows.svg",
            text: t("certification_sql_8"),
            pdf: "https://drive.google.com/file/d/1veUA3v7n2GPPHdKBIpH3N6-nHV5h0Imh/view?usp=drive_link",
        },
        {   // INFORMACION CERTIFICADO BBDD EN SQL SERVER AZURE
            image: "/assets/windows.svg",
            text: t("certification_sql_9"),
            pdf: "https://drive.google.com/file/d/1i8FOUzkGdy7quMkOJaHIXKjU1vVcK306/view?usp=drive_link",
        },
        {   // INFORMACION CERTIFICADO SOLUCIONES IAAS CON AZURE SQL
            image: "/assets/windows.svg",
            text: t("certification_sql_10"),
            pdf: "https://drive.google.com/file/d/1071q8gZAsdcsCDNt-joLJxxvjQ8w1rfx/view?usp=drive_link",
        },
        {   // INFORMACION CERTIFICADO ANALISIS A GRAN ESCALA
            image: "/assets/windows.svg",
            text: t("certification_sql_11"),
            pdf: "https://drive.google.com/file/d/1RudIMPLQAaWPIgb0sh6Y3CMZ0rTnC6Qr/view?usp=drive_link",
        },
        {   // INFORMACION CERTIFICADO INTRODUCCION A AD DS
            image: "/assets/windows.svg",
            text: t("certification_AD"),
            
            pdf: "https://drive.google.com/file/d/1bBJZ0W_6pKWDo9q3QqJ_YnvZfdakQbVf/view?usp=drive_link",
        },
        
    ];
    const eduleng = [ // APARTADO DE EDUCACION Y IDIOMAS, AQUI SE LE PASA EL ARRAY DE EDUCACION Y IDIOMAS PARA QUE SE MUESTREN EN PANTALLA
        {   // EDUCACION
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
        {   // IDIOMAS
            icon: "/assets/language.svg",
            title: t("language_title"),
            EduLeng: [
                {
                    course: t("language_es"),
                    center: t("language_native"),
                },
                {
                    course: t("language_cat"),
                    center: t("language_native"),
                },
                {
                    course: t("language_rom"),
                    center: t("language_mid"),
                },
                {
                    course: t("language_eng"),
                    center: t("language_basic"),
                },
            ],
        },
    ];

    return (
        <div class="main-container">
            {/* -----------------SECCION DE HEADER----------------- */}
            <Header></Header>
            {/* <LanguageSelector></LanguageSelector> AQUI SE LE LLAMA AL IDIOMA */}
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
                                <br />
                                {t("sobre_mi_segundo")}
                                <br />
                                <br />
                                {t("sobre_mi_tercero")}
                                <br />
                                <br />
                                {t("sobre_mi_cuarto")}
                            </p>
                        </div>
                    </section>

                    {/* -----------------SECCION DE SKILLS (array en array)----------------- */}
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

                    {/* -----------------SECCION DE EXPERIENCIA PROFESIONAL (array en array)----------------- */}
                    <section class="section">
                        <ExperienciaProfesional experiencias={experiencias} />
                    </section>

                    {/* NUEVO COMPONENTE AQUÍ */}
                    <LogoSlider />


                    {/* -----------------SECCION DE CERTIFICACIONES (array en array)----------------- */}
                    <section class="section">
                        <div class="two-column">
                            <Certificates certificados={certificados} />
                        </div>
                    </section>

                    {/* -----------------SECCION DE INFORMACION DE CERTIFICADOS (array en array)----------------- */}
                    <section class="section">
                        <InfoCert infocert={infocert} />
                    </section>

                    {/* -----------------SECCION DE EDUCACION Y IDIOMA (array en array)----------------- */}
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

                    {/* -----------------SECCION DE CONTACTAME----------------- */}

                    <Form />

                    {/* <h2 class="contact-title">
                                {t("contactme_title")}
                            </h2>
                            <p class="contact-subtitle">
                                {t("contactme_subtitle")}
                            </p>
                            <div class="contact-buttons">
                                <a
                                    href="mailto:miguelramirezsanchezr6@ejemplo.com"
                                    class="btn btn-primary"
                                >
                                    {t("contactme_mail")}
                                </a>
                                <a
                                    href="tel:+34654840946"
                                    class="btn btn-outline"
                                >
                                    {t("contactme_number")}
                                </a>
                            </div> */}
                </section>
            </main>

            {/* -----------------SECCION DE FOOTER----------------- */}
            <footer className="footer">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;
