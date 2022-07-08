import React from "react";
import "../style/style.css"
class Font extends React.Component {
    constructor(){
        super();
        this.state = {
            word: ""
        }
    }
    handelData = (event) =>{
        this.setState({
            word: event.target.value,
        })
    }
    render(){
        return(
            <div className="container text-center">
                <div className="">
                    <input type="text" className="form-control w-75 ms-5 mt-5" placeholder="Type something"  onChange={this.handelData} />
                </div>
                <div className="d-flex flex-wrap">
                    <div className="card w-25 m-4 pb-5  box1">
                        <h6>Roboto Sans</h6>
                        <hr />
                        <p>{this.state.word}</p>
                    </div>
                    <div className="card w-25 m-4 pb-5 box2">
                        <h6>Potto One</h6>
                        <hr />
                        <p>{this.state.word}</p>
                    </div>
                    <div className="card w-25 m-4 pb-5 box3">
                        <h6>Yusei Magic</h6>
                        <hr />
                        <p>{this.state.word}</p>
                    </div>
                    <div className="card w-25 m-4 pb-5 box4">
                        <h6>Fraunces</h6>
                        <hr />
                        <p>{this.state.word}</p>
                    </div>
                    <div className="card w-25 m-4 pb-5 box5">
                        <h6>Lato</h6>
                        <hr />
                        <p>{this.state.word}</p>
                    </div>
                    <div className="card w-25 m-4 pb-5 box6">
                        <h6>Noto Sans</h6>
                        <hr />
                        <p>{this.state.word}</p>
                    </div>
                    <div className="card w-25 m-4 pb-5 box7">
                        <h6>Open Sans</h6>
                        <hr />
                        <p>{this.state.word}</p>
                    </div>
                    <div className="card w-25 m-4 pb-5 box8">
                        <h6>Monsterrat</h6>
                        <hr />
                        <p>{this.state.word}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Font;