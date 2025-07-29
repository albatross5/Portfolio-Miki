import "./BadgeCard.scss";
import PropTypes from "prop-types";

const BadgeCard = ({ icon, title, skills }) => {
    //, array

    return (
        <div class="card skill-card black">
            <div class="card-header">
                <img class="iconos-badge" src={icon} alt={title} />
                <h2 class="card-title">{title}</h2>
            </div>
            <div class="skills-container">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-box skill-box-black">
                            <div className="skill-box-title">{skill}</div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

BadgeCard.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    // skill: PropTypes.array
    skills: PropTypes.arrayOf(PropTypes.string)
};

export default BadgeCard;
