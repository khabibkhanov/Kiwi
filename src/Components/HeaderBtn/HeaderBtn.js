
const HeaderBtn = ({img}) => {
  return (
    <div className="header-btn" onClick={() => {
      if (document.querySelector(".card-wrapper")) {
        document.querySelector(".card-wrapper").classList.add("index")
      }
    }}>
      <img className="header-btn-img" src={img} alt="img"/>

    </div >
  )
}
export default HeaderBtn;