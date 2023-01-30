const express = require('express');
const router = express.Router();
const { body,validationResult } = require('express-validator');
const { createSignature } = require('./createSignatureController');
router.post('/signature', [
    body('signature').notEmpty().withMessage('signature required'),
    body('userEmail').notEmpty().withMessage('userEmail required')
 ],
    (request, response, next) => {
        let errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() })
        } else {
            next();
        }
    }, createSignature);
module.exports = router;