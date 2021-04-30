import Goods from '../../Conatiner/goods/goods';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Smallpage = (a) => {
  
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
 
  switch (a) {
   case "first":
     return (
       <div className="small-link">
                 {
                  productList.isFetched ? (

                        <div className="card-container-row">
                            { 
                                
                                productList.data.slice(0, 4).map((props, index) => (
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
            ) : (
                <h1>Loading...</h1>
            )
        }
       </div>
     )

    case "second":
    return (
      <div className="small-link">
                {
            productList.isFetched ? (
                
                        <div className="card-container-row">
                            { 
                                
                                productList.data.slice(4, 8).map((props, index) => (
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
                    
            ) : (
                <h1>Loading...</h1>
            )
        }
      </div>
    )

   default:
     return (
       <div className="small-link">
           {
            productList.isFetched ? (

                        <div className="card-container-row">
                            { 
                                
                                productList.data.slice(10, 14).map((props, index) => (
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
            ) : (
                <h1>Loading...</h1>
            )
        }
       </div>
     )
   
 }
}
export default Smallpage;