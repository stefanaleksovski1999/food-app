var express = require('express');
var router = express.Router();
const controller = require('../controllers/accounts');
const upload = require('../utilities/upload/multer');

router.get('/', controller.getAll)
      .post('/create', controller.register)
      .post('/login', controller.login)
      // .post('/update/:id', controller.updateRecipe)
      .get('/:id', controller.getOne)
      .post('/:id', upload.single('image'), controller.update)
      .delete('/:id', controller.destroy)
      
module.exports = router;
