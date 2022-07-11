import React from "react";
import Product from "./Product";
import data from "./data.json";
import "./style/main.css"
import Cart from "./cart";

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            cart: {},
            product:"",
            on: "",
            cartoc: false,
        }
    }
    filterProduct = (event) => {
        this.setState({
            product: event.target.value
        })
    }
    filterProductOnSize = (ele) => {
        this.setState({
            on:ele
        })
    }
    cartOpenClose = () => {
        this.setState((prevState) => {
            return{
                cartoc: !prevState.cartoc,
            }
        })
    }
    addproduct = (id) => {
        let {cart} = this.state;
        if(cart[id]){
            cart[id] = this.state.cart[id] + 1
        } else {
            cart[id] = 1
        }
        this.setState({cart});
    }
    handelRemoveQuentity = (id) => {
        let {cart} = this.state
        if(cart[id] === 1){
            cart[id] = 1
        } else {
            cart[id] = this.state.cart[id] - 1
        }
        this.setState({cart})
    }
    render() {
        let tag = data.products.map(ele => ele.availableSizes).flat();
        let all =[...new Set(tag)];
        var final;
        if(this.state.product === "low"){
            final = data.products.sort((a,b) => b.price - a.price)
        } else if(this.state.product === "high"){
            final = data.products.sort((a,b) => a.price - b.price)
        } else if(this.state.on){
            final = data.products.filter(ele => ele.availableSizes.includes(this.state.on))
        } else {
            final = data.products.map(ele => ele)
        }
        return(
            <div>
                <div className="container my-5 ">
                    <div className="d-flex justify-content-between">
                        <p>{final.length} Products Found</p>
                        <div className="d-flex">
                            <label className="me-3" htmlFor="pricefilter">Oreder by</label>
                            <select className="form-select" id="pricefilter" onChange={this.filterProduct}>
                              <option defaultValue>select by</option>
                              <option value="low">Lowest to Highest</option>
                              <option value="high">Highest to Lowest</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <div className="tag">
                            <ul className="text-center d-flex ps-0 flex-wrap ">
                                {
                                    all.map(ele => <button key={ele} className="btn btn-dark tags m-2 p-2 text-light rounded-circle" onClick={this.filterProductOnSize.bind(this,ele)}>{ele}</button>)
                                }
                            </ul>
                        </div>
                        <Product keys={final} final={final} addproduct={this.addproduct}/>
                    </div>
                </div>
                <button className={this.state.cartoc ? " btn btn-warning cross":"btn btn-warning bag"} onClick={this.cartOpenClose}>{this.state.cartoc ? "X" : <img src={`/static/bag-icon.png`} alt="bag"/>}</button>
                <div>
                    <Cart  state={this.state} addproduct={this.addproduct} removeq={this.handelRemoveQuentity}  />
                </div>
            </div>
        )
    }
}

export default Main;