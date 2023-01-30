const express = require('express');
const router = express.Router();
const { body,validationResult } = require('express-validator');
const {  uploadArea,getAllAreas } = require('./areaController');

router.get("/area",getAllAreas);

router.post('/area', [
    body('areaName').notEmpty().withMessage('areaName required'),
    body('name').notEmpty().withMessage('name required')
 ],
    (request, response, next) => {
        let errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() })
        } else {
            next();
        }
    }, uploadArea);

module.exports = router;

