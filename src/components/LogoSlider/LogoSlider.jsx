import "./LogoSlider.scss";

const LogoSlider = () => {
    // Nota: He corregido la ruta del primer logo para que sea consistente
    const logos = [
        { src: "/assets/logo_cj.ico", alt: "Super Power Up" },
        { src: "/assets/scc.svg", alt: "SCC" },
        { src: "/assets/highlands.jpg", alt: "Highlands School Barcelona" },

    ];

    return (
        <div className="card logo-slider-card">
            <div className="slider-track">
                {/* Duplicamos los logos para el scroll infinito */}
                {[...logos, ...logos].map((logo, index) => (
                    <div className="slide" key={index}>
                        <img src={logo.src} alt={logo.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoSlider;