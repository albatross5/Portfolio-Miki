import "./infoCert.scss";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const infoCert = ({ infocert }) => {
    const { t } = useTranslation();

    return (
        <div className="card">
            <div className="card-header">
                <h2 className="card-title">
                    <img
                        class="iconos-badge"
                        src="/assets/info.svg"
                        alt="Info"
                    />
                    {t("certification_title")}
                </h2>
            </div>
            <div className="projects-grid">
                {infocert.map((item, index) => (
                    <div className="skill-box-m skill-box-black-m" key={index}>
                        {/* <object
                            className="pdfObject"
                            type="application/pdf"
                            data="https://cuinajusta.com/wp-content/uploads/2022/03/V-Gamma-CAST-febrer-2022_ok.pdf"
                            title="PDF"
                            width="100%"
                            height="400px"
                        > 
                        </object> */}
                        <img className="cert-icon" src={item.image} alt={item.text} />
                        <a
                            className="skill-box-title"
                            href={item.pdf}
                            target="_blank"
                        >
                            {item.text}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

infoCert.propTypes = {
    infocert: PropTypes.arrayOf(
        PropTypes.shape({
            pdf: PropTypes.string.isRequired,
            text: PropTypes.string,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default infoCert;
