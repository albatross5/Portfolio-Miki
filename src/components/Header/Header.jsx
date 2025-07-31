import "./Header.scss"
import { useTranslation } from "react-i18next"

const Header = () => {
  const { t } = useTranslation()
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-info">
            <h1 className="main-title">{t("header_title")}</h1>
            <p className="subtitle">
              {t("header_subtitle_system")} | {t("header_subtitle_programmer")}
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <img className="iconos" src="/assets/pin.svg" alt="PIN" />
                <span>{t("header_location")}</span>
              </div>
              <div className="contact-item">
                <img className="iconos" src="/assets/mail.svg" alt="MAIL" />
                <a href="mailto:miguelramirezsanchezr6@gmail.com">{t("header_email")}</a>
              </div>
              <div className="contact-item">
                <img className="iconos" src="/assets/phone.svg" alt="PHONE" />
                <a href="tel:+34654840946">{t("header_phone")}</a>
              </div>
            </div>
          </div>
          <div className="header-buttons">
            <a
              href="https://www.linkedin.com/in/miguel-ramirez-sanchez-079843243/"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="iconos" src="/assets/linkedin.svg" alt="LinkedIn" />
              {t("header_linkedin")}
            </a>
            <a
              href="https://github.com/albatross5"
              className="btn btn-outline github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="iconos" src="/assets/github.svg" alt="GitHub" />
              {t("header_github")}
            </a>

            <a
              href="https://drive.google.com/file/d/1lDjO4vO51z-dHUwobBbWXldXNRojkNEh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <img className="iconos" src="/assets/cv.svg" alt="CV" />
              {t("header_download_cv")}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
