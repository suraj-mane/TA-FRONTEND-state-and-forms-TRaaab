import React from 'react';
import "./style/product.css"
import OrderBy from "./orederBy";

class Product extends React.Component {
    constructor(props){
        super();
        this.state = {
            product: "",
        }
    }
    filterProduct = (event) => {
        this.setState({
            product: event.target.value,
        })
    } 
    handelproduct = (order,size,products) => {
        let final = [...products];
        if(order === "low"){
            final = final.sort((a,b) => a.price - b.price)
        } 
        if(order === "high"){
            final = final.sort((a,b) => b.price - a.price)
        }
        if(size.length > 0){
            final = final.filter((p) => {
                for (const sizes of size) {
                    if (p.availableSizes.includes(sizes)) {
                        return true
                    }
                }
            });
        }
        return final;
    }
    render(){
        let {product} = this.state;
        let products = this.handelproduct(product, this.props.size,this.props.data.products);
        return(         
                <div className='mb-2-'>
                    <div className='row'>
                        <div className="col-7">
                          <p>{products.length} Products founds</p>
                        </div>
                        <div className="col">
                           <OrderBy filterProduct={this.filterProduct} />
                        </div>
                    </div>
                    <div className='d-flex flex-wrap text-center'>
                        {
                            products.map((items) => (
                                <Products {...items} additemsincart={this.props.additemsincart}/>
                            ))
                        }
                    </div>
                </div>
        )
    }  
}

function Products(props) {
    return (
        <div className="card  m-3" style={{width: "240px"}}>
        {props.isFreeShipping ? <small className='bg-dark position-absolute top-0 end-0 text-light'>Free Shopping</small> : "" }
        <img src={`/static/products/${props.sku}_1.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h6 className="card-title">{props.title}</h6>
          <hr className='m-auto my-1 text-warning' style={{width:"20px"}} />
          <p>{props.currencyFormat}<small className='fs-4 fw-bold'>{props.price}</small></p>
          <button className="btn btn-dark w-100" onClick={() => props.additemsincart(props)}>Add To Cart</button>
        </div>
      </div>
    );
  }

export default Product;