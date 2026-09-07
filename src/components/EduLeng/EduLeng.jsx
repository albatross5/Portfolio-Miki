import "./EduLeng.scss";
import PropTypes from "prop-types";

const EduLeng = ({ icon, title, EduLeng, type = "grid" }) => {
    return (
        <div className="card skill-card black">
            <div className="card-header">
                <img className="iconos-badge" src={icon} alt={title} />
                <h2 className="card-title">{title}</h2>
            </div>
            <div className={`skills-container-edueng ${type}`}>
                {EduLeng.map((eduleng, index) => (
                    <div className="skill-box-edueng skill-box-black-edueng" key={index}>
                        {/* Fondo de bandera con efecto superpuesto */}
                        {eduleng.flag && (
                            <>
                                <div
                                    className="skill-box-flag-bg"
                                    style={{ backgroundImage: `url(${eduleng.flag})` }}
                                />
                                <div className="skill-box-overlay" />
                            </>
                        )}
                        
                        <div className="skill-box-content">
                            <h3 className="skill-box-title-edueng">{eduleng.course}</h3>
                            <p className="skill-box-description-edueng">{eduleng.center}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

EduLeng.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.oneOf(["rows", "grid"]),
    EduLeng: PropTypes.arrayOf(
        PropTypes.shape({
            course: PropTypes.string,
            center: PropTypes.string,
            flag: PropTypes.string,
        })
    ).isRequired,
};

export default EduLeng;