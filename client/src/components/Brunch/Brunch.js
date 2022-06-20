// import { useEffect, useState } from 'react';
import BrunchList from './BrunchList/BrunchList';
import useFetch from '../useFetch';
import "./Brunch.css";

const Breakfast = () => {
    const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes/brunch');

    return ( 
        <div className="home"> 
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            { recipes && <BrunchList recipes={recipes} title="Brunch"/>}
            {/* {blogs && <BlogList blogs={blogs} title="Most Popular Recipes"/>} */}
        </div>
     );
}
 
export default Breakfast;