import data from "./data";
import React from 'react';
import "./style/card.css"

class Card extends React.Component {
    constructor(props){
        super();
        this.state = {
            activeQ: "",
        }
    }
    handelClick = (ele) => {
        this.setState({
            activeQ:ele,
        })
    }
    render(){
        return (
            <div className="container text-center">
                <div className="mt-5">
                {
                    <ul className="">{
                        data.map(ele => <>
                            <li key={ele.Q} className={ele.Q === this.state.activeQ ? "bg-primary text-light p-3 fs-5 m-1 " :"bg-dark text-light p-3 fs-5 m-2 "} onClick={() => this.handelClick(ele.Q)}>{ele.Q}</li>
                            <li key={ele.A} className={ele.Q === this.state.activeQ ? " bg-primary text-light p-3 fs-5 d-block":"d-none"}>{ele.A}</li>
                            </>
                        )}
                    </ul>
                }
                </div>
            </div>
        )
    }
}

export default Card;