// import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import FreshRecipeList from './FreshRecipeList/FreshRecipeList';
import MostPopularList from './MostPopularList/MostPopularList';
import useFetch from '../useFetch';
import "./Home.css";
import { useState, useEffect, useContext } from 'react';
import { UserContext } from "../../services/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

   const [mostPopular, setMostPopular] = useState(null);

   const [last3, setLast3] = useState(null);

   const customId = "custom-id-yes";

   const notify = () => toast("Account created succesfully!", {toastId: customId});

   const location = useLocation();
    
   console.log(location.state);



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
       if(location.state) {
            notify();
        };
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
            { <ToastContainer />}
        </div>
     );
}
 
export default Home;