
import instanse from "../../Services/https/index";
import { Link, useHistory } from "react-router-dom";
import art from "../../Assets/img/art.jpg";

const Login = ({setItem1}) => {
const history = useHistory()
const fetch = (e) => {
  e.preventDefault()
 instanse.post("/login",{
   email: "eve.holt@reqres.in",
   password: "cityslicka"
 }).then(res => {
   window.localStorage.setItem("token", res.data.token)
   setItem1(res.data.token)
 })
 history.push("/")
}
  return (
    <div className="login container">
    <div className="login-left">
        <h3 className="form-title">Бесплатная регистрация</h3>
        <form onSubmit={fetch} className="login-form " >
          <Link className="login-link" to="/registr">Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен в виде смс на ваше телефонный номер</Link>
          <label className="login-label" htmlFor="number">Введите email или номер телефона</label>
          <input id="number"  className="name-input" type="email" placeholder="99891 167 27 23" required />
          <label className="login-label" htmlFor="number1">Пароль</label>
          <input id="number1"  className="name-input" type="password" placeholder="*********" required />
          <button className="name-input-btn">Войти</button>
          <div className="or-div">или</div>
          <div className="form-link">Восстоновить ваше пароль</div>
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
export default Login;
