import "./ExperienciaProfesional.scss";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const ExperienciaProfesional = ({ experiencias }) => {
    const { t } = useTranslation();

    return (
        <div className="card">
            <div className="card-header">
                <h2 className="card-title">
                    <img
                        className="iconos-badge"
                        src="/assets/settings.svg"
                        alt=""
                    />
                    {t("experience")}
                </h2>
            </div>

            {experiencias.map((exp, index) => (
                <div className="experience-item" key={index}>
                    <div className="experience-header">
                        <h3 className="experience-title">{exp.title}</h3>
                        <span className="experience-period">{exp.period}</span>
                    </div>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-description">{exp.description}</p>
                </div>
            ))}
        </div>
    );
};

ExperienciaProfesional.propTypes = {
    experiencias: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            period: PropTypes.string,
            company: PropTypes.string,
            description: PropTypes.string,
        })
    ),
};

export default ExperienciaProfesional;
