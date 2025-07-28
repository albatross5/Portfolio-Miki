import "./Home.scss";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
// import BadgeCard from "../../components/BadgeCard/BadgeCard";

const Home = () => {
    const { t } = useTranslation();
    // const BadgeCards = [
    //     {
    //         title: t("programacion"),
    //     }
    // ];

    return (
        <div class="main-container">
            <Header></Header>

            <main class="main-content">
                <div class="container">
                    <section class="section">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">{t("sobre_mi")}</h2>
                            </div>
                            <p>
                                {t("sobre_mi_primero")}
                                <br />
                                {t("sobre_mi_segundo")}
                            </p>
                        </div>
                    </section>
                </div>

                <section class="section">
                    <div class="skills-grid">

                      {/* pegar codigo de https://v0.dev/chat/personal-web-for-informatico-qHvPWwheP8g / https://v0.dev/chat/personal-web-for-informatico-qHvPWwheP8g */}



                        {/* Aqui va el BadgeCard */}
                        {/* <div className="destinations-grid">
                            {BadgeCards.map((i, index) => (
                                <BadgeCard
                                    key={"BadgeCards-" + index}
                                    title={i.title}
                                />
                            ))}
                        </div> */}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
