const AssetInformation = require('../../model/assetInformation/AssetInformation');

const createAssetInformation = async (request, response) => {
    try {
        let newAssetInformation = {
            userEmail: request.body.userEmail,
            serialNumber: request.body.serialNumber,
            description: request.body.description,
            plantCode: request.body.plantCode,
            assessmentDate: request.body.assessmentDate,
            workOrder: request.body.workOrder,
            dateReturned: request.body.dateReturned,
        };
        let assetInformation = AssetInformation.build(newAssetInformation);
        await assetInformation.save();
        return response.status(200).json({ assetInformation: assetInformation })
    } catch (error) {
        response.status(500).json({ error: error });
    }
};

module.exports = {
    createAssetInformation
}