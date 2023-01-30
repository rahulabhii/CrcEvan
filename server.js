const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { sequelize, connectToDb } = require('./src/domain/database/database');
const registerUserRouter = require('./src/api/registerUser/registerUserRoute');
const areaRouter = require('./src/api/area/areaRoute');
const inspectionRouter = require("./src/api/inspection/inspectionRoutes")
require("./src/model/area/Area");
require("./src/model/action/Action");
require("./src/model/comment/Comment");
require("./src/model/estimation/Estimation");
require("./src/model/headerComponent/HeaderComponent");
require("./src/model/visualAndHandsOnCondition/VisualAndHandsOnCondition")
const labourCost = require("./src/api/labourCost/labourCostRoutes")
const assetInformation = require("./src/api/assetInformation/assetInformationRoutes")
const inspectedBy = require("./src/api/inspectedBy/inspectedByRoutes")
const signatureRouter = require("./src/api/signature/signatureRoutes");
const sentEmailRouter = require('./src/api/emailSent/EmailSentRoutes');
const headerComponent = require("./src/api/headerComponent/headerComponentRoutes");
const path = require("path")
// configure cors
app.use(cors());
// configure express to accept form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/registeruser', registerUserRouter);
app.use('/api', areaRouter);
app.use('/api', inspectionRouter);
app.use("/api", labourCost);
app.use("/api", assetInformation);
app.use("/api", inspectedBy)
app.use("/api", signatureRouter)
app.use("/api", sentEmailRouter)
app.use("/api", headerComponent);



const port = process.env.PORT || 8000;


// sequelize.sync({ alter: false })
//   .then((result) => {
//     console.log('model connetd to db');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.listen(port, async () => {
  await connectToDb();
  console.log(`server is running in the ${port}`)
});


module.exports = app;
