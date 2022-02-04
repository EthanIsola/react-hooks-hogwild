import React, {useState} from "react"

function Filter({handleChange}){

    return(
    <select name="filter" onChange={(e)=>handleChange(e)}>
        <option value="all">All</option>
        <option value="greased">Greased</option>
        <option value="ungreased">Ungreased</option>
    </select>
    )
}

export default Filter;