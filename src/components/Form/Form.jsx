import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./Form.scss"; // Aquí irán solo los estilos específicos del formulario

const Form = () => {
  const { t } = useTranslation();
  const form = useRef();
  const buttonRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    buttonRef.current.value = "Enviando...";

    emailjs
      .sendForm("default_service", "template_keezzr5", form.current, "VImgOgXp5YcnrMwEQ")
      .then(
        () => {
          buttonRef.current.value = "Send Email";
          alert("¡Mensaje enviado!");
        },
        (err) => {
          buttonRef.current.value = "Send Email";
          alert("Error: " + JSON.stringify(err));
        }
      );
  };

  return (
    <section className="section">
      <div className="card skill-card">
        <h2 className="contact-title">{t("contact")}</h2>
        <p className="contact-subtitle">{t("contact_subtitle")}</p>
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="field">
            <label className="field-label" htmlFor="email">{t("contact_mail")}</label>
            <input className="field-input" type="text" name="email" id="email" placeholder={t("contact_mail_placeholder")} required />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="name">{t("contact_name")}</label>
            <input className="field-input" type="text" name="name" id="name" placeholder={t("contact_name_placeholder")} required />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="subject">{t("contact_subject")}</label>
            <input className="field-input" type="text" name="subject" id="subject" placeholder={t("contact_subject_placeholder")} required />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="enterprise">{t("contact_enterprise")}</label>
            <input className="field-input" type="text" name="enterprise" id="enterprise" placeholder={t("contact_enterprise_placeholder")} />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="message">{t("contact_message")}</label>
            <textarea className="field-input" name="message" id="message" placeholder={t("contact_message_placeholder")} rows="5" required />
          </div>
          <input type="submit" id="button" value={t("contact_send")} ref={buttonRef} />
        </form>
      </div>
    </section>
  );
};

export default Form;
