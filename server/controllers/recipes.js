const Recipe = require('../models/recipe');
const upload = require('../utilities/upload/multer');

const getAll = async (req, res) => {
  const recipes = await Recipe.find().populate('account', 'first_name last_name');

  res.send({
    error: false,
    message: 'All recipes from the database',
    recipes: recipes
  });
};

const getOne = async (req, res) => {
  const oneRecipe = await Recipe.findById(req.params.id).populate('account', 'first_name last_name');

  res.send({
    error:false,
    message: "One recipe from the database",
    oneRecipe
  })
}

const getLastThree = async (req, res) => {
  console.log("----------------------------")

  const recipes = await Recipe.find();
  console.log("----------------------------")
  const last3 = recipes.slice(-3);
  
  res.send({
    error: false,
    message: 'Last 3 recipes from the database',
    recipes: last3
  })
};

const getPopular = async (req, res) => {
  
  const recipes = await Recipe.find().populate('account', 'first_name last_name');

  recipes.sort(function (a, b) {
    return b.likes - a.likes;
  });

  console.log(recipes);

  const sixRecipes = recipes.slice(-6);

  res.send({
    error: false,
    message: 'Most popular recipes from the database',
    sixRecipes
  })

}

const getBreakfast = async (req, res) => {

  const recipes = await Recipe.find({ $or: [
    { "category": "Breakfast" }
   ] 
  });
  

  res.send({
    error: false,
    message: 'Breakfast recipes from the database',
    recipes: recipes
  })
  
};

const getBrunch = async (req, res) => {

  const recipes = await Recipe.find({ $or: [
    { "category": "Brunch" }
   ] 
  });
  

  res.send({
    error: false,
    message: 'Brunch recipes from the database',
    recipes: recipes
  })
  
};

const getLunch = async (req, res) => {

  const recipes = await Recipe.find({ $or: [
    { "category": "lunch" }
   ] 
  });
  

  res.send({
    error: false,
    message: 'Lunch recipes from the database',
    recipes: recipes
  })
  
};

const getDinner = async (req, res) => {

  const recipes = await Recipe.find({ $or: [
    { "category": "Dinner" }
   ] 
  });
  

  res.send({
    error: false,
    message: 'Dinner recipes from the database',
    recipes: recipes
  })
  
};

const  create = async (req, res) => {
  console.log(req.file.filename);
  try {
    req.body.image = `http://localhost:3000/images/${req.file.filename}`
    const recipe = await Recipe.create(req.body);
    console.log(recipe);
    res.status(201).send({
      error: false,
      message: `New recipe has been created!`,
      recipe
    });
  } catch (error) {
    res.send({
      error: true,
      message: error.message
    });
  }
};

const update = async (req, res) => {
  await Recipe.findByIdAndUpdate(req.params.id, req.body);
  const recipe = await Recipe.findById(req.params.id);

  res.send({
    error: false,
    message: `Recipe with id #${recipe._id} has been updated`,
    recipe: recipe
  });
};

const destroy = async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  
  res.send({
    error: false,
    message: `Recipe with id #${req.params.id} has been deleted`
  });
};

module.exports = {
  getAll,
  getOne,
  getLastThree,
  getPopular,
  getBreakfast,
  getBrunch,
  getLunch,
  getDinner,
  create,
  update,
  destroy
}