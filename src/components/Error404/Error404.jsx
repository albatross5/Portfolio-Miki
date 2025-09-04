import "./Error404.scss"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

const Error404 = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate("/")
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className="main-container">
      <main className="error-content">
        <div className="container">
          <div className="error-card">
            {/* Número 404 grande */}
            <div className="error-number">
              <span className="four">4</span>
              <span className="zero">0</span>
              <span className="four">4</span>
            </div>

            {/* Mensaje principal */}
            <div className="error-message">
              <h1 className="error-title">{t("error_404_title") || "Página no encontrada"}</h1>
              <p className="error-description">
                {t("error_404_description") || "Lo sentimos, la página que estás buscando no existe o ha sido movida."}
              </p>
            </div>

            {/* Ilustración con iconos */}
            <div className="error-illustration">
              <div className="floating-icons">
                <div className="icon-item" style={{ animationDelay: "0s" }}>
                  <img src="/assets/code.svg" alt="Code" className="floating-icon" />
                </div>
                <div className="icon-item" style={{ animationDelay: "1s" }}>
                  <img src="/assets/tool.svg" alt="Tool" className="floating-icon" />
                </div>
                <div className="icon-item" style={{ animationDelay: "2s" }}>
                  <img src="/assets/database.svg" alt="Database" className="floating-icon" />
                </div>
                <div className="icon-item" style={{ animationDelay: "0.5s" }}>
                  <img src="/assets/github.svg" alt="GitHub" className="floating-icon" />
                </div>
                <div className="icon-item" style={{ animationDelay: "1.5s" }}>
                  <img src="/assets/linkedin.svg" alt="LinkedIn" className="floating-icon" />
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="error-actions">
              <button onClick={handleGoHome} className="btn btn-primary">
                <img className="iconos" src="/assets/pin.svg" alt="Home" />
                {t("error_404_go_home") || "Ir al Inicio"}
              </button>
              <button onClick={handleGoBack} className="btn btn-outline">
                <img className="iconos" src="/assets/phone.svg" alt="Back" />
                {t("error_404_go_back") || "Volver Atrás"}
              </button>
            </div>

            {/* Sugerencias */}
            <div className="error-suggestions">
              <h3 className="suggestions-title">{t("error_404_suggestions_title") || "¿Qué puedes hacer?"}</h3>
              <ul className="suggestions-list">
                <li>
                  <img src="/assets/mail.svg" alt="Check" className="check-icon" />
                  {t("error_404_suggestion_1") || "Verifica que la URL esté escrita correctamente"}
                </li>
                <li>
                  <img src="/assets/mail.svg" alt="Check" className="check-icon" />
                  {t("error_404_suggestion_2") || "Regresa a la página principal"}
                </li>
                <li>
                  <img src="/assets/mail.svg" alt="Check" className="check-icon" />
                  {t("error_404_suggestion_3") || "Contacta conmigo si crees que es un error"}
                </li>
              </ul>
            </div>

            {/* Información de contacto rápido */}
            <div className="quick-contact">
              <p className="contact-text">{t("error_404_contact_text") || "¿Necesitas ayuda?"}</p>
              <div className="contact-links">
                <a href="mailto:miguelramirezsanchezr6@gmail.com" className="contact-link">
                  <img src="/assets/mail.svg" alt="Email" className="contact-icon" />
                  {t("header_email") || "Email"}
                </a>
                <a
                  href="https://www.linkedin.com/in/miguel-ramirez-sanchez-079843243/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <img src="/assets/linkedin.svg" alt="LinkedIn" className="contact-icon" />
                  {t("header_linkedin") || "LinkedIn"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Error404;
