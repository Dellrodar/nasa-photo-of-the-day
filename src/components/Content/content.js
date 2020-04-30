import React, {useState, useEffect} from 'react';
import axios from "axios";
import Card from "./Card/card";
import { format } from 'date-fns'


function GetAPODData(props){
    const [data, setData] = useState([]);
    const apiKey = "DEMO_KEY";

    useEffect(() => {
        axios
          .get(
            `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${format(props.date, 'yyyy-MM-dd')}`
          )
          .then(res => setData(res.data))
          .catch(console.log);
      }, [props.date]);


    return (
        <div>
            <Card card={data} />
        </div>
    )
}
export default GetAPODData;