import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.scss";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="card language-card">
      <div className="card-header">
        <h2 className="card-title">🌐 Selecciona idioma</h2>
      </div>
      <select
        className="language-select"
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="ro">Română</option>
        <option value="ca">Català</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
