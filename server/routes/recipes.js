var express = require('express');
var router = express.Router();
const controller = require('../controllers/recipes');
const upload = require('../utilities/upload/multer');

router.get('/', controller.getAll)
      .get('/:id', controller.getOne)
      .get('/last3', controller.getLastThree)
      .get('/popular', controller.getPopular)
      .get('/breakfast', controller.getBreakfast)
      .get('/brunch', controller.getBrunch)
      .get('/lunch', controller.getLunch)
      .get('/dinner', controller.getDinner)
      .post('/', upload.single('image'), controller.create)
      .patch('/:id', controller.update)
      .delete('/:id', controller.destroy)


module.exports = router;



// 