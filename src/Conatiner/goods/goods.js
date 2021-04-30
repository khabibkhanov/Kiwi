import { Link } from "react-router-dom";
import './goods.scss';

const Goods = ({ id, image, title, time = 'Вчера 22:55', price }) => {
  const result = price * 10400;

  return (
   <Link  to={{ pathname: `/product/${id}/`, aboutProps:{ numberId: `${id}`} }}  className="link-single">
      <div className="card" >
        <div className="card-top">
          <img className="card-img" src={image} alt="img" />
        </div>
        <div className="card-bottom">
          <h4 className="card-title">{title}</h4>
          <span className="card-time">{time}</span>
          <span className="card-price">{result} сум</span>
        </div>
      </div>
   </Link>

  )
}
export default Goods;