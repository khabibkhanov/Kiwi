import group1 from "../../Assets/img/Group1.svg";
import group2 from "../../Assets/img/Group2.svg";
import group3 from "../../Assets/img/Group3.svg";
import group4 from "../../Assets/img/Group4.svg";
import group5 from "../../Assets/img/Group5.svg";
import group6 from "../../Assets/img/Group6.svg";
import group7 from "../../Assets/img/Group7.svg";
import group8 from "../../Assets/img/Group8.svg";
import arrow from "../../Assets/img/arrow.svg";
import Map from "../../Components/Map/map";
import HeaderBtn from "../../Components/HeaderBtn/HeaderBtn";
import "./main.css";
import { useState, useEffect } from "react";
const Update = () => {
  const [index1, setIndex1] = useState(0)
  function add() {
    setIndex1(index1 + 1)
    if (index1 === 5) {
      setIndex1(0)
    }

  }

  function minus() {
    setIndex1(index1 - 1)
    if (index1 < 0) {
      setIndex1(5)
    }
  }
  useEffect(() => {
    document.querySelector(".footer").style.display = "none"
  },[])

  useEffect(() => {
    document.documentElement.style.setProperty("--index", index1)
    console.log(index1);
  }, [index1])

  return (
   <> <div className="update">
      <div className="container ">
        <div className="update-inner">
          <h3 className="update-title" onClick={(e) => {
            e.target.classList.add("color")
            document.querySelector(".update-dropdown").classList.add("open")
            document.querySelector(".update-dropdown-wrapper").classList.remove("hide")
          }}>Добавить обьявления бесплатно</h3>
          <p className="update-text">Для добавления вашего обьявлении вы должны выбрать категорию</p>
           <div className="update-dropdown-wrapper hide">
            <div className="update-dropdown" onClick={(e) => {
              if (e.target.matches(".update-dropdown-text")) {
                e.target.classList.add("color")
                document.querySelector(".building-dropdown").classList.add("open")
              }
            }}>
              <h3>Рубрика</h3>
              <p className="update-dropdown-text">Детский мир<span></span></p>
              <p className="update-dropdown-text building-text">Недвижимость<span></span>
                <div className="building-dropdown" onClick={(e) => {
                  if (e.target.matches(".home-text")) {
                    e.target.classList.add("color")
                    document.querySelector(".update-dropdown").classList.add("adapt")
                    document.querySelector(".house-dropdown").classList.add("open")
                  }
                }}>
                  <h4>Недвижимость</h4>
                  <p className="home-text">Квартиры<span></span></p>
                  <p className="house-text home-text " >Дома
                  <div className="house-dropdown" onClick={(e) => {
                      if (e.target.matches(".flat-text")) {
                        document.querySelector(".update").classList.add("lower")
                        document.querySelector(".update-dropdown").classList.remove("open")
                        document.querySelector(".update-dropdown-wrapper").classList.add("hide")
                        document.querySelector(".update-blok").classList.remove("visually-hidden")
                      }
                    }}>
                      <h4>Дома</h4>
                      <p className="flat-text">Аренда долгосрочная<span></span></p>
                      <p className="flat-text" >Аренда посуточно<span></span></p>
                      <p className="flat-text">Продажа<span></span></p>
                      <p className="flat-text">Обмен<span></span></p>
                    </div>
                  </p>
                  <p className="home-text">Земля<span></span></p>
                  <p className="home-text">Гаражи / стоянки<span></span></p>
                  <p className="home-text">Коммерческие помещения<span></span></p>
                </div>
              </p>
              <p className="update-dropdown-text">Транспорт<span></span></p>
              <p className="update-dropdown-text">Работа<span></span></p>
              <p className="update-dropdown-text">Животные<span></span></p>
              <p className="update-dropdown-text">Дом и сад<span></span></p>
              <p className="update-dropdown-text">Электроника<span></span></p>
              <p className="update-dropdown-text">Бизнес и услуги<span></span></p>
              <p className="update-dropdown-text">Мода и стиль<span></span></p>
              <p className="update-dropdown-text">Хобби, отдых и спорт<span></span></p>
            </div>
           </div>
          <div className="slider-wrapper container">
            <button className="prev" onClick={add}><img src={arrow} alt="img" /></button>
            <button className="next" onClick={minus}><img src={arrow} alt="img" /></button>
            <div className="header-slider" >
              <HeaderBtn img={group1} />
              <HeaderBtn img={group2} />
              <HeaderBtn img={group3} />
              <HeaderBtn img={group4} />
              <HeaderBtn img={group5} />
              <HeaderBtn img={group6} />
              <HeaderBtn img={group7} />
              <HeaderBtn img={group8} />
              <HeaderBtn img={group1} />
              <HeaderBtn img={group4} />
              <HeaderBtn img={group5} />
              <HeaderBtn img={group6} />
              <HeaderBtn img={group7} />
              <HeaderBtn img={group2} />
              <HeaderBtn img={group3} />
            </div>

          </div>
        </div>

        {/* end of update-inner */}

        {/* // end of update - blok */}
      </div>
      {/* // end of conatiner - blok */}
    </div>

      <div className="update-blok visually-hidden">
        <div className="update-blok-top">
          <p>Вы выбрали:</p>
          <p>  Недвижимость   »</p>
          <p>Дома   » </p>
          <p>Аренда долгосрочная</p>
          <div className="confirm">Изменить</div>
        </div>
        <div className="update-blok-body">
          <div className="cost-form">
            <div>
              <label htmlFor="cost">Цена</label>
              <input id="cost" className="const-input update-input " type="text" placeholder="400 000" />
            </div>
            <select className="currency-select" name="currency" id="currency">
              <option value="som">Сум</option>
              <option value="usd">Euro</option>
              <option value="euro">Usd</option>
            </select>
            <label className="contract-label">
              <input className="checkbox-input" type="checkbox" />
              <span className="checkbox-span"></span>
              <span>Договорная</span>
            </label>
          </div>
          <div className="flat-form">
            <label htmlFor="flat">Количество комнат*</label>
            <input className="flat-input update-input" placeholder="4" id="flat" type="text" />
            <input className="flat-input update-input" placeholder="900" type="text" />
            <input className="flat-input update-input" placeholder="90" type="text" />
          </div>

          {/* start location-form */}

          <div className="location-blok">
            <label >Расположение*</label>

            {/* <!-- start of className location-blok-div--> */}

            <div className="location-blok-div">
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span>В городе</span>
              </label>
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span> Вдоль трассы</span>
              </label>
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span> В дачном массиве</span>
              </label>
            </div>

            {/* <!-- End of className location-blok-div--> */}

            <div className="location-blok-div">
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span>В пригороде</span>
              </label>
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span> Возле водоема, реки </span>
              </label>
              <label className="contract-label big-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span> На закрытой территории</span>
              </label>
            </div>

            {/* <!-- End of className location-blok-div--> */}

            <div className="location-blok-div">
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span>В сельской местности</span>
              </label>
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span> В предгорьях</span>
              </label>
            </div>
          </div>
          {/* location-form */}

          <div className="floor-blok">
            <div className="floor-blok-inner">
              <label htmlFor="floor">Этажность дома*</label>
              <input className="floor-input update-input" id="floor" type="text" placeholder="4" />
            </div>
            <div className="floor-blok-inner">
              <label >Высота потолков</label>
              <input className="floor-input update-input" type="text" placeholder="2m" />
            </div>
            <div className="floor-blok-inner">
              <label >Площадь участка*</label>
              <input className="floor-input update-input" type="text" placeholder="342" />
            </div>
          </div>
          {/* floor-blok */}

          <div className="house-case">
            <label >Состояние дома*</label>

            {/* <!-- start of className house-case-blok-div--> */}

            <div className="house-case-div">
              <label className="contract-label" >
                <input  className="checkbox-input" type="checkbox"/>
                <span className="checkbox-span"></span>
                <span>Авторский проектод </span>
              </label>
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span> Требует ремонта</span>
              </label>
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span> Черновая отделка</span>
              </label>
            </div>

            {/* <!-- End of className house-case-blok-div--> */}

            <div className="house-case-div">
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span>Средний ремонт</span>
              </label>
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span> Предчистовая отделка </span>
              </label>
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span>Под снос</span>
              </label>
            </div>

            {/* <!-- End of className house-case-blok-div--> */}

            <div className="house-case-div">
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span>В сельской местности</span>
              </label>
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span> В предгорьях</span>
              </label>
            </div>
          </div>
          {/* end of house-case */}
          <div className="house-type">
            <div>
              <label htmlFor="type-select">Коттедж</label>
              <select name="type" id="type-select">
                <option value="cottage">Коттедж</option>
                <option value="high">High-building</option>
              </select>
            </div>
            <div>
              <label htmlFor="electric-select">Электричество</label>
              <select name="electric" id="electric-select">
                <option value="yes">Есть возможность подключения</option>
                <option value="no">Нет возможность подключения</option>
              </select>
            </div>
          </div>
          {/* END OF HOUSE-TYPE */}
          <div className="heat-blok">
            <label >Отопление*</label>

            {/* <!-- start of className heat-blok-div--> */}

            <div className="heat-blok-div">
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span> Центральное</span>
              </label>
              <label  className="contract-label">
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span> На жидком топлив</span>
              </label>
              <label  className="contract-label">
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span> Без отопления</span>
              </label>
            </div>

            {/* <!-- End of className heat-blok-div--> */}

            <div className="heat-blok-div">
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span>На газе</span>
              </label>
              <label className="contract-label" >
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span> Электрическое</span>
              </label>

            </div>

            {/* <!-- End of className heat-blok-div--> */}

            <div className="heat-blok-div">
              <label  className="contract-label">
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span>В сельской местности</span>
              </label>
              <label  className="contract-label">
                <input className="checkbox-input" type="checkbox" />
                <span className="checkbox-span"></span>
                <span> В предгорьях</span>
              </label>
            </div>
          </div>
          {/* heat-blok */}
          <p className="update-blok-body-text">Электричество</p>
          <h3 className="update-blok-body-text">Есть возможность подключения</h3>
          <Map/>
        </div>
        {/* END OF UPDATE-BLOK-BODY */}
      </div>
    </>
    // end of update
  )
}
export default Update;