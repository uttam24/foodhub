import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';

import axios from 'axios';
const FoodRecipe =()=>{
	const APP_ID ='bd621650';
	const API_KEY ='1c248f70e07c6d8b07f3bab3b0302fa1';
	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('burger');
	useEffect(()=>{
		getRecipe();
	}, [query]);

	const getRecipe = async() => {
		const responce = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)
		setRecipes(responce.data.hits);
		console.log(responce.data.hits)
	}

	const updateSearch =(e) =>{
		setSearch(e.target.value);
	}

	const updateQuery =(e)=>{
		e.preventDefault();
		setQuery(search);
	}

	return (
		<div className="container">
		<div className="body">
		 <form onSubmit={updateQuery}>
		 	<div className="input-group mb-3 w-50 mx-auto mt-3">
			  <input type="text" className="form-control" placeholder="Recipe"  value={search} onChange={updateSearch}/>
			  <div className="input-group-append">
			    <button className="btn btn-danger" type="submit">Search Recipe</button>
			  </div>
			</div>
		 </form>
		 <div className='row'>
			 {recipes.map((recipe)=>{
			 	return <Recipe 
			 	key={recipe.recipe.label}
			 	 title={recipe.recipe.label} 
			 	 calories={recipe.recipe.calories} 
			 	 image={recipe.recipe.image}
			 	 ingredients={recipe.recipe.ingredients}
			 	 />

			 })}

		 </div>
		 </div>
		</div>
		)
}

export default FoodRecipe