import "./Certificates.scss";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Certificates = ({ certificados }) => {
    const { t } = useTranslation();

    return (
        <div className="card">
            <div className="card-header">
                <h2 className="card-title">
                    <div className="icon-container icon-gradient-yellow">
                        <img
                            className="iconos-badge"
                            src="/assets/certificate.svg"
                            alt=""
                        />
                    </div>
                    {t("certificate_title")}
                </h2>
            </div>
            {certificados.map((cert, index) => (
                <div className="cert-item" key={index}>
                    <div className="cert-info">
                        <h3>{cert.title}</h3>
                        <p>{cert.description}</p>
                    </div>
                    <span className="badge badge-yellow">{cert.year}</span>
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
            year: PropTypes.string,
        })
    ),
};

export default Certificates;
