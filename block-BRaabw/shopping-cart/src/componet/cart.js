import React from 'react';
import "../style/cart.css"
import data from "../data/data.json";

class Cart extends React.Component {
    constructor(props){
        super();
    }
    render(){
        let { state } = this.props;
        let final = data.products.filter((pro) => {
            if(state.cart[pro.id]){
                return pro
            }
        })
        return(
            <div className={state.cartoc ? "before ":"after"} style={{width:"500px"}}>
                <div className='w-100 bg-dark text-center'>
                <img src={`/static/bag-icon.png`} alt="bag"/>
                <hr className='text-light'/>
                    {
                        final.map((ele) => (
                            <div key={ele.id} className="card m-3 bg-dark text-light" style={{width:"400px",height:"150px"}}>
                              <div className="row g-0">
                                <div className="col-md-4">
                                  <img src={`/static/products/${ele.sku}_2.jpg`} style={{height:"150px"}} className="w-100 rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                  <div className="card-body">
                                    <h5 className="card-title">{ele.title}</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Cart;