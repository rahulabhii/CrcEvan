const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { createInspectionController, createVisualInspection } = require("./createInspectionController");
const { getInspectionController } = require('./getInspectionController');


// router.get("/area",getAllAreas);

router.post('/inspection', createInspectionController);
router.get('/inspection', getInspectionController);
router.post('/inspection/estimation', [
    body('visualHandsOnCondition').notEmpty().withMessage('visualHandsOnCondition object is required with fields damage,missing,leaking,bent,defects,modified'),
    body('action').notEmpty().withMessage('action object is required with fields pass,repair,replace'),
    body('estimation').notEmpty().withMessage('estimation object is required with fields quantity,parts,labour,cost'),
    body('comment').notEmpty().withMessage('comment field required')
], (request, response, next) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() })
    } else {
        next();
    }
}, createVisualInspection);



module.exports = router;

