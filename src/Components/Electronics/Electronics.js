const Electronics = ({img,title,time,price,class1 }) => {
  return (
    <div  className={`card new-card ${class1}`}>
      <img className="card-img" src={img} alt="img"/>
      <div className="card-bottom">
        <h4 className="card-title">{title}</h4>
        <span className="card-time">{time}</span>
        <span className="card-price">{price}</span>
      </div>
    </div>
  )
}
export default Electronics;