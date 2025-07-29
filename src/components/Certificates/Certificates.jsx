import "./Certificates.scss";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Certificates = ({certificados}) => {
    const { t } = useTranslation();
    return (
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">
                    <div class="icon-container icon-gradient-yellow">
                        <img
                            class="iconos-badge"
                            src="/assets/certificate.svg"
                            alt=""
                        />
                    </div>
                    {t("certificate_title")}
                </h2>
            </div>
            {certificados.map((cert, index) => (
                <div class="cert-item" key={index}>
                    <div class="cert-info">
                        <h3>{cert.title}</h3>
                        <p>{cert.description}</p>
                    </div>
                    <span class="badge badge-yellow">
                        {cert.year}
                    </span>
                </div>
            ))}
            
        </div>
    );
};

Certificates.propTypes = {
    certificados: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            year: PropTypes.string
        })
    )
    
};


export default Certificates;
