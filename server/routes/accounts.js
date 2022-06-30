var express = require('express');
var router = express.Router();
const controller = require('../controllers/accounts');
const upload = require('../utilities/upload/multer');

router.get('/', controller.getAll)
      .post('/', controller.register)
      .post('/', upload.single('image'), controller.update)
      .post('/login', controller.login)
      .post('/:id', upload.single('image'), controller.update)
      .delete('/:id', controller.destroy)
      
      
      

module.exports = router;
