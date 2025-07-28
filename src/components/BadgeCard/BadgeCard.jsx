import "./BadgeCard.scss";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const BadgeCard = ({ title }) => {
    const { t } = useTranslation();

    return (
        <div class="card skill-card green">
            <div class="card-header">
                <h2 class="card-title">
                    {title}
                </h2>
            </div>
            <div class="badges">
                <span class="badge badge-green">Python</span>
                <span class="badge badge-green">JavaScript</span>
                <span class="badge badge-green">TypeScript</span>
                <span class="badge badge-green">Java</span>
                <span class="badge badge-green">C++</span>
                <span class="badge badge-green">Bash</span>
                <span class="badge badge-green">PowerShell</span>
                <span class="badge badge-green">SQL</span>
            </div>
        </div>
    );
};

DestinationCard.propTypes = {
    title: PropTypes.string,
};

export default BadgeCard;
