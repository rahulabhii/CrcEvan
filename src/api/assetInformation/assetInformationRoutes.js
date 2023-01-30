const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { createAssetInformation } = require('../assetInformation/assetInformationController');

router.post('/assetinformation', [
    body('userEmail').notEmpty().withMessage('userEmail required'),
    body('serialNumber').notEmpty().withMessage('serialNumber required'),
    body('description').notEmpty().withMessage('description required'),
    body('plantCode').notEmpty().withMessage('plantCode required'),
    body('assessmentDate').notEmpty().withMessage('assessmentDate required'),
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
    }, createAssetInformation);

module.exports = router;

