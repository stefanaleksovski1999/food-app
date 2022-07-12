const Account = require('../models/account');
const bcrypt = require('bcryptjs')
const response = require('../lib/response_handler');
const jwt = require('jsonwebtoken');

const getAll = async (req, res) => {
  const accounts = await Account.find().populate('recipes', "title");

  res.send({
    error: false,
    message: 'All accounts from the database',
    accounts: accounts
  });
};


const uploadImg = async (req, res) => {
  await Account.findByIdAndUpdate(req.params.id, req.body);
  req.body.image = `http://localhost:3000/images/${req.file.filename}`
  const account = await Account.findByIdAndUpdate(req.params.id, req.body);

  res.send({
    error: false,
    message: `Account with id #${account._id} has been updated`,
    account: account
  });
};


const update = async (req, res) => {
  const account = await Account.findByIdAndUpdate(req.params.id, req.body).populate('recipes', "title");

  res.send({
    error: false,
    message: `Account with id #${account._id} has been updated`,
    account: account
  });
};


const destroy = async (req, res) => {
  await Account.findByIdAndDelete(req.params.id);
  
  res.send({
    error: false,
    message: `Account with id #${req.params.id} has been deleted`
  });
};






const register = async (req, res) => {

    console.log('zdravo')

    try {
      let account = await Account.findOne({ email: req.body.email });
      if (account) {
        return res.status(400).send({
          error: true,
          message: 'Bad request. User exists with the provided email.'
        });
      } 

      req.body.password = bcrypt.hashSync(req.body.password);

      const user = await Account.create(req.body);
      
      res.status(201).send({
        error: false,
        message: 'New user has been created',
        account: user
      });

    } catch(error) {
      return response(res, 500, error.msg);
    }
    
};


const login = async (req, res) => {
  try {
    const account = await Account.findOne({ email: req.body.email });
    if (account) {
      if (bcrypt.compareSync(req.body.password, account.password)) {
        const payload = {
          id: account._id,
          email: account.email,
          first_name: account.first_name
        }

        const token = jwt.sign(payload, '1234');

        response(res, 200, "You have logged in succesfully", { token, account } )

      } else {
        response(res, 401, "invalid credentials");
      }

    } else {
      response(res,500, "invalid credentials");
    } 

  } catch (error) {
    return response(res, 500, error.msg);
  }
};


module.exports = {
  getAll,
  uploadImg,
  update,
  destroy,
  login,
  register
}