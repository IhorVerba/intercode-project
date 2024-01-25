/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Footer.scss";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer class="Footer">
      <div class="container">
        <div class="Footer__content">
          <div class="Footer__section Footer__section--navlist">
            <nav>
              <ul class="Footer__navlist">
                <li class="Footer__navlist-item">
                  <p class="Footer__title">
                    {t("footerVolkswagen")}
                  </p>
                </li>

                <li class="Footer__navlist-item">
                  <Link to="not-found" class="Footer__link">
                    {t("footerSpecialOffers")}
                  </Link>
                </li>

                <li class="Footer__navlist-item">
                  <Link to="not-found" class="Footer__link">
                    {t("footerNews")}
                  </Link>
                </li>

                <li class="Footer__navlist-item">
                  <Link to="not-found" class="Footer__link">
                    {t("footerSpecialOffers")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="Footer__section Footer__section--navlist">
            <nav>
              <ul class="Footer__navlist">
                <li class="Footer__navlist-item">
                  <p class="Footer__title">{t("footerService")}</p>
                </li>

                <li class="Footer__navlist-item">
                  <Link to="not-found" class="Footer__link">
                    {t("footerDealerSearch")}
                  </Link>
                </li>

                <li class="Footer__navlist-item">
                  <Link to="not-found" class="Footer__link">
                    {t("footerFeedback")}
                  </Link>
                </li>

                <li class="Footer__navlist-item">
                  <Link to="not-found" class="Footer__link">
                    {t("footerNewsletter")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="Footer__section Footer__section--navlist">
            <nav>
              <ul class="Footer__navlist">
                <li class="Footer__navlist-item">
                  <p class="Footer__title">
                    {t("footerSupport")}
                  </p>
                </li>

                <li class="Footer__navlist-item">
                  <Link to="not-found" class="Footer__link">
                    {t("footerVWUkraine")}
                  </Link>
                </li>

                <li class="Footer__navlist-item">
                  <Link to="not-found" class="Footer__link">
                    {t("footerPrivacyPolicy")}
                  </Link>
                </li>

                <li class="Footer__navlist-item">
                  <Link to="not-found" class="Footer__link">
                    {t("footerReportViolations")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};