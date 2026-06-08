import React, { useState } from "react";
import "./BadgeCard1.scss";

const BadgeCard1 = ({ categories }) => {
  // Estado para saber qué categoría está seleccionada (0 = Lenguajes, 1 = Herramientas...)
  const [activeTab, setActiveTab] = useState(0);

  // Obtenemos los datos de la categoría que el usuario está viendo
  const currentCategory = categories[activeTab] || categories[0];
  const skills = currentCategory?.skills || [];

  return (
    <div className="ecosystem-skills">
      
      {/* 1. SELECTOR DE CATEGORÍAS (Pestañas superiores) */}
      <div className="ecosystem-skills__tabs">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`ecosystem-skills__tab-btn ${activeTab === idx ? "is-active" : ""}`}
            onClick={() => setActiveTab(idx)}
          >
            <img src={cat.icon} alt="" className="ecosystem-skills__tab-icon" />
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* 2. EL ECOSISTEMA ESTILO MOVISTAR */}
      <div className="ecosystem-skills__viewport">
        
        {/* Ondas concéntricas de fondo animadas */}
        <div className="ecosystem-skills__waves">
          {[...Array(4)].map((_, i) => (
            <span key={i} className={`ecosystem-skills__wave ecosystem-skills__wave--${i + 1}`}></span>
          ))}
        </div>

        {/* CONTENEDOR CENTRAL Y ORBITAL */}
        <article className="ecosystem-skills__space">
          
          {/* Burbuja Central (Representa la categoría actual) */}
          <div className="ecosystem-skills__main-bubble">
            <div className="ecosystem-skills__main-icon-wrapper">
              <img src={currentCategory?.icon} alt={currentCategory?.title} />
            </div>
            <span className="ecosystem-skills__main-title">{currentCategory?.title}</span>
          </div>

          {/* Burbujas Auxiliares (Tus tecnologías/skills iteradas) */}
          {skills.map((skill, index) => {
            // CÁCULO MATEMÁTICO: Distribuye las burbujas en un círculo perfecto de 360 grados
            const totalSkills = skills.length;
            const angle = (index * 360) / totalSkills;
            const radius = 160; // Radio en píxeles desde el centro. Modifícalo si quieres alejarlas más.
            
            // Pasamos el ángulo como variable CSS para que SCSS calcule la posición en el espacio
            const bubbleStyle = {
              "--angle": `${angle}deg`,
              "--radius": `${radius}px`
            };

            return (
              <div 
                key={index} 
                className="ecosystem-skills__aux-bubble" 
                style={bubbleStyle}
              >
                <div className="ecosystem-skills__aux-wrapper">
                  <div className="ecosystem-skills__aux-icon-container">
                    <img src={skill.icon} alt={skill.name} className="ecosystem-skills__aux-icon" />
                  </div>
                  <div className="ecosystem-skills__aux-text-zone">
                    <span className="ecosystem-skills__aux-text">{skill.name}</span>
                  </div>
                </div>
              </div>
            );
          })}

        </article>
      </div>
    </div>
  );
};

export default BadgeCard1;