import "./main.css";
import logo from "../../Assets/img/footerlogo.svg";
import apple from "../../Assets/img/appstore.svg";
import google from "../../Assets/img/googleplay.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner ">
       <div className="footer-top-wrapper">
          <div className="footer-top container">
            <Link to="./" className="logo-wrapper">
              <img className="logo-img" src={logo} alt="logo" />
              <p className="logo-text">Продай, найди, купивсе что ты пожелаешь </p>
            </Link>
            <p className="footer-top-text">Веб сайт бесплатных обьявлений | на базеимеется 234 944 999   шт обяления</p>
            <div className="market">
              <a href="https://www.kun.uz"> <img src={apple} alt="img"/></a>
              <a href="https://www.kun.uz"><img src={google} alt="img"/></a>
            </div>
          </div>
       </div>
        <div className="footer-middle-wrapper">
          <div className="footer-middle container">
            <div className="footer-middle-div">
              <h4 className="footer-title">Автомобили
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.121 0L0 1.121L3.68 4.801L0 8.48L1.121 9.602L5.922 4.801L1.121 0Z" fill="#F8E71C" />
                </svg>
              </h4>
              <Link to="./" className="footer-link">Легковые авто</Link>
              <Link to="./" className="footer-link"> Мото</Link>
              <Link to="./" className="footer-link"> Автобусы</Link>
              <Link to="./" className="footer-link"> Грузовые авто</Link>
              <Link to="./" className="footer-link">Сельхозтехника</Link>
              <Link to="./" className="footer-link"> Запчасти и Аксессуары</Link>
              <Link to="./" className="footer-link"> Прицепы и Спецтехника</Link>
              <Link to="./" className="footer-link"> Водный и Другой транспортa</Link>
              <h4 className="footer-title first">Дом и Сад
              <svg width="6" height="10" viewBox="0 0 6 10"  xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.121 0L0 1.121L3.68 4.801L0 8.48L1.121 9.602L5.922 4.801L1.121 0Z"  />
                </svg>
              </h4>
              <Link to="./" className="footer-link">Товары для интерьера</Link>
              <Link to="./" className="footer-link">Товары для сада</Link>
              <Link to="./" className="footer-link"> Растения</Link>
              <Link to="./" className="footer-link"> Продукты питания</Link>
              <Link to="./" className="footer-link">Посуда и Кухонная утварь</Link>
              <Link to="./" className="footer-link"> Хоз.инвентарь и Бытовая химия</Link>
              <Link to="./" className="footer-link"> Канцтовары и Расходные</Link>
              <Link to="./" className="footer-link">Прочие товары для дома</Link>
            </div>
            <div className="footer-middle-div">
              <h4 className="footer-title">Недвижимость <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.121 0L0 1.121L3.68 4.801L0 8.48L1.121 9.602L5.922 4.801L1.121 0Z" fill="#F8E71C" />
              </svg>
             </h4>
              <Link to="./" className="footer-link">Аренда квартир</Link>
              <Link to="./" className="footer-link">Аренда домов</Link>
              <Link to="./" className="footer-link">Аренда гаражей и Стоянок</Link>
              <Link to="./" className="footer-link">Продажа квартир</Link>
              <Link to="./" className="footer-link">Продажа домов</Link>
              <Link to="./" className="footer-link">Продажа земли</Link>
              <Link to="./" className="footer-link">Продажа гаражей/Стоянок</Link>
              <Link to="./" className="footer-link">Аренда помещений</Link>
              <Link to="./" className="footer-link">Продажа помещений</Link>
              <Link to="./" className="footer-link">Прочая недвижимость</Link>
              <Link to="./" className="footer-link">Обмен недвижимости</Link>
              <Link to="./" className="footer-link">Коммерческая недвижимость</Link>
              <h4 className="footer-title second">Товары стройки и ремонта <svg width="6" height="10" viewBox="0 0 6 10"  xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.121 0L0 1.121L3.68 4.801L0 8.48L1.121 9.602L5.922 4.801L1.121 0Z"  />
              </svg>
              </h4>
              <Link to="./" className="footer-link">Двери и окна</Link>
              <Link to="./" className="footer-link">Сантехника</Link>
              <Link to="./" className="footer-link">Стройматериалы</Link>
              <Link to="./" className="footer-link">Инструменты</Link>
            </div>
            <div className="footer-middle-div">
              <h4 className="footer-title four">Электроника <svg width="6" height="10" viewBox="0 0 6 10"  xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.121 0L0 1.121L3.68 4.801L0 8.48L1.121 9.602L5.922 4.801L1.121 0Z"  />
              </svg>
              </h4>
              <Link to="./" className="footer-link">Телефоны</Link>
              <Link to="./" className="footer-link"> Компьютеры</Link>
              <Link to="./" className="footer-link"> Ноутбуки, планшеты</Link>
              <Link to="./" className="footer-link"> Оргтехника и расходники</Link>
              <Link to="./" className="footer-link"> ТВ,Фото,Видео и Аудио</Link>
              <Link to="./" className="footer-link"> Игры и Приставки</Link>
              <Link to="./" className="footer-link">Техника для дома и Для себя</Link>
              <Link to="./" className="footer-link">Климатическое оборудование</Link>
              <Link to="./" className="footer-link"> Аксессуары и Комплектующие</Link>
              <Link to="./" className="footer-link">Техника для наблюдения</Link>
              <Link to="./" className="footer-link">Прочая электроника</Link>
              <h4 className="footer-title five">Хобби, Отдых и Спорт <svg width="6" height="10" viewBox="0 0 6 10"  xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.121 0L0 1.121L3.68 4.801L0 8.48L1.121 9.602L5.922 4.801L1.121 0Z"  />
              </svg>
              </h4>
              <Link to="./" className="footer-link">Антиквариат и Коллекции</Link>
              <Link to="./" className="footer-link">Музыкальные инструменты</Link>
              <Link to="./" className="footer-link">Велосипеды</Link>
              <Link to="./" className="footer-link">Товары для спорта и отдыха</Link>
              <Link to="./" className="footer-link">Книги/Журналы</Link>
              <Link to="./" className="footer-link">CD/DVD/Пластинки/Кассеты</Link>
              <Link to="./" className="footer-link">Билеты и путешествия</Link>
              <Link to="./" className="footer-link">Охота и рыбалка</Link>
            </div>
            <div className="footer-middle-div">
              <h4 className="footer-title third">Личные вещи <svg width="6" height="10" viewBox="0 0 6 10"  xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.121 0L0 1.121L3.68 4.801L0 8.48L1.121 9.602L5.922 4.801L1.121 0Z"  />
              </svg>
              </h4>
              <Link to="./" className="footer-link">Одежда, обувь, аксессуары</Link>
              <Link to="./" className="footer-link">Детская одежда и обувь</Link>
              <Link to="./" className="footer-link">Детские товары и Игрушки</Link>
              <Link to="./" className="footer-link">Школьникам</Link>
              <Link to="./" className="footer-link">Часы и украшения</Link>
              <Link to="./" className="footer-link">Товары для красоты и здоровья</Link>
              <Link to="./" className="footer-link">Разные вещи</Link>
              <h4 className="footer-title"> Бизнес и услуги <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.121 0L0 1.121L3.68 4.801L0 8.48L1.121 9.602L5.922 4.801L1.121 0Z" fill="#F8E71C" />
              </svg>
              </h4>
              <Link to="./" className="footer-link">Сырьё и материалы</Link>
              <Link to="./" className="footer-link">Оборудование и аренда</Link>
              <Link to="./" className="footer-link">Производство и обработка</Link>
              <Link to="./" className="footer-link">Продажа бизнеса и партнерство</Link>
              <Link to="./" className="footer-link">Финансовые услуги/Бухгалтерия</Link>
              <Link to="./" className="footer-link">Услуги для красоты и здоровья</Link>
              <Link to="./" className="footer-link">Услуги курьера и доставки</Link>
              <Link to="./" className="footer-link">Реклама, Полиграфия и Маркетинг</Link>
              <Link to="./" className="footer-link">Няни, Сиделки и Домработницы</Link>
              <Link to="./" className="footer-link">Обучение, курсы и репетиторы</Link>
              <Link to="./" className="footer-link">Фото, видео, искусство и дизайн</Link>
              <Link to="./" className="footer-link">Перевод и Набор текста</Link>
              <Link to="./" className="footer-link">Юридические услуги</Link>
              <Link to="./" className="footer-link">Прокат товаров</Link>
              <Link to="./" className="footer-link">Туризм и спорт</Link>
            </div>
            <p className="more more3">Покозать еще</p>
          </div>
          <div className="footer-bottom container">
            <Link to="./" className="footer-link active">Подать объявление </Link>
            <Link to="./" className="footer-link">Объявления  </Link>
            <Link to="./" className="footer-link">Магазины  </Link>
            <Link to="./" className="footer-link">Помощь </Link>
            <Link to="./" className="footer-link">Безопасность </Link>
            <Link to="./" className="footer-link">Реклама на сайте   </Link>
            <Link to="./" className="footer-link">О компании</Link>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Footer;

