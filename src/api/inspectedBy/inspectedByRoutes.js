const express = require('express');
const router = express.Router();
const { body,validationResult } = require('express-validator');
const { createInspectedBy } = require('./inspectedByController');

router.post('/inspectedby', [
    body('userEmail').notEmpty().withMessage('userEmail required'),
    body('serialNumber').notEmpty().withMessage('serialNumber required'),
    body('assessmentDate').notEmpty().withMessage('assessmentDate required'),
    body('assessedBy').notEmpty().withMessage('assessedBy required'),
    body('dateOf').notEmpty().withMessage('dateOf required'),
    body('workOrder').notEmpty().withMessage('workOrder required'),
    body('dateReturned').notEmpty().withMessage('dateReturned required')
 ],
    (request, response, next) => {
        let errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() })
        } else {
            next();
        }
    }, createInspectedBy);

module.exports = router;

