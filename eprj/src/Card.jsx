// import { Component } from "react";

//  export class Card extends Component{
//     constructor(){
//         super()
//         this.state={color:"red"}
//     }
//     render(){
//         return(<h1>{this.state.color}</h1>)
//     }
// }

import "./Card.css"
 export function  Card(props ) {

   
        return(
            <>
            <h1 style={{color:"red"}}>hiii  {props.name}</h1>
           <h3 className="age"> age is {props.age}   addres is {props.addres}</h3>
           

            </>
        )
    }

