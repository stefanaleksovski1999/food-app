var express = require('express');
var router = express.Router();
const controller = require('../controllers/accounts');

router.get('/', controller.getAll)
      .post('/', controller.register)
      .patch('/:id', controller.update)
      .delete('/:id', controller.destroy)
      .post('/login', controller.login)
      
      

module.exports = router;
