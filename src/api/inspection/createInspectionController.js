
const InspectionComponent = require("../../model/inspection/InspectionComponent")
const InspectionSubArea = require("../../model/inspection/InspectionSubArea")
const InspectionSubComponent = require("../../model/inspection/InspectionSubComponent")
const VisualHandsOnCondition = require("../../model/visualAndHandsOnCondition/VisualAndHandsOnCondition")
const Comment = require("../../model/comment/Comment")
const Action = require("../../model/action/Action")
const Estimation = require("../../model/estimation/Estimation")

const createInspectionController = async (req, res) => {

    try {


        var parts = req.body.parts
        var areaId = req.query.id
        for (let i = 0; i <= parts.length - 1; i++) {
            var partPrimaryObj = parts[i]

            var inspectComponent = await InspectionComponent.bulkCreate([{
                name: partPrimaryObj.name,
                partNumber: partPrimaryObj.partNumber,
                parentId: areaId
            }
            ])

        }
        var areas = req.body.areas
        if (areas) {

            for (let i = 0; i <= areas.length - 1; i++) { //SUB AREA START
                var areasPrimaryObj = areas[i]
                var inspectSubArea = await InspectionSubArea.create({
                    areaName: areasPrimaryObj.areaName,
                    parentId: areaId
                })


                let subParts = areasPrimaryObj.parts
                for (let i = 0; i <= subParts.length - 1; i++) {
                    let subareaPrimaryObj = subParts[i]
                    console.log(subareaPrimaryObj)
                    let inspectSubComp = await InspectionSubComponent.bulkCreate([{
                        name: subareaPrimaryObj.name,
                        partNumber: subareaPrimaryObj.partNumber,
                        subareaId: inspectSubArea.id
                    }]);

                }


            }//SUB AREA End


        }
        res.status(200).json({
            msg: "Data Inserted Successfully"
        })


    } catch (err) {
        res.status(500).json(err)
    }

}


const createVisualInspection = async (req, res) => {
    try {
        const { damage, missing, leaking, bent, defects, modified } = req.body.visualHandsOnCondition
        const name = req.query.name
        const { pass, repair, replace } = req.body.action
        const { quantity, parts, labour, cost } = req.body.estimation
        const { comment } = req.body.comment
        const visualConditionResult = await VisualHandsOnCondition.create({
            damage: damage,
            missing: missing,
            leaking: leaking,
            bent: bent,
            defects: defects,
            modified: modified,
            name: name,
            partNumber: req.body.visualHandsOnCondition.partNumber
        });
        const actionResult = await Action.create({
            pass: pass,
            repair: repair,
            replace: replace,
            name: name,
            partNumber: req.body.action.partNumber
        })

        const commentResult = await Comment.create({
            comment: comment,
            name: name,
            partNumber: req.body.comment.partNumber
        });
        const estimationResult = await Estimation.create({
            quantity: quantity,
            parts: parts,
            labour: labour,
            cost: cost,
            name: name,
            partNumber: req.body.estimation.partNumber
        });

        res.status(200).json({
            visualAndHandsOnCondition: visualConditionResult,
            action: actionResult,
            comment: commentResult,
            estimation: estimationResult
        });
    } catch (error) {
        res.status(500).json({ error });
    }
}

module.exports = { createInspectionController, createVisualInspection };