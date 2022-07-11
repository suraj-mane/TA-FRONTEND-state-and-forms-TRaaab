import React from 'react';
import "../style/product.css"

class Product extends React.Component {
    constructor(props){
        super();
    }
    render(){
        // let final = data.products.filter(ele => ele.availableSizes.includes("XL"));
        // let price = data.products.sort((a,b) => b.price - a.price)
        return(
                <div className='d-flex flex-wrap w-75'>
                    {
                        this.props.final.map((ele )=> { return (
                        <div className="card border border-0 p-1 mx-2 my-3 text-center" style={{width:"260px"}}>
                            <img  src={`/static/products/${ele.sku}_1.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body ">
                              <p className="card-title">{ele.title}</p>
                              <p className='border border-2 w-25 m-auto border-warning'></p>
                              <p className="card-text"><small className="text-muted fw-bold">${ele.price}</small></p>
                              <button className='btn btn-dark w-100' onClick={() => this.props.addproduct(ele.id)}>Add Card</button>
                            </div>
                        </div>)})
                    }
                </div>
        )
    }
}

export default Product;