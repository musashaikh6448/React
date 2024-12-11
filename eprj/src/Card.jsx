import { Component } from "react";

 export class Card extends Component{
    constructor(){
        super()
        this.state={color:"red"}
    }
    render(){
        return(<h1>{this.state.color}</h1>)
    }
}