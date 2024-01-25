import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      newsTitle: "Latest from the world of Volkswagen in Ukraine",
      toggleLanguage: "Toggle Language",
      toggleLanguageUK: "УКР",
      toggleLanguageEN: "ENG",
      menu: "Menu",
      cardButtonText_1: "Take a closer look",
      cardButtonText_2: "Configure",
      articleLink: "Find out more",
      article_1_eyebrow: "Comprehensive update of Volkswagen's flagship",
      article_1_title:
        "celebrates its premiere with updated design and technology",
      article_2_eyebrow: "The new generation of the bestselling SUV",
      article_2_title: `World premiere of the new`,
      article_3_title:
        "Porsche Ukraine and Volkswagen donated 2 Volkswagen T-Cross cars and fuel to the blog organization SOS Children's Villages of Ukraine",
      article_4_title: "Statement of Porsche Ukraine LLC on the war in Ukraine",
      footerVolkswagen: "Volkswagen",
      footerSpecialOffers: "Special Offers",
      footerNews: "News",
      footerCarInventory: "Car Inventory in Ukraine",
      footerService: "Service",
      footerDealerSearch: "Dealer Search",
      footerFeedback: "Feedback and Suggestions",
      footerNewsletter: "Subscribe to Newsletter",
      footerSupport: "Support",
      footerVWUkraine: "Volkswagen in Ukraine",
      footerPrivacyPolicy: "Privacy Policy",
      footerReportViolations: "Report Violations",
      home: "Home",
      modelRange: "Model Range",
      news: "News",
      servicesAndAccessories: "Services and Accessories",
      close: "Close",
      configuratorColor: "Choose your exterior color",
      configuratorWheels: "Choose your wheels",
      configuratorPrice: "Total price:",
      notFoundTitle: "Page Not Found",
      notFoundText:
        "Apologies, the page you are looking for no longer exists. Perhaps you can return back to the site's homepage and see if you can find what you are looking for.",
    },
  },
  uk: {
    translation: {
      newsTitle: "Актуальне зі світу Volkswagen в Україні",
      toggleLanguage: "Змінити мову",
      toggleLanguageUK: "УКР",
      toggleLanguageEN: "ENG",
      menu: "Меню",
      cardButtonText_1: "Огляд моделі",
      cardButtonText_2: "Сконфігурувати",
      articleLink: "Дізнатися більше",
      article_1_eyebrow: "Всеосяжне оновлення флагману Volkswagen",
      article_1_title:
        "відзначає прем’єру із оновленим дизайном та технологіями",
      article_2_eyebrow: "Нове покоління SUV бестселлера",
      article_2_title: `Світова прем\'єра нового`,
      article_3_title:
        "Порше Україна та бренд Volkswagen передали 2 автомобілі Volkswagen T-Cross та пальне блогодійній організації СОС Дитячі Містечка України",
      article_4_title: 'Заява ТОВ "Порше Україна" щодо війни в Україні',
      footerVolkswagen: "Volkswagen",
      footerSpecialOffers: "Спеціальні пропозиції",
      footerNews: "Новини",
      footerCarInventory: "Склад авто в Україні",
      footerService: "Сервіс",
      footerDealerSearch: "Пошук дилера",
      footerFeedback: "Відгуки та пропозиції",
      footerNewsletter: "Підписка на новини",
      footerSupport: "Підтримка",
      footerVWUkraine: "Volkswagen в Україні",
      footerPrivacyPolicy: "Конфіденційність персональних данних",
      footerReportViolations: "Система повідомлення порушень",
      home: "Головна",
      modelRange: "Модельний ряд",
      news: "Новини",
      servicesAndAccessories: "Сервіси та ексесуари",
      close: "Закрити",
      configuratorColor: "Обрати колір",
      configuratorWheels: "Обрати колеса",
      configuratorPrice: "Загальна ціна:",
      notFoundTitle: "Сторінка не знайдена",
      notFoundText:
        "Перепрошуємо, сторінка, яку ви шукаєте, більше не існує. Можливо, Ви спробуєте перейти на головну сторінку сайту і спробуєте знайти те, що Ви шукаєте.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uk",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
