const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { sentEmail } = require('./createEmailSent');
const { getEmail } = require("./getEmailSent")


router.get("/getreport", getEmail);


router.post('/sentreport', [
    body('to').notEmpty().withMessage('to is required'),
    body('url').notEmpty().withMessage('url is required')
],
    (request, response, next) => {
        let errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() })
        } else {
            next();
        }
    }, sentEmail);



module.exports = router;

