// import { useEffect, useState } from 'react';
import DinnerList from './DinnerList/DinnerList';
import useFetch from '../useFetch';
import "./Dinner.css";

const Breakfast = () => {
    const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes/dinner');

    return ( 
        <div className="home"> 
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            { recipes && <DinnerList recipes={recipes} title="Dinner"/>}
            {/* {blogs && <BlogList blogs={blogs} title="Most Popular Recipes"/>} */}
        </div>
     );
}
 
export default Breakfast;