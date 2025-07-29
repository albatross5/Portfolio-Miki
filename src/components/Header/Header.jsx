import "./Header.scss";
import { useTranslation } from "react-i18next";


const Header = () => {
    const { t } = useTranslation();
    return (
        <header class="header">
            <div class="container">
                <div class="header-content">
                    <div class="header-info">
                        <h1 class="main-title">{t("header_title")}</h1>
                        <p class="subtitle">
                            {t("header_subtitle_programmer")}
                            |
                            {t("header_subtitle_cyber")}
                        </p>
                        
                        <div class="contact-info">
                            <div class="contact-item">
                                <img className="iconos" src="/assets/pin.svg" alt="PIN" /><span>{t("header_location")}</span>
                            </div>
                            <div class="contact-item">
                                <img className="iconos" src="/assets/mail.svg" alt="MAIL" /><a href="mailto: miguelramirezsanchezr6@gmail.com"> {t("header_email")} </a>
                            </div>
                            <div class="contact-item">
                                <img className="iconos" src="/assets/phone.svg" alt="PHONE"/><a href="tel:+34654840946">{t("header_phone")}</a>
                            </div>
                        </div>
                    </div>
                    <div class="header-buttons">
                        <a href="https://www.linkedin.com/in/miguel-ramirez-sanchez-079843243/" class="btn btn-outline">
                            <img className="iconos" src="/assets/linkedin.svg" alt="LinkedIn" />
                            {t("header_linkedin")}
                        </a>
                        <a href="https://github.com/albatross5" class="btn btn-outline github">
                            <img className="iconos" src="/assets/github.svg" alt="GitHub" />
                            {t("header_github")}
                        </a>

                        {/* ESTO HACE QUE UN PDF SE VEA ABIERTO EN LA WEB */}
                        {/* <object 
                            className="pdfObject"
                            type="application/pdf"
                            data="https://mega.nz/file/ZppE2JYb#xkRgoi25v8ST4rVhgKdNuAiCQPaKF9721JH3_WTiW7E"
                            title="PDF"
                            width="100%"
                            height="600px">
                            <a href="https://mega.nz/file/ZppE2JYb#xkRgoi25v8ST4rVhgKdNuAiCQPaKF9721JH3_WTiW7E">
                            </a></object> */}

                        <a href="https://drive.google.com/file/d/1JDNizH3zUxpYROuwB-APj-xuPoRVMPrh/view?usp=drive_link" target="_blank" class="btn btn-primary">
                            <img className="iconos" src="/assets/cv.svg" alt="CV" />
                            {t("header_download_cv")}
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
