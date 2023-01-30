const HeaderComponent = require("../../model/headerComponent/HeaderComponent")
const Parts = require("../../model/headerComponent/Parts")
const SetupFor = require("../../model/headerComponent/SetupFor")
const TotalEstimation = require("../../model/headerComponent/TotalEstimation")
const VisualCondition = require("../../model/headerComponent/VisualCondition")


const createHeaderComponent = async (req, res) => {

    try {
        const headerComponent = await HeaderComponent.create({
            serialNumber: req.body.serialNumber,
            unitModel: req.body.unitModel,
            AssessmentDate: req.body.AssessmentDate,
            AssessmentBy: req.body.AssessmentBy,
            workOrder: req.body.workOrder,
            partNumber: req.body.partNumber,
            ReturnedDate: req.body.ReturnedDate,
            userEmail: req.body.userEmail,
            signature: req.body.signature
        })
        const headerComponentId = headerComponent.id

        const parts = req.body.parts
        let partComponentIdDatatosave=[]
        let setupForResultdatatodave=[]
        let estimationResultdatatosave=[]

        for (const element of parts) {
            
            // create Part 
            
            const partComponent = await Parts.create({...element,headercomponentId:headerComponentId})
           

            estimationResultdatatosave.push({
                quantity: element.totalestimation.quantity,
                partsEstimates: element.totalestimation.partsEstimates,
                labourHours: element.totalestimation.labourHours,
                cost: element.totalestimation.cost,
                partnumberId: partComponent.id
            })
            // map of visualcondition
            const visualPartComponent = element.visualcondition.map((value)=> {
                return {
                    ...value,
                    partnumberId : partComponent.id
                }
            })
            
            // map of setupfor
            const setupforPart = element?.setupfor.map((value)=> {
                return {
                    ...value,
                    partnumberId : partComponent.id
                }
            })

            partComponentIdDatatosave.push(...visualPartComponent)

            setupForResultdatatodave.push(...setupforPart)

        }
        // await VisualCondition.bulkCreate(partComponentIdDatatosave)
        // await SetupFor.bulkCreate(setupForResultdatatodave)
        // await TotalEstimation.bulkCreate(estimationResultdatatosave)

        await Promise.all([
            VisualCondition.bulkCreate(partComponentIdDatatosave),
            SetupFor.bulkCreate(setupForResultdatatodave),
            TotalEstimation.bulkCreate(estimationResultdatatosave)
          ]).catch(async e => {
            console.log(e,"error");

          });

        res.json({part:"success"})
        // res.status(201).json({ msg: "successfull" })
    } catch (err) {
        res.status(500).json({ msg: err })
    }

}


module.exports = { createHeaderComponent }