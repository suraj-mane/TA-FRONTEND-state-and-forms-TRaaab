import React from "react";
import Product from "./Product";
import data from "./data.json";
import "./style/main.css"
import Cart from "./cart";
import SideBar from "./sidebar";


class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            cart:[],
            size:[],
        }
    }
    filterProductOnSize = (size) => {
        if(this.state.size.includes(size)){
            this.setState((prevState) => ({
                size: prevState.size.filter((s) => s !== size)
            }))
        } else {
            this.setState((prevState) => ({
                size: prevState.size.concat(size)
            }))
        }
    }
    additemsincart = (item) => {
        this.setState((prevState) => ({
            cart: prevState.cart.concat(item),
        }))
    }
    deleteItems = (id) => {
        this.setState((prevState) => {
            let update = prevState.cart.filter((ele) => {
               return ele.id !== id
            })
            return {
                cart:update,
            }
        })
    }
    render() {
        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-3">
                        <SideBar product={data} size={this.state.size} filterProductOnSize={this.filterProductOnSize} />
                    </div>
                    <div className="col-9">
                        <Product data={data} size={this.state.size} filterProductOnSize={this.filterProductOnSize} additemsincart={this.additemsincart}/>
                    </div>
                </div>
                <Cart cartItems={this.state.cart} deleteItems={this.deleteItems}/>
            </div>
        )
    }
}

export default Main;