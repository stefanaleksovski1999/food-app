// import { useEffect, useState } from 'react';
import FreshRecipeList from './FreshRecipeList/FreshRecipeList';
import MostPopularList from './MostPopularList/MostPopularList';
import useFetch from '../useFetch';
import "./Home.css";
import { useState, useEffect, useContext } from 'react';
import { UserContext } from "../../services/UserContext";

const Home = () => {

   const [mostPopular, setMostPopular] = useState(null);

   const [last3, setLast3] = useState(null)



   useEffect(() => {
       fetch('http://localhost:3000/recipes/popular', {
           method: 'get',
       })
       .then(res => {
           return res.json();
       })
       .then(data => {
            setMostPopular(data);
       });
   },[])
   
   useEffect(() => {
    fetch('http://localhost:3000/recipes/last3', {
        method: 'get',
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
         setLast3(data);
    });
},[])

  


    return ( 
        <div className="home"> 
            
            { last3 && <FreshRecipeList recipes={last3} title="Fresh & New"/>}
            { mostPopular && <MostPopularList recipes={mostPopular} title="Most Popular Recipes"/>}
        </div>
     );
}
 
export default Home;