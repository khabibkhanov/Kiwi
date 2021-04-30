import "./main.css";
import house from "../../Assets/img/house.jpg";
import Slider from "../../Conatiner/Slider/Slider";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import axios from 'axios';

const Singlepage = (props) => {

  const [number,setNumber] = useState(false)
  const [number1, setNumber1] = useState(false)
  const [index, setIndex] = useState(false)
  const [img,setImg] = useState(house)

  const [ productList, setProductList ] = useState({
    isFetched: false,
    data: {},
    error: null
  });

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${props.location.aboutProps.numberId}`,)
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


  useEffect(() => {
    document.documentElement.style.setProperty("--index1", index)
    console.log(index);
  }, [index])
  function remove2() {
    setIndex(index - 1)
    if (index === -4) {
      setIndex(0)
    }
  }

  function minus1() {
    setIndex(index - 1)
    if (index < -3) {
      setIndex(0)
    }
  }

  const item = productList.data
  const  result = productList.data.price * 10400;

  return (
    <>
      {
        productList.isFetched ? (
          
          <div>
            <div className="building container">
              <div className="links">
              <Link to="./" className="nest-link">Объявления   /</Link>
              <Link to="./" className="nest-link">Ташкент Недвижимость   /</Link>
              <Link to="./" className="nest-link">Ташкент Квартиры   /</Link>
              <Link to="./" className="nest-link">Ташкент Продажа   /</Link>
              <Link to="./" className="nest-link">Новостройки Ташкент</Link>
            </div>
            <div className="building-card">
              <h2 className="building-card-title">{item.title}</h2>
            <div className="building-card-inner">
                <div className="building-card-left">
                <div className="img-div">
                  <img onClick={() => setImg(productList.data.image)} className="building-card-img " src={productList.data.image} alt="img" />
                  <img onClick={() => setImg(productList.data.image)} className="building-card-img " src={productList.data.image} alt="img" />
                  <img onClick={() => setImg(productList.data.image)} className="building-card-img " src={productList.data.image} alt="img" />
                  <img onClick={() => setImg(productList.data.image)} className="building-card-img " src={productList.data.image} alt="img" />
                  <img onClick={() => setImg(productList.data.image)} className="building-card-img " src={productList.data.image} alt="img" />
                </div>
      
                <div className="building-card-img-wrapper">
                  <img className="building-card-img big-img" src={item.image} alt="img" />
                </div>
              </div>
              <div className="building-card-right">
                <div className="date">
                  <p>Артикул: 4418970 </p>
                  <p>обновлено: 28.04.17 добавлено: 28.04.17</p>
                </div>
                <div className="info">
                  <div className="info-price">{`${result} сум`}</div>
                  <div className="address">Ташкент, Ташкентская область, Юнусабадский район </div>
                  <div className="number">99891 166
                  <span className={`${number1 ? "open1" : ""}`}>
                      {number1 ? 1415 : "****"}
                  </span>
                    <p onClick={() => setNumber1(!number1)}>Покозать польностю</p></div>
                  <br/>
                    <div className="number">99891 166 <span className={`${number ?"open1" :""}`}>{number ? 2256 : "****"}</span><p onClick={() => setNumber(!number)}>Покозать польностю</p></div>
                    <div className="owner"><span>Автор обьявлении: </span><p>Зухриддин Темиров</p></div>
                  <div className="write-blok">
                    <button className="write-btn">Написать автору</button>
                    <button className="write-btn">Предложить свою цену</button>
                  </div>
                </div>
                <div className="table">
                  <div className="table-div">
                    <div>
                      <span>Количество комнат:</span>
                      <p>6</p>
                    </div>
                    <div>
                      <span>Общая площадь:</span>
                      <p>40 м2</p>
                    </div>
                    <div>
                      <span>Этаж:</span>
                      <p>32</p>
                    </div>
                  </div>
                  <div className="table-div">
                    <div>
                      <span>Этажность дома:</span>
                      <p>6</p>
                    </div>
                    <div>
                      <span>Состояние квартиры:</span>
                      <p>Первая сдача </p>
                    </div>
                    <div>
                      <span>Этаж:</span>
                      <p>32</p>
                    </div>
                  </div>
                  <div className="table-div">
                    <div>
                      <span>Планировка</span>
                      <p className="blue-text">Раздельная</p>
                    </div>
                    <div>
                      <span>Год постройки/сдачи</span>
                        <p className="blue-text">Сдача в 2017</p>
                    </div>
                    <div>
                      <span>Ремонт</span>
                      <p>Авторский проект</p>
                    </div>
                  </div>
                  <div className="table-div">
                    <div>
                      <span>Санузел</span>
                        <p className="blue-text">2 санузла и более</p>
                    </div>
                    <div>
                      <span>Меблирована</span>
                        <p className="blue-text">Да </p>
                    </div>
                    <div>
                      <span>Высота потолков</span>
                      <p>32</p>
                    </div>
                  </div>
                  <div className="table-text">
                    <span>категория</span>
                    <p>{item.category}</p>
                  </div>
                  <div className="table-content">
                    {item.description}
                  </div>
                  <div className="watch-info">
                    <p>Просмотры:10958</p>
                    <p>Пожаловатся</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
      
      
          </div>
            <div className="big-slider ">
              <Slider />
              <button className="prev1" onClick={minus1}></button>
              <button className="next1" onClick={remove2}></button>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )
      }
    </>
  )
}
export default Singlepage;