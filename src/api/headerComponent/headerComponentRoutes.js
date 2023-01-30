const express = require('express');
const router = express.Router();

const{createHeaderComponent}=require("./createHeaderComponent");
const { getHeaderComponent } = require('./getHeaderComponent');

router.post("/component",createHeaderComponent)
router.get("/component",getHeaderComponent)


module.exports=router;