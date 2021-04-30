import { useEffect, useState } from "react";
import Goodspage from "../Goodspage/goodspage";
import Newgoodspage from "../Newgoods/newgoods";
import Slider from "../../Conatiner/Slider/Slider";
import "./main.css";
import smallpage from "../smallPage/smallPage";
import { Docontext } from "../../Context";
import group1 from "../../Assets/img/Group1.svg";
import group2 from "../../Assets/img/Group2.svg";
import group3 from "../../Assets/img/Group3.svg";
import group4 from "../../Assets/img/Group4.svg";
import group5 from "../../Assets/img/Group5.svg";
import group6 from "../../Assets/img/Group6.svg";
import group7 from "../../Assets/img/Group7.svg";
import group8 from "../../Assets/img/Group8.svg";
import arrow from "../../Assets/img/arrow.svg";
import HeaderBtn from "../../Components/HeaderBtn/HeaderBtn";
import dropdown from "../../Conatiner/Header/switch";

const Home = () => {
  const { state, setState } = Docontext()
  const [index, setIndex] = useState(0)
  const [page, setPage] = useState("")
  const [index1, setIndex1] = useState(0)
  const [class1, setClass1] = useState(false)
  const [open, setOpen] = useState("")
  const {setAdd} = Docontext()

  function openDropdown(e) {
    if (e.target.matches(".dropdown-link")) {
      setOpen("computer")
      if (e.target.matches(".special")) {
        setClass1(!class1)
        setOpen("")
       document.querySelector(".card-wrapper").classList.remove("index")
      }

    }
  }
  function minus1() {
    setIndex(index - 1)
    if (index < -3) {
      setIndex(0)
    }
  }
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
    document.documentElement.style.setProperty("--index", index1)
    console.log(index1);
  }, [index1])

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
  function some1(e) {
    setAdd(true)
    if (e.target.matches(".header-btn")) {
      setClass1(!class1)}
  }



  function SwitchState() {
    switch (state) {
      case "first":
        return (
          <>
            <header className="header container">

              <div className="slider-wrapper container">
                <button className="prev" onClick={add}><img src={arrow} alt="img" /></button>
                <button className="next" onClick={minus}><img src={arrow} alt="img" /></button>
                <div className="header-slider" onClick={some1}>
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
                <div className={`dropdown-wrapper ${class1 ? "" : "hidden"}`}>
                  <div onClick={openDropdown} className={`dropdown container ${class1 ? "" : "hidden"}`} >
                    {dropdown(open)}
                  </div>
                </div>
              </div>
            </header>
            <Newgoodspage />
            <div className="big-slider ">
              <Slider />
              <button className="prev1" onClick={remove2}></button>
              <button className="next1" onClick={minus1}></button>
            </div>
          </>
        )

      default:
        return (
          <>
            <header className="header container">

              <div className="slider-wrapper container">
                <button className="prev" onClick={add}><img src={arrow} alt="img" /></button>
                <button className="next" onClick={minus}><img src={arrow} alt="img" /></button>
                <div className="header-slider" onClick={(e) => {
                  if (e.target.matches(".header-btn")) {
                    setClass1(!class1)
                  }
                }}>
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
                <div className={`dropdown-wrapper ${class1 ? "" : "hidden"}`}>
                  <div onClick={openDropdown} className={`dropdown container ${class1 ? "" : "hidden"}`} >
                    {dropdown(open)}
                  </div>
                </div>
              </div>
            </header>
          <Goodspage />
            <div className="big-slider ">
              <Slider />
              <button className="prev1" onClick={minus1}>⬅️</button>
              <button className="next1" onClick={remove2}>➡️</button>
            </div>
          </>
        )
        
      }
    }
    
    
    return (
      <>
      <div className="popular-goods container">
        <button onClick={() => setState("")} to="./" className={`popular-link ${state === "first" ? "" : "active"}`}>Новые объявления</button>
        <button onClick={() => setState("first")} to="./" ods className={`popular-link ${state === "first" ? "active" : ""}`}>Лучщие предложение</button>
      </div>

      {
        SwitchState()
      }

      <div className="section7 container">
        <div className="section7-top">
          <p onClick={() => setPage("first")} className={`section-text ${page === "first" ? "active" : ""} `}>Просмотренные</p>
          <p onClick={() => setPage("second")} className={`section-text ${page === "second" ? "active" : ""}`}>Выбор редакции</p>
          <p onClick={() => setPage("")} className={`section-text ${page === "" ? "active" : ""}`}>Сниженные цены</p>
        </div>
        <div className="section7-bottom">
          {smallpage(page)}
        </div>
        <p className="more more2">Покозать еще</p>
      </div>

    </>
  )
}

export default Home;