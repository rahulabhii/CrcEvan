const InspectedBy = require("../../model/inspectedBy/InspectedBy");

const createInspectedBy = async (request,response)=>{
    try {
        let newInspectedBy = {
            userEmail:request.body.userEmail,
            serialNumber:request.body.serialNumber,
            assessmentDate:request.body.assessmentDate,
            assessedBy:request.body.assessedBy,
            dateOf:request.body.dateOf,
            workOrder:request.body.workOrder,
            dateReturned:request.body.dateReturned
        };
        let inspectedBy = InspectedBy.build(newInspectedBy);
        await inspectedBy.save();
        return response.status(200).json({inspectedBy:inspectedBy})
    } catch (error) {
        response.status(500).json({error:error});
    }
};

module.exports ={
    createInspectedBy
}