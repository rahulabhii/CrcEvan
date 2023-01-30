const Area = require("../../model/area/Area")
const HeaderComponent = require("../../model/headerComponent/HeaderComponent")
const Parts = require("../../model/headerComponent/Parts")
const SetupFor = require("../../model/headerComponent/SetupFor")
const TotalEstimation = require("../../model/headerComponent/TotalEstimation")
const VisualCondition = require("../../model/headerComponent/VisualCondition")
const InspectionComponent = require("../../model/inspection/InspectionComponent")
const InspectionSubArea = require("../../model/inspection/InspectionSubArea")
const InspectionSubComponent = require("../../model/inspection/InspectionSubComponent")

const getHeaderComponent = async (req, res) => {
    try {
        let newlatestIds = await HeaderComponent.findAll({
            where: {
                userEmail: req.query.email
            }
        });

        let maxIdArr = newlatestIds.map((e, i) => {
            return e.id
        })
        let maxId = Math.max(...maxIdArr)
        console.log(maxId, '=================================================');
        const result = await HeaderComponent.findAll({
            where: {
                userEmail: req.query.email,
                id: maxId
            },
            include: [
                {
                    model: Parts,

                    include: [
                        {
                            model: VisualCondition,

                        },
                        {
                            model: SetupFor,

                        },
                        {
                            model: TotalEstimation
                        }

                    ]
                }
            ]
        })


        var areas = await Area.findAll({
            where: {
                name: req.query.equipmentId
            }

        }
        );


        let ids = areas.map((element) => {
            return element.id
        })


        const components = await InspectionComponent.findAll({
            where: {
                parentId: ids
            }
        });
        console.log('=======================')
        
        const subArea = await InspectionSubArea.findAll({
            where: {
                parentId: ids
            },
            include: [
                {
                    model: InspectionSubComponent,
                    
                }
            ]
        });

        const arr = []

        arr.push({ device: result, area: areas, component: components, subarea: subArea })

        const val = JSON.parse(JSON.stringify(arr, null, 2));

       
        let newArray = []
      

        const mainObject = val[0];
        newArray = mainObject.area;
        newArray.forEach((area) => {
            const component = mainObject.component.filter((c) => {
                return c.parentId === area.id;
            });
            area.component = component;





            area.component.forEach((other) => {
                const t = []
                const s = []
                other.visualconditions = [];
                other.setupfors = [];
                other.totalestimations = [];
                other.newV = '';
                other.setupData = '';
                other.quantity = '';
                other.partsEstimates = '';
                other.labourHours = '';
                other.cost = '';
                mainObject.device[0].partnumbers.map((r) => {

                    if (other.partNumber === r.partNumber && other.name === r.sideText) {
                        other.other = r;
                        other.visualconditions = r.visualconditions;
                        other.setupfors = r.setupfors;
                        other.totalestimations = r.totalestimations;
                        other.action = r.action;
                        other.comment = r.comment;
                        other.visualconditions.map(kk => {
                            if (kk.isSelected) {
                                t.push(kk.name)
                            }

                            other.newV = t.toString()
                            other.newV.toString()
                        })

                        other.setupfors.map(kk => {
                            if (kk.isSelected == 1) {
                                s.push(kk.name)

                            }

                            other.setupData = s.toString()

                            other.setupData.toString()

                        })

                        other.totalestimations.map(kk => {

                            other.quantity = kk.quantity;

                            other.partsEstimates = kk.partsEstimates

                            other.labourHours = kk.labourHours

                            other.cost = kk.cost



                        })

                    }

                });

            });
            if (area.areaName === "CENTER SECTION") {

                const allParts = []
                mainObject.subarea.map(p => {

                    if (p.areaName === 'CENTER HUB ' || p.areaName === 'ROTATING RING' || p.areaName === 'SPIDERS' || p.areaName === 'AIR CYLINDERS(FRONT & REAR)' || p.areaName === 'STIFF RING' || p.areaName === 'MISC ITEMS (ALWAYS RPLCD)') {
                        p.parts.forEach(pa => {
                            mainObject.device[0].partnumbers.forEach((r) => {
                                const t = []
                                const s = []
                                pa.visualconditions = [];
                                pa.setupfors = [];
                                pa.totalestimations = [];
                                pa.newV = '';
                                pa.setupData = '';
                                pa.action = '';
                                pa.comment = '';
                                pa.quantity = '';
                                pa.partsEstimates = '';
                                pa.labourHours = '';
                                pa.cost = '';

                            })
                            allParts.push(pa)


                        })
                    }

                })
                mainObject.device[0].partnumbers.forEach((r) => {
                    const t = []
                    const s = []
                    allParts.forEach(pa => {
                        if (r.partNumber === pa.partNumber && r.name === pa.sideText) {
                            pa.visualconditions = r.visualconditions;
                            pa.setupfors = r.setupfors;
                            pa.totalestimations = r.totalestimations;
                            pa.newV = '';
                            pa.action = r.action;
                            pa.comment = r.comment;
                            pa.setupData = '';
                            pa.quantity = '';
                            pa.partsEstimates = '';
                            pa.labourHours = '';
                            pa.cost = '';

                            pa.visualconditions.map(kk => {
                                if (kk.isSelected) {
                                    t.push(kk.name)
                                }
                                pa.newV = t.toString()
                                pa.newV.toString()
                            })
                            pa.setupfors.map(kk => {
                                if (kk.isSelected == 1) {
                                    s.push(kk.name)
                                }
                                pa.setupData = s.toString()
                                pa.setupData.toString()
                            })


                            pa.totalestimations.map(kk => {
                                pa.quantity = kk.quantity;
                                pa.partsEstimates = kk.partsEstimates
                                pa.labourHours = kk.labourHours
                                pa.cost = kk.cost
                            })

                        }
                    })
                })

                allParts.forEach(q => {
                    area.component = [...area.component, { ...q }];
                })

            }
            if (area.areaName === "OPERATIONAL INSPECTION") {

                const allParts = []
                mainObject.subarea.map(p => {

                    if (p.areaName === 'AIR / ELECTRICAL SYSTEM' || p.areaName === 'ELECTRICAL SYSTEM' || p.areaName === 'GAS SYSTEM' || p.areaName === 'SETUP' || p.areaName === 'MISC') {
                        p.parts.forEach(pa => {
                            mainObject.device[0].partnumbers.forEach((r) => {
                                const t = []
                                const s = []
                                pa.visualconditions = [];
                                pa.setupfors = [];
                                pa.totalestimations = [];
                                pa.newV = '';
                                pa.setupData = '';
                                pa.action = '';
                                pa.comment = '';
                                pa.quantity = '';
                                pa.partsEstimates = '';
                                pa.labourHours = '';
                                pa.cost = '';

                            })
                            allParts.push(pa)


                        })
                    }

                })
                mainObject.device[0].partnumbers.forEach((r) => {
                    const t = []
                    const s = []
                    allParts.forEach(pa => {
                        if (r.partNumber === pa.partNumber && r.name === pa.sideText) {
                            pa.visualconditions = r.visualconditions;
                            pa.setupfors = r.setupfors;
                            pa.totalestimations = r.totalestimations;
                            pa.newV = '';
                            pa.setupData = '';
                            pa.action = r.action;
                            pa.comment = r.comment;
                            pa.quantity = '';
                            pa.partsEstimates = '';
                            pa.labourHours = '';
                            pa.cost = '';

                            pa.visualconditions.map(kk => {
                                if (kk.isSelected) {
                                    t.push(kk.name)
                                }
                                pa.newV = t.toString()
                                pa.newV.toString()
                            })
                            pa.setupfors.map(kk => {
                                if (kk.isSelected == 1) {
                                    s.push(kk.name)
                                }
                                pa.setupData = s.toString()
                                pa.setupData.toString()
                            })


                            pa.totalestimations.map(kk => {
                                pa.quantity = kk.quantity;
                                pa.partsEstimates = kk.partsEstimates
                                pa.labourHours = kk.labourHours
                                pa.cost = kk.cost
                            })

                        }
                    })
                })

                allParts.forEach(q => {
                    area.component = [...area.component, { ...q }];
                })

            }


            mainObject.device.map(da => {
                area.unitModel = da.unitModel;
                area.serialNumber = da.serialNumber;
                area.partNumber = da.partNumber;
                area.AssessmentDate = da.AssessmentDate;
                area.AssessmentBy = da.AssessmentBy;
                area.workOrder = da.workOrder;
                area.ReturnedDate = da.ReturnedDate;
                area.signature = da.signature;
                area.userEmail = da.userEmail;
                area.componentLength = area.component.length + 1;
            })

        });

       
        res.status(200).json(newArray);
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: err })
    }


}


module.exports = { getHeaderComponent }