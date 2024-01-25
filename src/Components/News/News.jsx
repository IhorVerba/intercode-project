import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./News.scss";
import Article1Img from "../../assets/images/news-article1.jpg";
import Article2Img from "../../assets/images/news-tiguan.jpg";
import Article3Img from "../../assets/images/news-article3.jpg";
import Article4Img from "../../assets/images/news-article4.jpg";

export const News = () => {
  const { t } = useTranslation();

  return (
    <section className="section" id="news">
      <h2 className="section__title">
        <span className="section__title-text">{t("newsTitle")}</span>
      </h2>

      <article className="article">
        <div className="article__container">
          <img className="article__img" src={Article1Img} alt="article" />
          <div className="article__wrapper">
            <span className="article__eyebrow">{t("article_1_eyebrow")}</span>
            <h3 className="article__title">
              <span>
                <b>Touareg</b> {t("article_1_title")}
              </span>
            </h3>
            <Link to="not-found" className="article__link">
              <span>{t("articleLink")}</span>
            </Link>
          </div>
        </div>
      </article>

      <article className="article">
        <div className="article__container">
          <img className="article__img" src={Article2Img} alt="article" />
          <div className="article__wrapper">
            <span className="article__eyebrow">{t("article_2_eyebrow")}</span>
            <h3 className="article__title">
              <span>
                {t("article_2_title")} <b>Tiguan</b>
              </span>
            </h3>
            <Link to="not-found" className="article__link">
              <span>{t("articleLink")}</span>
            </Link>
          </div>
        </div>
      </article>

      <article className="article">
        <div className="article__container">
          <img className="article__img" src={Article3Img} alt="article" />
          <div className="article__wrapper">
            <h3 className="article__title">{t("article_3_title")}</h3>
            <Link to="not-found" className="article__link">
              <span>{t("articleLink")}</span>
            </Link>
          </div>
        </div>
      </article>

      <article className="article">
        <div className="article__container">
          <img className="article__img" src={Article4Img} alt="article" />
          <div className="article__wrapper">
            <h3 className="article__title">{t("article_4_title")}</h3>
            <Link to="not-found" className="article__link">
              <span>{t("articleLink")}</span>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
