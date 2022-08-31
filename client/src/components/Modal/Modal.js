import React from 'react'
import "./Modal.css"
import { useState, useContext } from 'react';
import { UserContext } from "../../services/UserContext";



function Modal({ closeModal, recipe, setModalContent }) {
    const { loggedUser } = useContext(UserContext);


    const [likes, setLikes] = useState(recipe.oneRecipe.likes);
    const [isLike, setIsLike] = useState(false);
    console.log(recipe);

    const onLikeButtonClick = () => {
        setLikes(likes + (isLike?-1:1));
        setIsLike(!isLike);
        
        console.log(likes);

        fetch(`http://localhost:3000/recipes/${recipe.oneRecipe._id}`, {
            method: 'PATCH',
            headers: { 
                'Authorization': `Bearer ${loggedUser.token}`
            },
            body: {
                "likes": likes
            }
        }).then(res => res.json())
        .then ((data) => {
            console.log(data)
        });
    }

  return (
    <div className="modalBackground" onClick={() => {closeModal(false); setModalContent(null)}}>
        <div className="modalContainer" onClick={(e) => {e.stopPropagation();}}>
            <div className="first-row">
                <div className="modalTitle">
                    <h1>{recipe.oneRecipe.title}</h1>
                </div>
                <div>
                    <button className="x-button" onClick={() => {closeModal(false); setModalContent(null)}}>x</button>
                </div>
            </div>
            
            <div className="modalContent">
                <div className="modal-leftSide">
                    <img className='modal-image' src={recipe.oneRecipe.image}/>
                    <div className="best-served-for">
                        <h2>Best Served For</h2>
                        <p className="modal-category">{recipe.oneRecipe.category}</p>
                    </div>
                    <p>{recipe.oneRecipe.short_description}</p>
                    <div className="card-info">
                        <div className="card-items">
                            <svg width="16.31px" fill="#A5A5A5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"/></svg>                              
                            <p className="card-footer-txt">{recipe.oneRecipe.preparation_time} min</p>
                        </div>
                        <div className="card-items">
                            <svg width="16.31px" fill="#A5A5A5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M221.6 148.7C224.7 161.3 224.8 174.5 222.1 187.2C219.3 199.1 213.6 211.9 205.6 222.1C191.1 238.6 173 249.1 151.1 254.1V472C151.1 482.6 147.8 492.8 140.3 500.3C132.8 507.8 122.6 512 111.1 512C101.4 512 91.22 507.8 83.71 500.3C76.21 492.8 71.1 482.6 71.1 472V254.1C50.96 250.1 31.96 238.9 18.3 222.4C10.19 212.2 4.529 200.3 1.755 187.5C-1.019 174.7-.8315 161.5 2.303 148.8L32.51 12.45C33.36 8.598 35.61 5.197 38.82 2.9C42.02 .602 45.97-.4297 49.89 .0026C53.82 .4302 57.46 2.303 60.1 5.259C62.74 8.214 64.18 12.04 64.16 16V160H81.53L98.62 11.91C99.02 8.635 100.6 5.621 103.1 3.434C105.5 1.248 108.7 .0401 111.1 .0401C115.3 .0401 118.5 1.248 120.9 3.434C123.4 5.621 124.1 8.635 125.4 11.91L142.5 160H159.1V16C159.1 12.07 161.4 8.268 163.1 5.317C166.6 2.366 170.2 .474 174.1 .0026C178-.4262 181.1 .619 185.2 2.936C188.4 5.253 190.6 8.677 191.5 12.55L221.6 148.7zM448 472C448 482.6 443.8 492.8 436.3 500.3C428.8 507.8 418.6 512 408 512C397.4 512 387.2 507.8 379.7 500.3C372.2 492.8 368 482.6 368 472V352H351.2C342.8 352 334.4 350.3 326.6 347.1C318.9 343.8 311.8 339.1 305.8 333.1C299.9 327.1 295.2 320 291.1 312.2C288.8 304.4 287.2 296 287.2 287.6L287.1 173.8C288 136.9 299.1 100.8 319.8 70.28C340.5 39.71 369.8 16.05 404.1 2.339C408.1 .401 414.2-.3202 419.4 .2391C424.6 .7982 429.6 2.62 433.9 5.546C438.2 8.472 441.8 12.41 444.2 17.03C446.7 21.64 447.1 26.78 448 32V472z"/></svg>
                            <p className="card-footer-txt">{recipe.oneRecipe.no_people} persons</p>
                        </div>
                        <div onClick={onLikeButtonClick}  className="card-items like-button"  >
                            <svg className={(isLike ? "liked" : "")} width="16.31px" fill="#A5A5A5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"/></svg>
                            <p className="card-footer-txt">{likes}</p>
                        </div>
                    </div>  

                </div>
                <div className="modal-rightSide">
                    <h2 className="modal-recipe-title">Recipe Details</h2>
                    <p className="modal-recipe-details">{recipe.oneRecipe.recipe}</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Modal