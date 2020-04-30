import React from "react";
import "./card.css"


function Card(props) {
    return (
        <div className = "cardContainer">
            <h2>{props.card.title}</h2>
                <p>&copy; {props.card.copyright} Date: {props.card.date} </p>
                <img className = "mainContent" src={props.card.url} alt ="Astronomy Pic of the Day"/>
                <h2 className = "pictureSubtitle">About this Photo</h2>
                <p className = "explaination">{props.card.explanation}</p>
        </div>
    )
}
export default Card;