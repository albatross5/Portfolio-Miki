import "./EduLeng.scss";
import PropTypes from "prop-types";

const EduLeng = ({ icon, title, EduLeng }) => {
    return (
        <div className="card skill-card black">
            <div className="card-header">
                <img className="iconos-badge" src={icon} alt={title} />
                <h2 className="card-title">{title}</h2>
            </div>
            <div className="skills-container-edueng">
                {EduLeng.map((eduleng, index) => (
                    <div className="skill-box skill-box-black" key={index}>
                        <h3 className="">{eduleng.course}</h3>
                        <p>{eduleng.center}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

EduLeng.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    EduLeng: PropTypes.arrayOf(
        PropTypes.shape({
            course: PropTypes.string,
            center: PropTypes.string,
        })
    ).isRequired,
};

export default EduLeng;
