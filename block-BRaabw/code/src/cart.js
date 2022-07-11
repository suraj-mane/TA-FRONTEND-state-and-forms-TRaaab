import React from 'react';
import "./style/cart.css"
import data from "./data.json";

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
        let subTotal = final.reduce((prev, curr)=> {
          let singleItemPrice = curr.price * state.cart[curr.id]
           prev = prev + singleItemPrice;
           return Math.floor(prev, -1);
        }, 0);
        return(
            <div className={state.cartoc ? "before ":"after"} style={{width:"500px"}}>
                <div className='w-100 bg-dark text-center py-2'>
                <img src={`/static/bag-icon.png`} alt="bag"/>
                <hr className='text-light'/>
                    {
                        final.map((ele) => (
                            <div key={ele.id} className="card m-3 bg-dark text-light" style={{width:"450px",height:"150px"}}>
                              <div className="row g-0">
                                <div className="col-md-4">
                                  <img src={`/static/products/${ele.sku}_2.jpg`} style={{height:"150px"}} className="w-100 rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8 ">
                                  <div className="card-body d-flex justify-content-between">
                                    <h6 className="card-title ">{ele.title}</h6>
                                    <p className='text-warning'>${ele.price}</p>
                                  </div>
                                  <div>
                                    <p className='text-secondary text-start'>{ele.style}</p>
                                  </div>
                                  <div className='d-flex  justify-content-between'>
                                    <p>Quantity:{state.cart[ele.id]}</p>
                                    <div>
                                      <button className='btn btn-secondary me-1' onClick={() => this.props.addproduct(ele.id)}>+</button>
                                      <button className='btn btn-secondary' onClick={() => this.props.removeq(ele.id)}>-</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        ))
                    }
                  <div>
                    <div className='d-flex justify-content-between p-3'>
                      <h4 className='text-secondary'>SUBTOTAL</h4>
                      <h1 className='text-warning'>${subTotal}</h1>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default Cart;