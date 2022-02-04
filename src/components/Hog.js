import React, { useState } from "react";

function Hog({name, image, specialty, weight, greased, medal}){

    const [isHidden, setHidden] = useState(true)

    function handleClick(){
        setHidden(()=>!isHidden)
    }

    const hidden = isHidden ? "none" : "block"

    const isGreased = greased ? "no" : "yes"

    return(
        <div className="pigTile" onClick={handleClick}>
            <h3>Name: {name}</h3>
            <img src = {image} alt = {name}></img>
            <p style =  {{display: hidden}}> Specialty: {specialty}</p>
            <p style =  {{display: hidden}}>Weight: {weight}</p>
            <p style =  {{display: hidden}}>Greased: {isGreased}</p>
            <p style =  {{display: hidden}}>Highest Medal Achieved: {medal}</p>
        </div>
    )
}

export default Hog;