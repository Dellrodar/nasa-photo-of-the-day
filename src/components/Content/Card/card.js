import React from "react";


function Card(props) {
    return (
        <div className = "cardContainer">
            <h2>{props.card.title}</h2>
                <p>&copy; {props.card.copyright} Date: {props.card.date} </p>
                <img className = "mainContent" src={props.card.url} alt ="Astronomy Pic of the Day"/>
                <p>{props.card.explanation}</p>
        </div>
    )
}
export default Card;