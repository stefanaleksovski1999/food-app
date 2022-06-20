// import { useEffect, useState } from 'react';
import BreakfastList from './BreakfastList/BreakfastList';
import useFetch from '../useFetch';
import "./Breakfast.css";

const Breakfast = () => {
    const { data: recipes, isPending, error } = useFetch('http://localhost:3000/recipes/breakfast');

    return ( 
        <div className="home"> 
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            { recipes && <BreakfastList recipes={recipes} title="Breakfast"/>}
        </div>
     );
}
 
export default Breakfast;