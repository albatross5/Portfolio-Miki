import "./Education.scss";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Education = ({education}) => {
    const { t } = useTranslation();
    return (
        
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">
                    <div class="icon-container icon-gradient-indigo">
                        <img class="iconos-badge" src="/assets/school.svg" alt="" />
                    </div>
                    {t("education_title")}
                </h2>
            </div>
            {education.map((edu, index) => (
                <div class="education-item" key={index}>
                    <h3 class="education-title">{edu.title}</h3>
                    <p class="education-school">{edu.center}</p>
                </div>
            ))}
            
        </div>
    );
};

Education.propTypes = {
    education: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            center: PropTypes.string
        })
    )
    
};


export default Education;


