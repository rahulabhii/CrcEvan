'use strict';
const app=require("./server")
const serverless=require("serverless-http");


module.exports.asset_inspection =serverless(app)
