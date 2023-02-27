import "../css/celebrites.css";
import { useState } from "react";
const Celebs = () => {
    //database
    let stars=[
        {
            id:1,
            img:'images/RobertDowneyJr.jpeg',
            name:'Robert Downey Jr'
        },
        {
            id:2,
            img:'images/PaulWalker.jpeg',
            name:'Paul Walker'
        },
        {
            id:3,
            img:'images/JohnnyDepp.jpeg',
            name:'Johnny Depp'
        },
        {
            id:4,
            img:'images/ChrisEvans.jpeg',
            name:'Chris Evans'
        },
        {
            id:5,
            img:'images/ChrisHemsworth.jpeg',
            name:'Chris Hemsworth'
        }
    ]
    let[starsData,setData]=useState(stars)
    let handleRemove=(id,name)=>{
        setData(starsData.filter(x=>x.id!=id))
    }
    return (
        <div className="celebs">
            {starsData.map(data=>(
                <div className="celebs_list">
                    <div className="image">
                    <img src={data.img} alt="" />
                    </div>
                    <div className="info">
                    <h1>{data.name}</h1>
                    <button onClick={()=> handleRemove(data.id,data.name)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Celebs;