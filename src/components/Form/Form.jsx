import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.scss"; // Aquí irán solo los estilos específicos del formulario

const Form = () => {
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
        <h2 className="contact-title">Contacto</h2>
        <p className="contact-subtitle">¿Tienes alguna duda o propuesta? ¡Escríbeme!</p>
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="field">
            <label className="field-label" htmlFor="email">Email</label>
            <input className="field-input" type="text" name="email" id="email" placeholder="Introduce tu correo electrónico" required />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="name">Nombre Completo</label>
            <input className="field-input" type="text" name="name" id="name" placeholder="Introduce tu nombre completo" required />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="subject">Asunto</label>
            <input className="field-input" type="text" name="subject" id="subject" placeholder="¿Sobre qué quieres hablar?" required />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="enterprise">Empresa</label>
            <input className="field-input" type="text" name="enterprise" id="enterprise" placeholder="Nombre de tu empresa (opcional)" />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="message">Mensaje</label>
            <textarea className="field-input" name="message" id="message" placeholder="Escribe tu mensaje aquí..." rows="5" required />
          </div>
          <input type="submit" id="button" value="Send Email" ref={buttonRef} />
        </form>
      </div>
    </section>
  );
};

export default Form;
