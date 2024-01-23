import "./News.scss";
import Article1Img from "../../assets/images/news-article1.jpg";
import Article2Img from "../../assets/images/news-article2.jpg";
import Article3Img from "../../assets/images/news-article3.jpg";
import Article4Img from "../../assets/images/news-article4.jpg";
import { Link } from "react-router-dom";

export const News = () => {
  return (
    <section className="section" id="news">
      <h2 className="section section__title">
        <span className="section section__title-text">
          Актуальне зі світу Volkswagen в Україні
        </span>
      </h2>

      <article className="article section__article">
        <div className="article__container">
          <img className="article__img" src={Article1Img} alt="article" />
          <div className="article__wrapper">
            <span className="article__eyebrow">
              Всеосяжне оновлення флагману Volkswagen
            </span>
            <h3 className="article__title">
              <span>
                <b>Новий Touareg</b> відзначає прем’єру із оновленим дизайном та
                технологіями
              </span>
            </h3>
            <Link to="not-found" className="article__link">
              <span>Дізнатися більше</span>
            </Link>
          </div>
        </div>
      </article>

      <article className="article section__article">
        <div className="article__container">
          <img className="article__img" src={Article2Img} alt="article" />
          <div className="article__wrapper">
            <span className="article__eyebrow">
              Нове покоління SUV бестселлера
            </span>
            <h3 className="article__title">
              <span>
                Світова прем'єра <b>нового Tiguan</b>
              </span>
            </h3>
            <Link to="not-found" className="article__link">
              <span>Дізнатися більше</span>
            </Link>
          </div>
        </div>
      </article>

      <article className="article section__article">
        <div className="article__container">
          <img className="article__img" src={Article3Img} alt="article" />
          <div className="article__wrapper">
            <h3 className="article__title">
              Порше Україна та бренд Volkswagen передали 2 автомобілі Volkswagen
              T-Cross та пальне блогодійній організації СОС Дитячі Містечка
              України
            </h3>
            <Link to="not-found" className="article__link">
              <span>Дізнатися більше</span>
            </Link>
          </div>
        </div>
      </article>

      <article className="article section__article">
        <div className="article__container">
          <img className="article__img" src={Article4Img} alt="article" />
          <div className="article__wrapper">
            <h3 className="article__title">
              Заява ТОВ "Порше Україна" щодо війни в Україні
            </h3>
            <Link to="not-found" className="article__link">
              <span>Дізнатися більше</span>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
