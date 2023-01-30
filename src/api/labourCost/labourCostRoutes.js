const express = require('express');
const router = express.Router();
const {getLabourCost} = require('../labourCost/getLabourCostController')
const {uploadLabourCost} = require('../labourCost/createLabourCostController')
const { body,validationResult } = require('express-validator');


router.get('/labourcost',getLabourCost);
router.post('/labourcost',[
    body('cost').notEmpty().withMessage('cost is required')
 ],
    (request, response, next) => {
        let errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() })
        } else {
            next();
        }
    },uploadLabourCost);
module.exports = router;

