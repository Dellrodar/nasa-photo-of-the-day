import React, {useState, useEffect} from 'react';
import axios from "axios";
import Card from "./card";

function GetAPODData(){
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then (res => {
            console.log(res.data);
            setData(res.data);
        });
    }, []);


    return (
        <div>
            <Card card={data} />
        </div>
    )
}
export default GetAPODData;