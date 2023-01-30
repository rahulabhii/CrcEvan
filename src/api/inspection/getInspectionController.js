

const InspectionComponent = require("../../model/inspection/InspectionComponent")
const InspectionSubArea = require("../../model/inspection/InspectionSubArea")
const InspectionSubComponent = require("../../model/inspection/InspectionSubComponent")


const getInspectionController = async (req, res) => {

  try {
    let id = req.query.id;

    let components = await InspectionComponent.findAll({
      where: {
        parentId: id
      }
    });
    let subArea = await InspectionSubArea.findAll({
      where: {
        parentId: id
      },
      include: [
        {
          model: InspectionSubComponent,
          // as:'partsaaaa'
        }
      ]
    });
    res.status(200).json({
      parts: components,
      areas: subArea
    });
  } catch (error) {
    res.status(500).json({ error: error })
  }
}
module.exports = {
  getInspectionController
};