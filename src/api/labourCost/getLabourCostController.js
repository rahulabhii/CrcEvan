const LabourCost = require("../../model/labourCost/LabourCost")

const getLabourCost = async (request,response)=>{
    try {
        let cost = await LabourCost.findOne({
            attributes:['cost'],
            where:{
                id:1
            }
        });
        return response.status(200).json({labourCost:cost})
    } catch (error) {
        response.status(500).json({error:error});
    }
};



module.exports ={
    getLabourCost
}