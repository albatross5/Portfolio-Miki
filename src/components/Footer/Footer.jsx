import "./Footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div class="container">
            <p>
                {t("footer_copy")} {t("header_title")}. {t("footer_rights")}
            </p>
        </div>
    );
};

export default Footer;
