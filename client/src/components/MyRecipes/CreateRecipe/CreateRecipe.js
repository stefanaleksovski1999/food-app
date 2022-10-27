import './CreateRecipe.css';
import { Link } from "react-router-dom";
import { UserContext } from "../../../services/UserContext";
import { useContext, useState, useEffect } from "react";

const CreateRecipe = () => {
    
    const [oneRecipe, setOneRecipe] = useState(null);
    const { token } = useContext(UserContext);


    const [file, setFile] = useState();
    const [image, setImage] = useState();
    const [recipeTitle, setRecipeTitle] = useState('');
    const [category, setCategory] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [noPeople, setNoPeople] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [recipe, setRecipe] = useState('');

    const { loggedUser } = useContext(UserContext);

    // const fileName = file.name
    const loggedUserId = loggedUser.account._id
   
    // const data = {fileName, recipeTitle, category, prepTime, noPeople, shortDescription, recipe, loggedUserId};

    const handleImgChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
    };
    
   
    const onSubmit = e => {

        // Object.keys(data).forEach(key => {
        //   if (data[key] === '') {
        //     delete data[key];
        //   }
        // })
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        formData.append('title', recipeTitle);
        formData.append('category', category);
        formData.append('preparation_time', prepTime);
        formData.append('no_people', noPeople);
        formData.append('recipe', recipe);
        formData.append('short_description', shortDescription);
        formData.append('account', loggedUserId);
          
  
        fetch(`http://localhost:3000/recipes/`, {
          method: 'POST',
          headers: { 
            'Authorization': `Bearer ${loggedUser.token}`,
          },
          body: formData
        }).then(res => res.json())
          .then ((data) => {
            console.log(data)

        });
    
      }



    return ( 
        <div>
            <div className="login-line plus-container">
                <h1 className="title"> <span className="adding-line">My Recipes</span> </h1>
                <Link to='/acc/my-recipes/'>
                    <svg className='plus-sign' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z"/></svg>
                </Link>            
            </div>

            <div className='edit-recipe-container'>
                <div className='item1'>
                    <p className='input-name'>Recipe Image</p>
                    <img className="avatar recipe-avatar"  src={image}/>
                    <label className='label-tag upload-recipe-img' for="inputTag">
                        UPLOAD IMAGE
                        <input 
                        id="inputTag" 
                        className='input-hidden' 
                        type="file"
                        onChange={handleImgChange}
                        />
                    </label>
                </div>

                <div className='item2'>
                    <div className="field-control">
                        <div>    
                            <label className="input-name">Recipe Title</label>
                            <input
                                
                                className="input-control recipe-title"
                                type="first-name"
                                onChange={(e) => {
                                    setRecipeTitle(e.target.value);
                                    }}
                                
                            />
                        </div>
                        <div className='recipe-row'>
                            <div className='gap-btwn'>
                            <label className='input-name'>Category</label>
                            <select 
                                class="input-control recipe-cat" 
                                name="option"
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                    }}
                                >
                                <option value="" disabled selected>Choose your option</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Brunch">Brunch</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                            </select>
                               
                               
                               
                                {/* <label className='input-name'>Category</label>
                                <input 
                                    className='input-control recipe-cat'
                                /> */}
                            </div>
                            <div className='gap-btwn'>
                                <label className='input-name'>Preparation Time</label>
                                <input 
                                    className='input-control prep-time'
                                    onChange={(e) => {
                                        setPrepTime(e.target.value);
                                        }}
                                />
                            </div>
                            <div>
                                <label className='input-name'>No. People</label>
                                <input 
                                    className='input-control prep-time'
                                    onChange={(e) => {
                                        setNoPeople(e.target.value);
                                        }}
                                />
                            </div>
                        </div>
                        <div>
                            <label className='input-name'>Short Description</label>
                            <textarea 
                                className='input-control short-desc'
                                onChange={(e) => {
                                    setShortDescription(e.target.value);
                                    }}
                            />
                        </div>
                        <button className="login-button2" onClick={onSubmit}>SAVE</button>
                    </div>
                </div>

                <div className='item3'>
                    
                    <label className='input-name'>Recipe</label>
                    <textarea 
                        className='input-control recipe-input'
                        type='text'
                        onChange={(e) => {
                            setRecipe(e.target.value);
                            }}
                    />
                    
                </div>

            </div>
        </div>
     );
}
 
export default CreateRecipe;