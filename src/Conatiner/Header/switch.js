import { Link } from "react-router-dom";
function dropdown(a) {
  switch (a) {
    case "computer": return (
      <>
      <div className="dropdown-top">
        <p className="com-text">Компьютеры </p>
        <Link>
            (  Посмотреть всю категорию компютеры
        </Link>
      </div>
      <div className="dropdown-div">
        <Link to="./computer" className="dropdown-link special">Настольные</Link>
        <Link to="./computer" className="dropdown-link special">Компьютеры</Link>
        <Link to="./computer" className="dropdown-link special">Планшетные </Link>
        <Link to="./computer" className="dropdown-link special">Компьютеры</Link>
      </div>
      <div className="dropdown-div">
        <Link to="./computer" className="dropdown-link special"> Серверы</Link>
        <Link to="./computer" className="dropdown-link special">Аксессуары </Link>
        <Link to="./computer" className="dropdown-link special">Комплектующие </Link>
        <Link to="./computer" className="dropdown-link special">Периферийные устройства </Link>

      </div>
      <div className="dropdown-div">
        <Link to="./computer" className="dropdown-link special">  Мониторы </Link>
        <Link to="./computer" className="dropdown-link special">Внешние накопители </Link>
        <Link to="./computer" className="dropdown-link special">Расходные материалы</Link>
        <Link to="./computer" className="dropdown-link special">Другое</Link>
      </div>
      </>)

    default: return (
      <>
        <div className="dropdown-div">
          <Link  className="dropdown-link">Телефоны</Link>
          <Link  className="dropdown-link">Компьютеры</Link>
          <Link  className="dropdown-link">Фото / видео</Link>
          <Link  className="dropdown-link">Тв / видеотехника</Link>
          <Link  className="dropdown-link">Аудиотехника</Link>
        </div>
        <div className="dropdown-div">
          <Link  className="dropdown-link">Игры и игровые приставки</Link>
          <Link  className="dropdown-link">Техника для дома</Link>
          <Link  className="dropdown-link">Техника для кухни</Link>
          <Link  className="dropdown-link">Климатическое оборудование</Link>
          <Link  className="dropdown-link">Индивидуальный уход</Link>
        </div>
        <div className="dropdown-div">
          <Link  className="dropdown-link">Аксессуары и комплектующие</Link>
          <Link  className="dropdown-link">Прочая электроника</Link>
          <Link  className="dropdown-link">Телефоны</Link>
          <Link  className="dropdown-link">Компьютеры</Link>
          <Link  className="dropdown-link">Фото / видео</Link>
        </div>
        <div className="dropdown-div">
          <Link  className="dropdown-link">Телефоны</Link>
          <Link  className="dropdown-link">Компьютеры</Link>
          <Link  className="dropdown-link">Фото / видео</Link>
          <Link  className="dropdown-link">Тв / видеотехника</Link>
          <Link  className="dropdown-link">Аудиотехника</Link>
        </div>
      </>
    )

   
  }
}
export default dropdown;



