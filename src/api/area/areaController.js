const Area = require('../../model/area/Area');

const uploadArea = async (request, response) => {

    try {

        let newArea = {
            areaName: request.body.areaName,
            name: request.body.name
        }


        let mainarea = Area.build(newArea);
        await mainarea.save();
        response.status(200).json({ area: mainarea });
    } catch (error) {
        response.status(500).json({ error: error });
    }
};

const getAllAreas = async (request, response) => {

    try {
        const areas = await Area.findAll({
            where: {
                name: request.query.equipmentId
            }
        });
        response.status(200).json({ areas });
    } catch (error) {
        response.status(500).json({ error: error });
    }
};

module.exports = {
    uploadArea,
    getAllAreas
}