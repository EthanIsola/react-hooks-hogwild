import React, { useState } from "react";
import Nav from "./Nav";
import Hog from "./Hog";
import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {

	const [isGreased, setGreased] = useState("all")
	const [sortBy, setSortBy] = useState("all")


	function handleChange(e){
		if(e.target.value === "greased"){
			setGreased(true)
		}
		else if(e.target.value === "ungreased"){
			setGreased(false)
		}
		else{
			setGreased("all")
		}
    }

	

	let pigToDisplay = hogs.filter((hog) => {
		if (isGreased === "all") return true;
		else{
			return hog.greased === isGreased
		}});

	function handleSort(e){
		if(e.target.value === "name"){
			setSortBy(true)
		}
		else if(e.target.value === "weight"){
			pigToDisplay = pigToDisplay.sort(function(a, b) {
				return a.weight - b.weight;
			});
			setSortBy(false)
		}
		else{
			setSortBy("all")
		}
	}

	const hogList = pigToDisplay.map((hog)=>{
		return <Hog name = {hog.name} image = {hog.image} key = {hog.name} specialty = {hog.specialty}
		 weight = {hog.weight} greased = {hog.greased} medal = {hog["highest medal achieved"]}/>
	})	

	return (
		<div className="App" >
			<Nav />
				<select name="filter" onChange={(e)=>handleChange(e)}>
					<option value="all">All</option>
					<option value="greased">Greased</option>
					<option value="ungreased">Ungreased</option>
				</select>
				<p>Sort By</p>
				<select name="sorter" onChange={(e)=>handleSort(e)}>
					<option value="weight">Weight</option>
					<option value="name">Name</option>
				</select>
			{hogList}
		</div>
	);
}

export default App;
