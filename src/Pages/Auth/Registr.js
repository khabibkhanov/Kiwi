import {  useRef, useState } from "react";
import { Link,  useHistory } from "react-router-dom";
import art from "../../Assets/img/art.jpg";

import "./main.css";
const Registr = () => {
  const [state1, setState1] = useState(false)
  const inputRef = useRef()
  const inputRef1 = useRef()
  const [state, setState] = useState(false)
  const history = useHistory()
 

  function some(e) {
    setState(true)
    e.preventDefault()
  }
function some1(e) {
  e.preventDefault()
  e.target.classList.remove("open")
  setState1(true)


}

function some2(e) {
  e.preventDefault()
  history.push("/login")

}
  return (
    <div className="login container">
      <div className="login-left">
        <h3 className="form-title">Бесплатная регистрация</h3>
        <form onSubmit={some} className={`login-form form1 ${state ? "hide" : ""}`} >
          <input ref={inputRef1} className="name-input" type="name" placeholder="Темиров Зухриддин" required />
          <button  className="name-input-btn">Далее</button>
          <div className="or-div">или</div>
          <div className="form-link">Войдите в систему, если у вас уже есть аккаунт kivi.uz</div>
        </form>
        <form onSubmit={some1} className={`login-form login-form2 ${state ? "open" : ""}`} >
          <label>Введите ваш email</label>
          <input ref={inputRef} className="name-input email1" type="email" placeholder="example@kivi.uz" required />
          <label className="number-label"><span className="number-span">Введите ваш номер телефона
          </span><input className="number-input1 name-input" type="number" placeholder="998" required />
            <input className="number-input2 name-input" type="number" placeholder="97 772 13 44" required/>
          </label>
          <div className="contract">
            <Link to="/registr">Нажимая на кнопку «Получить доступ», я даю согласие на обработку персональных данных и соглашаюсь c условиями <p>договора-оферты и  политикой <br /> конфиденциальности</p></Link>
          </div>
          <div className="btn-wrapper">
            <button onClick={() => {
              setState(!state)
            }} className="back"></button>
            <button className="name-input-btn recieve-btn">Получить доступ</button>
          </div>

          <div className="or-div">или</div>
          <div className="form-link">Войдите в систему, если у вас уже есть аккаунт kivi.uz</div>
        </form>
        <form onSubmit={some2} className={`login-form login-form3 ${state1 ? "open" : ""} `} >
          <p>Код отправлен в виде смс на указанный номер телефона</p>
          <label className="number-label">
            <span className="number-span">Введите ваш номер телефона</span>
            <input className="number-input2 name-input read1" type="number" placeholder="97 772 13 44" required />
            <input className="number-input1 name-input read" type="number" readOnly placeholder="90s" required />
          </label>
          <input ref={inputRef} className="name-input password" type="password" placeholder="Введите код подтверждения" required />
          <button className="name-input-btn">Далее</button>
          <div className="or-div">или</div>
          <div className="form-link">Войдите в систему, если у вас уже есть аккаунт kivi.uz</div>
        </form>



      </div>
      <div className="login-right">
        <div className="advertise">
          <img className="art-img" src={art} alt="art" />
        </div>
      </div>
    </div>
  )
}

export default Registr;