import "./BadgeCard.scss";

const BadgeCard = ({ icon, title, skills }) => {
    return (
        <div class="card skill-card black">
            <div class="card-header">
                <img class="iconos-badge" src={icon} alt={title} />
                <h2 class="card-title">{title}</h2>
            </div>
            <div class="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-box skill-box-black">
                        <img
                            class="iconos-badge"
                            src={skill.icon}
                            alt={skill.name}
                        />
                        <div className="skill-box-title">{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BadgeCard;
