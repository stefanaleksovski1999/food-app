// import { useEffect, useState } from 'react';
import BreakfastList from './BreakfastList/BreakfastList';
import useFetch from '../useFetch';
import "./Breakfast.css";
import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from "../../services/UserContext";


const Breakfast = () => {
    // const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes/breakfast');
    const { token, setToken } = useContext(UserContext);
    console.log(token)

    const [breakfast, setBreakfast] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/recipes/breakfast', {
            method: 'get',
            headers: {
             'Authorization': `Bearer ${token}` , 
             
            }
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
             setBreakfast(data);
        });
    },[])

    return ( 
        <div className="home"> 
            { breakfast && <BreakfastList recipes={breakfast} title="Breakfast"/>}
        </div>
     );
}
 
export default Breakfast;