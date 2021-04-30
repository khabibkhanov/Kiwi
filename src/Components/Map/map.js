import { Link, useHistory } from "react-router-dom";
import empty from "../../Assets/img/empty.png";
import map from "../../Assets/img/map.jpg";
import "./main.css";
const  Map = () => {
  const history = useHistory()
  return (
    <>
      <div className="map ">
        <p className="map-text">9000 знаков осталос</p>
        <div className="map-top">
          <img src={empty} alt="img" />
          <img src={empty} alt="img" />
          <img src={empty} alt="img" />
          <img src={empty} alt="img" />
          <img src={empty} alt="img" />
          <img src={empty} alt="img" />
          <img src={empty} alt="img" />
          <img src={empty} alt="img" />
          <img src={empty} alt="img" />
          <img src={empty} alt="img" />
        </div>
        <div className="map-location">
          <h3 className="map-title">Местоположение объекта</h3>
        </div>
        <div className="map-select">
          <div>
            <label htmlFor="map-select1">Регион</label>
            <select name="select" id="map-select1" className="map-select">
              <option value="region1">Ташкент</option>
              <option value="region2">Fergana</option>
            </select>
          </div>
         <div>
            <label htmlFor="map-select2">Город / Район</label>
            <select name="select" id="map-select2" className="map-select">
              <option value="city">Мирза Улугбекский район</option>
              <option value="city">По всей Узбекистану</option>
            </select>
         </div>
        </div>
        <div className="map-blok">
          <img src={map} alt="map" />
        </div>
        <form className="map-form" onSubmit={() =>
          history.push("/")
        }>
          <label htmlFor="map-input">Телефонный номер</label>
          <input id="map-input" className="update-input" type="number" placeholder="+99894 888 74452" />
          <label htmlFor="map-input1">Email-адрес</label>
          <input id="map-input1" className="update-input" type="number" placeholder="+9989 888 74 452" required />
          <label htmlFor="map-input2">Контактный лицо</label>
          <input id="map-input2" className="update-input" type="number" placeholder="Зухриддин"  required/>
          <div className="btn__wrapper">
            <button className="btn-green">Добавить обьявления бесплатно</button>
            <Link className="href" to="/">Предпросмотр</Link>
          </div>
        </form>
      </div>
    </>
  )
}
export default Map;