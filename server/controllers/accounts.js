const Account = require('../models/account');
const bcrypt = require('bcryptjs')
const response = require('../lib/response_handler');
const jwt = require('jsonwebtoken');

const getAll = async (req, res) => {
  const accounts = await Account.find();

  res.send({
    error: false,
    message: 'All accounts from the database',
    accounts: accounts
  });
};



const update = async (req, res) => {
  await Account.findByIdAndUpdate(req.params.id, req.body);
  const account = await Account.findById(req.params.id);

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
  try {
    let account = await Account.findOne({ email: req.body.email });
    if (account) {
      return res.send({
        error: true,
        message: 'Bad request. User exists with the provided emal.'
      });
    } 

    req.body.password = bcrypt.hashSync(req.body.password);

    account = await Account.create(req.body);
    
    res.send({
      error: false,
      message: 'New user has been created',
      user: user
    });

  } catch(error) {
    return response(res, 500, error.msg);
  }
  
}

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

        response(res, 200, "You have logged in succesfully", { token })

      } else {
        response(res, 401, "invalid credentials");
      }

    } else {
      response(res,500, "invalid credentials");
    } 

  } catch (error) {
    return response(res, 500, error.msg);
  }
}

module.exports = {
  getAll,
  update,
  destroy,
  login,
  register
}