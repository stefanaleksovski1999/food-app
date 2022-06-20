// import { useEffect, useState } from 'react';
import FreshRecipeList from './FreshRecipeList/FreshRecipeList';
import MostPopularList from './MostPopularList/MostPopularList';
import useFetch from '../useFetch';
import "./Home.css";
import { useState, useEffect } from 'react';

const Home = () => {
   const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes/last3');
   const [mostPopular, setMostPopular] = useState(null);


   useEffect(() => {
       fetch('http://localhost:3000/recipes/popular')
       .then(res => {
           return res.json();
       })
       .then(data => {
            console.log(data); 
            setMostPopular(data);
       });
   },[])
   
   console.log(mostPopular);


    return ( 
        <div className="home"> 
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            { recipes && <FreshRecipeList recipes={recipes} title="Fresh & New"/>}
            { mostPopular && <MostPopularList recipes={mostPopular} title="Most Popular Recipes"/>}
        </div>
     );
}
 
export default Home;