import Electronics from "../../Components/Electronics/Electronics";
import Mask from "../../Assets/img/bitm.jpg";
import Mask4 from "../../Assets/img/bitm2.jpg";
import Mask5 from "../../Assets/img/bitm3.jpg";
import Mask6 from "../../Assets/img/bitm4.jpg";
import Mask10 from "../../Assets/img/bitm5.jpg";
import potato from "../../Assets/img/bitm6.jpg";
import techno from "../../Assets/img/techno.jpg";
import three from "../../Assets/img/three.jpg";
import motor from "../../Assets/img/motor.jpg";
import office from "../../Assets/img/office.jpg";
import kokat from "../../Assets/img/kokat.jpg";
import car from "../../Assets/img/Car.jpg";
import search from "../../Assets/img/search.svg";
import uy from "../../Assets/img/uy.jpg";
import sport from "../../Assets/img/sport.jpg";
import uch from "../../Assets/img/uch.jpg";
import "./main.css";
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import Goods from '../../Conatiner/goods/goods';

const ElectronicsPage = () => {
  const input1 = useRef()
  const input2 = useRef()
  const [state, setState] = useState(true)
  const [value1, setValue1] = useState(false)
  const [value2, setValue2] = useState(false)
  const [state1,setState1] = useState(2)
  useEffect(() => {
    document.documentElement.style.setProperty("--main1", value1)
  }, [value1])
  useEffect(() => {
    document.documentElement.style.setProperty("--main2", value2)
  }, [value2])
  useEffect(() => {
    document.documentElement.style.setProperty("--margin1", state1)
  }, [state1])
  function slider() {
    setState1(state1-1)
    if (state1 === 0) {
      setState1(4)
    }
  }
  const arr = [
    <Electronics class1="card-color" img={Mask} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics class1="card-color" img={Mask4} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics class1="card-color" img={Mask5} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics class1="card-color" img={Mask6} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={Mask10} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={car} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={potato} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={three} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={motor} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={techno} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={office} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={kokat} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics class1="card-color" img={Mask} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={car} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={Mask4} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={Mask5} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics class1="card-color" img={Mask10} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={Mask6} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={potato} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={three} class1="card-color" title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics class1="card-color" img={motor} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={techno} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={office} class1="card-color" title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />,
    <Electronics img={kokat} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
      time="Вчера 22:55"
      price="39 000 000 сум"
    />
  ]
  const arr1 = arr.filter(e => e.props.class1 ? e : null)

  function filterArr() {
    switch (state) {
      case "all":
        return (
          arr.map((item) => (
            <>{item}</>
          ))
        )

      case "top":
        return (
          arr1.map(item => (
            <> {item}</>
          ))
        )

      case "simple":
        return (
          arr.filter(a => a.props.class1 ? "" : a).map(item => (
            <> {item}</>
        ))
        )

      default:
        return (
          arr.map((item) => (
            <>{item}</>
          ))
        )
     
    }

  }

  const [ productList, setProductList ] = useState({
    isFetched: false,
    data: {},
    error: null
  });

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products',)
    .then(function(response) {
        setProductList({
            isFetched: true,
            data: response.data,
            error: false 
        })
    })
    .catch(function(error) {
        setProductList({
            isFetched: true,
            data: [],
            error: error 
        })
    })
  }, [])

  return (

    <>
      <main className="container border">
        <div className="input-div ">
          <label className="search-label" >
            <img src={search} alt="img" />
            <input className="search-input1" type="search" />
            <p>Введите название обявления или<span> выберите из списка</span></p>
          </label>
        </div>
        <div className="hashteg">
          <p>Интерсное</p>
          <p>Топ</p>
          <p>Отличные предложение</p>
          <p>Супер цена</p>
          <p className="location">г.Ташкент</p>
          <p className="location">г.Термез</p>
          <p className="location">г.Самарканд</p>
        </div>
        <div className="filter-div">
          <p>Вы сейчас в рубрике</p>
          <div className="filter-div-left">
            <p className="exit-text">Электроника</p>
            <p className="exit-text">Мониторы</p>
          </div>
        </div>
        <div className="input-range-div">
          <div className="main-div">
            <p>Выберите цену от и до</p>
            <div>
              <input onChange={(e) => setValue1(e.target.value)} ref={input1} className="input-range one" type="range" />
              <input onChange={(e) => setValue2(e.target.value)} ref={input2} className="input-range two" type="range" />
            </div>
          </div>
          <p className="percent child1">{(value1 * 100000) + "сум" || "100 000 сум"}</p>
          <p className="percent child2">{(value2 * 100000) + "сум" || "100 000 сум"}</p>
        </div>
        <div className="select-blok">
          <select onChange={(e) => setState(e.target.value)} name="case" id="case">
            <option value="false" defaultValue>Состояние</option>
            <option value="top">Top</option>
            <option value="simple">Simple</option>
            <option value="all">All</option>
          </select>
          <select name="type" id="type">
            <option value="type" defaultValue>Тип объявщика</option>
            <option value="type" defaultValue>Тип объявщика</option>
          </select>
          <select name="location" id="location">
            <option value="tashkent">Ташкент  Мирза улугбекский район</option>
            <option value="">Ташкент Юнусабадский  район </option>
          </select>
          <button className="accept-btn">Применить</button>

        </div>
      </main>
      <div className="card-wrapper computer container">
      {
            productList.isFetched ? (
                    <div>
                    <div className="card-wrapper">

                        <div className="card-container row">
                            { 
                                
                                productList.data.slice(0, 16).map((props, index) => (
                                    <Goods
                                        title = { props.title }
                                        id = { props.id }
                                        image = { props.image }
                                        price = { props.price }
                                        category = { props.category }
                                        key = { index }
                                    />
                                ))
                            }
                        </div>
                    </div>

                    <div className="image-carousel-wrapper">
                        
                    </div>
                </div>
            ) : (
                <h1>Loading...</h1>
            )
        }
        <button className="more more4">Покозать еще (20)</button>
      </div>
      <div className="buy-blok container">
        <div id="search">СЕЙЧАС ИЩУТ</div>
        <article>
          <main><p>купить Мясная продукция</p><span> 2 часа назад</span></main>
          <main><p>купить Мясная продукция</p><span> 2 часа назад</span></main>
          <main><p>купить Мясная продукция</p><span> 2 часа назад</span></main>
          <main><p>купить Мясная продукция</p><span> 2 часа назад</span></main>
        </article>
      </div>
        <div className="main-wrapper">
        <div className="popular container">
          <h3 className="popular-title">САМОЕ ИНТЕРЕСНОЕ</h3>
          <Electronics img={sport} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
            time="Вчера 22:55"
            price="39 000 000 сум"
          />
          <Electronics img={uy} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
            time="Вчера 22:55"
            price="39 000 000 сум"
          />
          <Electronics img={uch} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
            time="Вчера 22:55"
            price="39 000 000 сум"
          />
          <Electronics img={kokat} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
            time="Вчера 22:55"
            price="39 000 000 сум"
          />
          <Electronics img={potato} title="iPhone 6 / 6 + 16 / 64 / 128 Гб(Магазин 1 год гарантии"
            time="Вчера 22:55"
            price="39 000 000 сум"
          />

        </div>
        <button className="only-next" onClick={slider}>
          <svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7114 1.64803C23.3851 1.33603 23.3851 0.832028 23.7114 0.520028C24.0345 0.207028 24.5548 0.207028 24.8769 0.520028L33.1205 8.50003C33.2733 8.65203 33.3621 8.85503 33.3621 9.06603C33.3621 9.07003 33.358 9.07803 33.358 9.08203C33.358 9.09003 33.3621 9.09403 33.3621 9.10203C33.3621 9.36703 33.2207 9.59003 33.0111 9.73403L24.8449 17.648C24.5218 17.961 23.9984 17.961 23.6752 17.648C23.3531 17.336 23.3531 16.832 23.6752 16.52L30.5065 9.89803L1.15263 9.89803C0.696311 9.89803 0.325684 9.54303 0.325684 9.10203C0.325684 8.65603 0.696311 8.30103 1.15263 8.30103L30.5757 8.30103L23.7114 1.64803Z" fill="white" />
          </svg>

        </button>
        </div>
      </>
  )
}
export default ElectronicsPage;