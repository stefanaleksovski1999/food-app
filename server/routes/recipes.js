var express = require('express');
var router = express.Router();
const controller = require('../controllers/recipes');
const upload = require('../utilities/upload/multer');
var { expressjwt: jwt } = require("express-jwt");
const response = require('../lib/response_handler');


router.use(jwt({
      secret: '1234',
      algorithms: ['HS256']
}).unless({
      path: [
            {
                  url: '/recipes/', methods: ['GET'] 
            },
            {
                  url: '/recipes/brunch', methods: ['GET'] 
            },
            {
                  url: '/recipes/breakfast', methods: ['GET'] 
            },
            {
                  url: '/recipes/last3', methods: ['GET'] 
            },
            {
                  url: '/recipes/popular', methods: ['GET'] 
            },
            {
                  url: '/recipes/breakfast', methods: ['GET'] 
            },
            {
                  url: '/recipes/brunch', methods: ['GET'] 
            },
            {
                  url: '/recipes/lunch', methods: ['GET'] 
            },
            {
                  url: '/recipes/dinner', methods: ['GET'] 
            },
            {
                  url: /^\/recipes\/.*/, methods: ['GET']
            }
      ]
}));  

router.use((err, req, res, next) => {
      if (err.name === 'UnauthorizedError') {
             response(res, 401, 'Unauthorized access');
      }
});

router.get('/', controller.getAll)
      .get('/last3', controller.getLastThree)
      .get('/popular', controller.getPopular)
      .get('/breakfast', controller.getBreakfast)
      .get('/brunch', controller.getBrunch)
      .get('/lunch', controller.getLunch)
      .get('/dinner', controller.getDinner)
      .post('/', upload.single('image'), controller.create)
      .get('/:id', controller.getOne)
      .patch('/:id', controller.update)
      .delete('/:id', controller.destroy)


module.exports = router;



// 