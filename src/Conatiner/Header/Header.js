import logo from "../../Assets/img/headerlogo.svg";
import plus from "../../Assets/img/plus.svg";
import temur from "../../Assets/img/temir.jpg";
import "./main.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {Docontext} from "../../Context";

const Header = () => {
  const [index1] = useState(0)


  const {adding1} = Docontext()



  useEffect(() => {
    document.documentElement.style.setProperty("--index", index1)
    console.log(index1);
  }, [index1])
  return (
    <div className="wrapper">
     <div className="wrapper-inner">
        <div className="container nav">
          <Link to="/" className="nav-link" onClick={() => {
            document.querySelector(".footer").style.display = "block"
          }}>
            <img className="logo-img" src={logo} alt="logo" />

          </Link>

          <div className="nav-left">
            {
              adding1 ? (
                 <><div className="nav-left-div first-div">
                   <Link className="header-link" to="/update"> Объявления</Link>
                   <Link className="header-link" to="/"> Магазины </Link>
                   <Link className="header-link" to="/"> Для бизнеса </Link>
                   <Link className="header-link" to="/"> Помощь </Link>
                  <p>Рус</p><span> | </span>
                  <p>O’z</p>
                  </div>

                  {
                    window.localStorage.getItem("token") ? (
                      <Link className="profile-link" to="/profile">
                        <p>Темиров</p>
                        <img src={temur} alt="img" />
                      </Link>) : (
                      <Link to="/registr" className="nav-left-div  nav-link" >
                        <p> Вход </p> <span> | </span > <p> Регистрация </p> </Link>
                    )
                  }
              </>
              ) : (
              <><div className="nav-left-div first-div">
                  <p>Рус</p><span> | </span>
                  <p>O’z</p>
                  </div>
                  {
                    window.localStorage.getItem("token") ? (
                        <Link className="profile-link" to="/profile">
                          <p>Темиров</p>
                       <img src={temur} alt="img"/>
                    </Link>) : (
                      <Link to = "/registr"className = "nav-left-div  nav-link" >
                      <p> Вход </p> <span> | </span > <p> Регистрация </p> </Link>
                    )
                  }
              </>
              )
            }
          </div>
        </div>
        <div className="nav-bottom container">
          <div className="header-left">
            <div className="category" onMouseEnter={() => {
              document.querySelector(".select-category").classList.add("active1")
            }}
              onMouseLeave={() => {
                document.querySelector(".select-category").classList.remove("active1")
              }}
              onClick={(e) => {
                if (e.target.matches('.text')) {
                  document.querySelector(".default1").textContent = e.target.textContent

                }
              }}
            >
              <p className="default1">Любая категория</p><div className="select-category select">
                <p className="text">Любая категория</p>
                <p className="text" >Biznes категория</p>
                <p className="text">Sport категория</p>
              </div>
            </div>
            <div className="search-div">
              <input className="search-input" type="search" placeholder="Что будем искать ?" />
              <div className="search-category" onMouseEnter={() => {
                document.getElementById("select-region").classList.add("active")
              }}
                onMouseLeave={() => {
                  document.querySelector("#select-region").classList.remove("active")
                }}
                onClick={(e) => {
                  if (e.target.matches('.text')) {
                    document.querySelector(".default2").textContent = e.target.textContent

                  }
                }}
              >
                <p className="default2" >По всей Узбекистану</p>
                <div name="select" className="select" id="select-region">
                  <p className="text">Ташкент</p>
                  <p className="text">Фергана</p>
                  <p className="text"> По всей Узбекистану</p>
                </div>
              </div>
              <button className="btn-search">Найти</button>
            </div>
          </div>
          <div className="header-right">
            <span>
              <img className="plus-img" src={plus} alt="plus" />
            </span>
            <p>
              Добавить обьявления
              </p>
          </div>
        </div>
     </div>
    </div>
  )
}
export default Header;



















