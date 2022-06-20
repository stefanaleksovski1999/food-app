// import { useEffect, useState } from 'react';
import LunchList from './LunchList/LunchList';
import useFetch from '../useFetch';
import "./Lunch.css";

const Lunch = () => {
    const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes/lunch');

    return ( 
        <div className="home"> 
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            { recipes && <LunchList recipes={recipes} title="Lunch"/>}
            {/* {blogs && <BlogList blogs={blogs} title="Most Popular Recipes"/>} */}
        </div>
     );
}
 
export default Lunch;