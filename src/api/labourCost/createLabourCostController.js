const LabourCost = require("../../model/labourCost/LabourCost")

const uploadLabourCost = async (request,response)=>{
    try {
        let newLabourCost = {
            cost:request.body.cost
        }

        let cost = LabourCost.build(newLabourCost);
        await cost.save();
        response.status(200).json({labourCost:cost});
    } catch (error) {
        response.status(500).json({error:error});
    }
};

module.exports ={
    uploadLabourCost
}