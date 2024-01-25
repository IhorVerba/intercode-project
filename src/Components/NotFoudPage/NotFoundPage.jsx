import { useEffect } from "react";
import "./NotFoundPage.scss";
import { useTranslation } from "react-i18next";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="NotFoundPage">
      <h1>404</h1>
      <h2>{t("notFoundTitle")}</h2>
      <p>{t("notFoundText")}</p>
    </div>
  );
};
