import Goods from "../../Components/newGoods/newGoods";
import { Docontext } from "../../Context";
import axios from 'axios';
import { useState, useEffect } from 'react';

const Newgoodspage = () => {
  const {adding1,setAdd} = Docontext()
  function some() {
    setAdd(!adding1)
    window.localStorage.setItem("add",adding1)
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
    <div className="card-wrapper container" onClick={some }>
      
      {
            productList.isFetched ? (
                    <div>
                    <div className="card-wrapper">

                        <div className="card-container row">
                            { 
                                
                                productList.data.slice(2, 18).map((props, index) => (
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

      <button className="more">Покозать еще</button>
    </div>
  )
}

export default Newgoodspage;
