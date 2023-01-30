const express = require('express');
const router = express.Router();
const { body,validationResult } = require('express-validator');
const { uploadRegisterUser, getRegisterUserByEmailId } = require('./registerController');

// register user
router.post('/register',[
    body('firstName').notEmpty().withMessage('firstName required'),
    body('lastName').notEmpty().withMessage('lastName required'),
    body('email').notEmpty().withMessage('email required'),
    body('token').notEmpty().withMessage('token required')
],(request, response, next) => {
    let errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(400).json({errors:errors.array()})
    }else{
        next();
    }
  },
  uploadRegisterUser
);

router.get('/:id',getRegisterUserByEmailId);

module.exports = router;